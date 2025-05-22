import { getLocale } from 'next-intl/server';
import toast from 'react-hot-toast';

export const getContent = async (slug: string) => {
    const lang = await getLocale();
    try {
        const res = await fetch(`https://api.drafts.az/api/content/${slug}`, {
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

export const getGeneral = async (field?: string) => {
    try {
        const res = await fetch('https://api.drafts.az/api/general');
        const data = await res.json();
        return field ? data[0][field] : data;
    } catch (err) {
        return err;
    }
};

export const getProfiles = async (model: string) => {
    try {
        const res = await fetch(`https://api.drafts.az/api/profiles?model=${model}`);
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
            next: { revalidate: 3600 },
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

export const getServices = async (lang: string, page: number = 0) => {
    try {
        const res = await fetch(`https://api.drafts.az/api/service`, {
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
    const token = localStorage.getItem('token');
    try {
        const res = await fetch('https://api.drafts.az/api/consultation', {
            next: { revalidate: 3600 },
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${token}`
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
    try {
        const res = await fetch('https://api.drafts.az/api/about');
        const data = await res.json();
        return data[0];
    } catch (err) {
        throw err;
    }
};

export const getMeta = async (field: string) => {
    const lang = await getLocale();
    try {
        let res = await fetch(`https://api.drafts.az/api/meta/${field}`, {
            headers: {
                'accept-language': lang
            }
        });
        let data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
};