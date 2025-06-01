import { getLocale } from 'next-intl/server';
import toast from 'react-hot-toast';

export const getContent = async (slug: string) => {
    const lang = await getLocale();
    try {
        const res = await fetch(`https://api.drafts.az/api/content/${slug}`, {
            cache: 'no-store',
            headers: {
                'accept-language': lang!
            }
        });
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
};

export const getCustomers = async () => {
    const lang = await getLocale();
    try {
        const res = await fetch('https://api.drafts.az/api/customers', {
            cache: 'no-store',
            headers: {
                'accept-language': lang!
            }
        });
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
};

export const getGeneral = async () => {
    try {
        const res = await fetch('https://api.drafts.az/api/general', {
            next: { revalidate: 3600 },
        });
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
};

export const getProfiles = async (model: string) => {
    try {
        const res = await fetch(`https://api.drafts.az/api/profiles?model=${model}`, {
            next: { revalidate: 3600 },
        });
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
};

export const getAllNews = async (lang: string, page: number = 0, query?: string) => {
    try {
        const baseUrl = `https://api.drafts.az/api/news?page=${page}`;
        const url = query ? `${baseUrl}&q=${encodeURIComponent(query)}` : baseUrl;

        const res = await fetch(url, {
            cache: 'no-store',
            headers: {
                'accept-language': lang!
            }
        });
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
};

export const getNews = async (slug: string) => {
    const lang = await getLocale();
    try {
        const res = await fetch(`https://api.drafts.az/api/news/${slug}`, {
            cache: 'no-store',
            headers: {
                'accept-language': lang!
            }
        });
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
};

export const getAllBlogs = async (lang: string, page: number = 0, query?: string) => {
    try {
        const baseUrl = `https://api.drafts.az/api/blogs?page=${page}`;
        const url = query ? `${baseUrl}&query=${encodeURIComponent(query)}` : baseUrl;

        const res = await fetch(url, {
            cache: 'no-store',
            headers: {
                'accept-language': lang!
            }
        });
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
};

export const getBlogs = async (slug: string) => {
    const lang = await getLocale();
    try {
        const res = await fetch(`https://api.drafts.az/api/blogs/${slug}`, {
            cache: 'no-store',
            headers: {
                'accept-language': lang!
            }
        });
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
};

export const getProjects = async (lang: string, page: number = 0) => {
    try {
        const res = await fetch(`https://api.drafts.az/api/project?page=${page}`, {
            cache: 'no-store',
            headers: {
                'accept-language': lang
            }
        });
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
};

export const getProject = async (slug: string) => {
    const lang = await getLocale();
    try {
        const res = await fetch(`https://api.drafts.az/api/project/${slug}`, {
            cache: 'no-store',
            next: { revalidate: 3600 },
            headers: {
                'accept-language': lang
            }
        });
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
};

export const getServices = async (lang: string, page: number = 0) => {
    try {
        const res = await fetch(`https://api.drafts.az/api/service`, {
            cache: 'no-store',
            headers: {
                'accept-language': lang
            }
        });
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
};

export const getService = async (slug: string) => {
    const lang = await getLocale();
    try {
        const res = await fetch(`https://api.drafts.az/api/service/${slug}`, {
            cache: 'no-store',
            headers: {
                'accept-language': lang
            }
        });
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
};

export const addConsultation = async (params: any) => {
    try {
        const res = await fetch('https://api.drafts.az/api/consultation', {
            next: { revalidate: 3600 },
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(params)
        });
        const data = await res.json();
        return data;
    } catch (err: any) {
        toast.error(err.message);
    }
};

export const getAbout = async () => {
    const lang = await getLocale();
    try {
        const res = await fetch('https://api.drafts.az/api/about', {
            next: { revalidate: 3600 },
            headers: {
                'accespt-language': lang
            }
        });
        const data = await res.json();
        return data[0];
    } catch (err) {
        throw err;
    }
};

export const getMeta = async (field: string) => {
    const lang = await getLocale();
    try {
        const res = await fetch(`https://api.drafts.az/api/meta/${field}`, {
            cache: 'no-store',
            headers: {
                'accept-language': lang
            }
        });
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
};

export const getStudyAreas = async () => {
    const locale = await getLocale();
    try {
        const res = await fetch('https://api.drafts.az/api/study-area', {
            cache: 'no-store',
            headers: {
                'accept-language': locale
            }
        });
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
};

export const getStudyArea = async (slug: string) => {
    const locale = await getLocale();
    try {
        const res = await fetch(`https://api.drafts.az/api/study-area/${slug}`, {
            cache: 'no-store',
            headers: {
                'accept-language': locale
            }
        });
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
};

export const addContact = async (params: any) => {
    try {
        const res = await fetch('https://api.drafts.az/api/contact', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(params)
        });
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
};
