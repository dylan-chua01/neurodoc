import { isDev } from "./helpers";

export const pricingPlans = [
    {
        id: 'basic',
        name: 'Basic',
        description: 'Perfect for personal use',
        price: 7,
        items: [
            '5 PDF summaries per month',
            'Standard processing speed',
            'Email suport',
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
            '24/7 priority support',
            'Markdown Export',
        ],
    }
];