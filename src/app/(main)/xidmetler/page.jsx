import { getServices, getMeta } from '@/service';
import { baseUrl } from '@/utils/url';
import ServiceClient from '../../../components/service/ServiceClient';

export const dynamic = "force-dynamic";

export async function generateMetadata() {
    const canonicalUrl = `${baseUrl}/xidmetler`;
    
    return {
        title: 'Handex biznesinizin inkişafı üçün peşəkar xidmətlər təklif edir.',
        description: 'Handex maliyyə, data, HR, hissəli ödəniş, avtomesaj, anbar qalığı hesablama və digər sizə uyğun olan xidmətlər ilə biznesinizin inkişafına dəstək olur.',
        alternates: {
            canonical: canonicalUrl,
        },
    };
}

const data = async () => {
    const service = await getServices('az');
    

    return <ServiceClient service={service} locale='az' />;
};

export default data;