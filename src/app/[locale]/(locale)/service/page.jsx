import { getLocale, getTranslations } from 'next-intl/server';
import ServiceCard from '../../../../components/service/ServiceCard';
import { getServices } from '@/service';
import { baseUrl } from '@/utils/url';

export async function generateMetadata({ params }) {
    const { slug } = params;

    const projectItem = await getProject(slug);
    const metaArray = projectItem?.meta ?? [];
    const metaMap = {};
    metaArray.forEach(item => {
        if (item.name && item.value) {
            metaMap[item.name] = item.value;
        }
    });
}

const data = async () => {
    const t = await getTranslations('service');
    const service = await getServices();

    return (
        <div className='wrapper pt-30'>
            <h1 className='text-[38px] mt-15 text-[#141414] font-bold mb-12'>{t('title')}</h1>
            <div className='grid lg:grid-cols-2 gap-6'>
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
        </div>
    );
};

export default data;