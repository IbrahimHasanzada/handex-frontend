import { getTranslations } from "next-intl/server";


export const formatDate = async (isoDate: string) => {
    const t =  await getTranslations();

    const date = new Date(isoDate);
    const day = date.getDate();
    const year = date.getFullYear();
    
    const month = t(`months.${date.getMonth()}`);

    return `${day} ${month} ${year}`;
};