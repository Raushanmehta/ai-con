import { IPricing } from "@/types";

export const pricingData: IPricing[] = [
    {
        name: "Free",
        price: 0,
        period: "month",
        features: [
            "Up to 10000 Words",
            "Collect data",
            "Community support",
            "Code extensibility",
            "Basic code review"
        ],
        mostPopular: false
    },
    {
        name: "Pro",
        price: 9,
        period: "month",
        features: [
            "Up to 10 people",
            "Collect data",
            "Custom reports",
            "Download image",
            "Code extensibility",
            "Advance code review",
            "Activity reporting"
        ],
        mostPopular: true
    },
    {
        name: "Enterprise",
        price: 19,
        period: "month",
        features: [
            "Unlimited Access",
            "Download image",
            "Dedicated support",
            "Unlimited projects",
            "Advance code review"
        ],
        mostPopular: false
    }
];