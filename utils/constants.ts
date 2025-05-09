import { isDev } from "./helpers";

export const pricingPlans = [
    {
        id: 'weekly',
        name: 'Weekly',
        description: 'Perfect for one-off projects',
        price: 5,
        items: [
            '5 PDF summaries per week',
            'Standard processing speed',
            'Email suport',
            'Makrdown Export'
        ],
        paymentLink: isDev ? 'https://buy.stripe.com/test_5kA6oS9LUchLdFu6oq': '',
        priceId: isDev ? 'price_1RKbkXRggn37AxFTr8j1CCFo': '',
    },
    {
        id: 'basic',
        name: 'Basic',
        description: 'Perfect for personal use',
        price: 7,
        items: [
            '25 PDF summaries per month',
            'Standard processing speed',
            'Email suport',
            'Makrdown Export'
        ],
        paymentLink: isDev ? 'https://buy.stripe.com/test_00gfZs9LU6XreJycMM': '',
        priceId: isDev ? 'price_1RKbioRggn37AxFT4vWWTQ1P': '',
    },
    {
        id: 'pro',
        name: 'Pro',
        description: 'For professionals and teams',
        price: 12,
        paymentLink: isDev ? 'https://buy.stripe.com/test_9AQfZsf6ea9Dbxm5kl': '',
        priceId: isDev ? 'price_1RKbkXRggn37AxFTIC1oZeVg': '',
        items: [
            'Unlimited PDF summaries',
            'Priority processing',
            'Email and WhatsApp Support',
            'Markdown Export',
        ],
    }
];

export const containerVariants = {
    hidden: {opacity:0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        }
    }
}

export const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        transition: {
            type: 'spring',
            damping: 15,
            siffnness: 50,
            duration: 0.8,
        }
    }
}