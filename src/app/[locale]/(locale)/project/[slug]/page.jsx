import { Suspense } from 'react';
import Share from '@/components/Share';
import { getTranslations } from 'next-intl/server';
import { getProject } from '@/service';

export async function generateMetadata({ params }) {
    const { slug } = params;
    const test = await getProject(slug);
    const meta = test?.meta;

    let metadata = {};

    meta.forEach(item => {
        let t = item.translations;
        let name = t.find(elm => elm.field === 'name');
        let value = t.find(elm => elm.field === 'value');

        metadata[name.value] = value.value;
    });

    return metadata;
}

const page = async ({ params }) => {
    const { slug } = params;

    let item = await getProject(slug);
    const t = await getTranslations();

    return (
        <Suspense>
            <div className='wrapper pt-30'>
                <div className='w-full gap-6 mt-15 md:flex justify-between'>
                    <h2 className='text-base text-primary-corporate md:hidden block'>{t('project.title')}</h2>
                    <h1 className='text-[24px] md:hidden block mt-3 mb-6'>{item.title}</h1>
                    <div className='md:w-1/2 flex flex-col items-start'>
                        <img className='w-full mb-15 object-cover rounded-[20px]' src="/assets/Image.svg" alt={item.title} />
                        <div className='md:block hidden'>
                            <Share />
                        </div>
                    </div>
                    <div className='md:w-1/2'>
                        <h2 className='text-base text-[#909090] md:block hidden'>{t('project.title')}</h2>
                        <h1 className='md:block hidden text-[30px] font-bold'>{item.title}</h1>
                        <div className='text-base' dangerouslySetInnerHTML={{ __html: item.description }} />
                    </div>
                    <div className='md:hidden block w-max mx-auto mt-10'>
                        <Share />
                    </div>
                </div>
            </div>
        </Suspense>
    );
};

export default page;