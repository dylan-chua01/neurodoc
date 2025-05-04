import Stripe from 'stripe';
import { getDbConnection } from './db';

export async function handleSubscriptionDeleted({
    subscriptionId,
    stripe,
}: {
    subscriptionId: string;
    stripe: Stripe;
}) {
    console.log('Subscription deleted', subscriptionId);

    try {
        const subscription = await stripe.subscriptions.retrieve(subscriptionId);

        const sql = await getDbConnection();

        await sql`UPDATE users SET status = 'cancelled' WHERE customer_id = ${subscription.customer}`;

        console.log('Subscription cancelled successfully');
    } catch (error) {
        console.error('Error handling subcription deleted', error);
        throw error;
    }
}


export async function handleCheckoutSessionCompleted({
    session,
    stripe,
}: {
    session: Stripe.Checkout.Session;
    stripe: Stripe;
}) {
    try {
        console.log('Checkout session completed', session.id);
        
        if (!session.customer) {
            throw new Error('No customer associated with this session');
        }

        const customerId = typeof session.customer === 'string'
            ? session.customer
            : session.customer.id;

const customer = await stripe.customers.retrieve(customerId);
        
        if (customer.deleted) {
            throw new Error('Customer record has been deleted');
        }

        const priceId = session.line_items?.data[0]?.price?.id;
        if (!priceId) {
            throw new Error('No price ID found in session');
        }

        if (isStripeCustomer(customer)) {
            const { email, name } = customer;

            if (!email) {
                throw new Error('Customer email is required');
            }

            const sql = await getDbConnection();

            await createOrUpdateUser({
                sql,
                email,
                fullName: name || '',
                customerId,
                priceId,
                status: 'active',
            });

            await createPayment({
                sql,
                session,
                priceId,
                userEmail: email,
            });
        }
    } catch (error) {
        console.error('Error in handleCheckoutSessionCompleted:', error);
        throw error; // Re-throw to allow for retry logic
    }
}

// Type guard for Stripe Customer
function isStripeCustomer(customer: any): customer is Stripe.Customer {
    return customer.object === 'customer' && !customer.deleted;
}

async function createOrUpdateUser({
    sql,
    email,
    fullName,
    customerId,
    priceId,
    status,
}: {
    sql: any;
    email: string;
    fullName: string;
    customerId: string;
    priceId: string;
    status: string;
}) {
    try {
        const [existingUser] = await sql`
            SELECT * FROM users WHERE email = ${email}
        `;

        if (!existingUser) {
            await sql`
                INSERT INTO users 
                    (email, full_name, customer_id, price_id, status) 
                VALUES 
                    (${email}, ${fullName}, ${customerId}, ${priceId}, ${status})
            `;
        } else {
            await sql`
                UPDATE users 
                SET 
                    full_name = ${fullName},
                    customer_id = ${customerId},
                    price_id = ${priceId},
                    status = ${status}
                WHERE email = ${email}
            `;
        }
    } catch (error) {
        console.error('Error creating or updating user:', error);
        throw error;
    }
}

async function createPayment({
    sql,
    session,
    priceId,
    userEmail,
}: {
    sql: any;
    session: Stripe.Checkout.Session;
    priceId: string;
    userEmail: string;
}) {
    try {
        const { amount_total, id, status } = session;

        if (!amount_total || !id || !status) {
            throw new Error('Missing required payment data');
        }

        await sql`
            INSERT INTO payments 
                (amount, status, stripe_payment_id, price_id, user_email) 
            VALUES 
                (${amount_total}, ${status}, ${id}, ${priceId}, ${userEmail})
        `;
    } catch (error) {
        console.error('Error creating payment:', error);
        throw error;
    }
}