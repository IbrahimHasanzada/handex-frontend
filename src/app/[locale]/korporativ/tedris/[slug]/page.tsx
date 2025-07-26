import HandexPreference from '@/components/HandexPreference';
import Statistics from '@/components/Statistics';
import Faq from '@/components/study-area/Faq';
import Groups from '@/components/study-area/Groups';
import Instructors from '@/components/study-area/Instructors';
import Program from '@/components/study-area/Program';
import StudyAreaModal from '@/components/study-area/StudyAreaModal';
import { getStudyAreaItem, getStudyAreas } from '@/service';
import { baseUrl } from '@/utils/url';
import { getTranslations } from 'next-intl/server';
import React from 'react';

export async function generateMetadata({ params }: any) {
    const { locale, slug } = await params;
    const item = await getStudyAreaItem(slug);

    const canonicalUrl = `${baseUrl}/korporativ/tedris/${slug}`;
    if (item.error) {
        return {
            alternates: {
                canonical: canonicalUrl,
            },
        };
    }
    const data = item.meta;

    let meta: any = {};
    data.forEach((item: any) => {
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

const page = async ({ params }: any) => {
    const { slug, locale } = await params;
    const t = await getTranslations('study-area');
    const item = await getStudyAreaItem(slug);
    const study = await getStudyAreas();

    const color = item?.color;

    return (
        <div className='wrapper pt-40'>
            <div className='lg:bg-[#282828] lg:text-start text-center lg:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.03),0px_6px_10px_0px_rgba(0,0,0,0.07)] flex lg:flex-row flex-col justify-center lg:justify-between lg:px-9 py-8 rounded-[20px] items-center'>
                <div className='lg:w-1/2'>
                    <h1 className='lg:text-[72px] text-[30px] text-start font-bold lg:whitespace-nowrap text-white'>{item?.name}</h1>
                    <div className='mt-2 my-7 text-start text-[#909090]' dangerouslySetInnerHTML={{ __html: item?.course_detail }} />
                    <StudyAreaModal model={item.model === 'corporate' ? true : false} study={study} />
                </div>
                <img className='lg:order-0 -order-1 md:size-100' src={item?.image?.url} alt="Study area image" />
            </div>
            <Program locale={locale} brochure={item.brochure || null} slug={slug} model={item.model === 'corporate' ? true : false} color={color} />
            <Groups locale={locale} slug={slug} model={item.model === 'corporate' ? true : false} study={study} color={color} />
            <h2 className={`${item.model === 'corporate' && 'text-white'} text-[38px] font-bold text-center mt-30`}>{t('why.title')}</h2>
            <p className='text-[#909090] text-xl text-center mt-4'>{t('why.desc')}</p>
            <HandexPreference model={item.model === 'corporate' ? true : false} />
            <div className={`${item.model === 'corporate' ? 'bg-[#282828]' : 'bg-white'} mt-30 box-shadow pb-6 rounded-[20px] lg:px-0 px-3 lg:text-start text-center lg:flex justify-between items-center`}>
                <img src="/assets/Photo (13).svg" alt="Birbank image" />
                <div className='lg:w-1/2'>
                    <h3 className={`${item.model === 'corporate' ? 'text-white' : 'text-black'} lg:text-[68px] text-[24px] leading-[65px] lg:w-4/5 font-bold mb-5`}>{t('ads.title')}</h3>
                    <p className='text-[#979797] mb-7 lg:text-xl'>{t('ads.desc')}</p>
                </div>
            </div>
            <div className='mt-30 mb-40'>
                <h2 className={`${item.model === 'corporate' && 'text-white'} text-[38px] font-bold`}>{t('instructors')}</h2>
                <div className='mt-12'>
                    <Instructors locale={locale} slug={slug} model={item.model === 'corporate' ? true : false} />
                </div>
            </div>
            <div className='py-20'>
                <Statistics slug={slug} model={item.model === 'corporate' ? true : false} page='studyArea' />
            </div>
            <div className='mt-30'>
                <h2 className={`font-bold mb-6 ${item.model === 'corporate' && 'text-white'}`}>{t('faq')}</h2>
                <Faq locale={locale} slug={slug} model={item.model === 'corporate' ? true : false} />
            </div>
        </div>
    );
};

export default page;