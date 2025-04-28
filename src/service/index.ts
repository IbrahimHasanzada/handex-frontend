
export const getContent = async (slug: string) => {
    try {
        const res = await fetch(`https://api.drafts.az/api/content/${slug}`);
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
};

export const getCustomers = async () => {
    try {
        const res = await fetch('https://api.drafts.az/api/customers?lang=az');
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
};

export const getGeneral = async (field: string) => {
    try {
        let res = await fetch('https://api.drafts.az/api/general');
        const data = await res.json();
        return data[0][field];
    } catch (err) {
        return (err);
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