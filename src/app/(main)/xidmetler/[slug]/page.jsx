import { getService } from '@/service';
import { baseUrl } from '@/utils/url';
import Share from '@/components/Share';

export async function generateMetadata({ params }) {
    const { slug } = await params;

    const serviceItem = await getService(slug);

    const metaArray = serviceItem?.meta ?? [];
    const metaMap = {};
    metaArray.forEach(item => {
        if (item.name && item.value) {
            metaMap[item.name] = item.value;
        }
    });

    const title = metaMap['title'] || 'Handex.az';
    const description = metaMap['description'] || '';

    const lang = 'az';
    const canonicalUrl = `${baseUrl}/xidmetler/${slug}`;

    return {
        title,
        description,
        alternates: {
            canonical: canonicalUrl
        }
    };
}

const page = async ({ params }) => {
    const { slug } = await params;

    let item = await getService(slug);

    // const t = await getTranslations();

    return (
        <div className='wrapper pt-30'>
            <div className='w-full gap-6 mt-15 md:flex justify-between'>
                <p className='text-base text-primary-corporate md:hidden block'>Xidmətlərimiz</p>
                <h1 className='text-[24px] md:hidden block mt-3 mb-6'>{item.title}</h1>
                <div className='md:w-1/2 flex flex-col items-start'>
                    <img className='w-full mb-15 object-cover rounded-[20px]' src={item?.image?.url} alt={item?.image?.alt} />
                    <div className='md:block hidden'>
                        <Share />
                    </div>
                </div>
                <div className='md:w-1/2'>
                    <p className='text-base text-[#909090] md:block hidden'>Xidmətlərimiz</p>
                    <p className='md:block hidden text-[30px] font-bold'>{item.title}</p>
                    <div className='text-base break-words' dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>
                <div className='md:hidden block w-max mx-auto mt-10'>
                    <Share />
                </div>
            </div>
        </div>
    );
};

export default page;