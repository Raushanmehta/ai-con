export interface SectionTitleProps {
    text1: string;
    text2: string;
    text3: string;
}

export interface TestimonialCardProps {
    testimonial: ITestimonial;
    index: number;
}

export interface ITestimonial {
    image: string;
    name: string;
    handle: string;
    date: string;
    quote: string;
}

import React from "react";

export interface IFeature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface IFooter {
    title: string;
    links: IFooterLink[];
}

export interface IFooterLink {
    name: string;
    href: string;
}

export interface NavbarProps {
    navlinks: INavLink[];
}

export interface INavLink {
    name: string;
    href: string;
}

export interface PricingCardProps {
    pricing: IPricing;
    index: number;
}

export interface IPricing {
    name: string;
    price: number;
    period: string;
    features: string[];
    mostPopular: boolean;
}

export interface SectionProps {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
}

type FieldType = "input" | "textarea"
export interface TEMPLATE{
    name: string,
    desc: string,
    category: string,
    icon: string,
    slug: string,
    aiPrompt: string,
    form: {
        label: string,
        field: FieldType,
        name: string,
        required?: boolean
    }[] 
}

export interface FORM{
    label: string,
    field: string,
    name: string,
    required?: boolean
}