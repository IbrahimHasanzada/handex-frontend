import { getTranslations } from "next-intl/server";


export const formatDate = async (isoDate: string) => {
    const t =  await getTranslations();

    const date = new Date(isoDate);
    const day = date.getDate();
    const year = date.getFullYear();
    console.log(isoDate);
    
    const month = t(`months.${date.getMonth()}`);
    console.log(month);
    

    return `${day} ${month} ${year}`;
};