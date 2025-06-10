import { getLocale, getTranslations } from 'next-intl/server';
import ServiceCard from '../../../../components/service/ServiceCard';
import { getServices, getMeta } from '@/service';
import { baseUrl } from '@/utils/url';
import ServiceClient from '../../../../components/service/ServiceClient';

export async function generateMetadata() {
    const locale = await getLocale();
    let data = await getMeta('service');

    const canonicalUrl = `${baseUrl}/${locale}/service`;
    if (data.error) {
        return {
            alternates: {
                canonical: canonicalUrl,
            },
        };
    }

    let meta = {};
    data.forEach(item => {
        meta[item.name] = item.value;
    });
    
    return {
        title: meta.title || undefined,
        description: meta.description || undefined,
        alternates: {
            canonical: canonicalUrl,
        },
    };
}

const data = async ({ params }) => {
    const { locale } = await params;
    const service = await getServices(locale);

    return <ServiceClient service={service} />;
};

export default data;