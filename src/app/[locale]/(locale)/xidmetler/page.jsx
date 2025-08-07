import { getLocale, getTranslations } from 'next-intl/server';
import ServiceCard from '../../../../components/service/ServiceCard';
import { getServices, getMeta } from '@/service';
import { baseUrl } from '@/utils/url';
import ServiceClient from '../../../../components/service/ServiceClient';

export async function generateMetadata() {
    const locale = await getLocale();

    const canonicalUrl = `${baseUrl}/xidmetler`;
    
    return {
        title: 'Handex biznesinizin inkişafı üçün peşəkar xidmətlər təklif edir.',
        description: 'Handex maliyyə, data, HR, hissəli ödəniş, avtomesaj, anbar qalığı hesablama və digər sizə uyğun olan xidmətlər ilə biznesinizin inkişafına dəstək olur.',
        alternates: {
            canonical: canonicalUrl,
        },
    };
}

const data = async ({ params }) => {
    const { locale } = await params;
    const service = await getServices(locale);
    

    return <ServiceClient service={service} locale={locale} />;
};

export default data;