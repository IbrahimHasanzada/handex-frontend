export interface BankLogo {
    id: number;
    url: string;
}

export interface CustomerProfile {
    id: number;
    url: string;
}

export interface Testimonial {
    id: number;
    name: string;
    bank_name: string;
    comment: string;
    bank_logo: BankLogo;
    customer_profile: CustomerProfile;
}

export interface TestimonialsDto {
    page: string;
    start: number
    data: Testimonial[];
}
