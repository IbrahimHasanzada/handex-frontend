export type LeadFormName = 'muraciet' | 'konsultasiya' | 'korporativ' | 'elaqe';

interface LeadData {
    formName: LeadFormName;
    course?: string;
    email?: string;
    phone?: string;
    firstName?: string;
    lastName?: string;
}

declare global {
    interface Window {
        dataLayer: Record<string, unknown>[];
    }
}

const lower = (value?: string) => (value || '').trim().toLowerCase();

// Meta expects digits only with the country code: 0501234567 / +994 50 123 45 67 / 501234567 → 994501234567.
export const normalizePhone = (value?: string) => {
    const digits = (value || '').replace(/\D/g, '');
    if (!digits || digits.startsWith('994')) return digits;
    if (digits.startsWith('0')) return '994' + digits.slice(1);
    if (digits.length === 9) return '994' + digits;
    return digits;
};

export const splitFullName = (fullName?: string) => {
    const [firstName = '', ...rest] = (fullName || '').trim().split(/\s+/);
    return { firstName, lastName: rest.join(' ') };
};

// Backend errors come back as { statusCode, message, error }; network failures as an Error or undefined.
export const isSuccessResponse = (response: any) =>
    !!response && !(response instanceof Error) && !response.error && !(response.statusCode >= 400);

// Call only after the backend confirmed the submission; GTM turns this into a Meta Pixel Lead event.
export const trackLead = ({ formName, course, email, phone, firstName, lastName }: LeadData) => {
    if (typeof window === 'undefined') return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'lead_submit',
        form_name: formName,
        course: (course || '').trim(),
        user_email: lower(email),
        user_phone: normalizePhone(phone),
        user_first_name: lower(firstName),
        user_last_name: lower(lastName),
    });
};
