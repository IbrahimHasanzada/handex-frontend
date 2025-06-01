import Statistics from '@/components/Statistics';
import Faq from '@/components/study-area/Faq';
import Groups from '@/components/study-area/Groups';
import Instructors from '@/components/study-area/Instructors';
import Program from '@/components/study-area/Program';
import { getContent, getStudyArea } from '@/service';
import { getTranslations } from 'next-intl/server';
import React from 'react';

// export async function generateMetadata(): Promise<Metadata> {
//     let lang = await getLocale();
//     const canonicalUrl = `${baseUrl}/study-area/${lang}`;
//     return {
//         title: 'Handex.az',
//         alternates: {
//             canonical: canonicalUrl,
//         },
//     };
// }

const page = async ({ params }: any) => {
    const { slug } = await params;
    const t = await getTranslations('study-area');


    const item = await getStudyArea(slug);
    const handex = await getContent('corporate-features');

    const color = item?.color;

    return (
        <div className='wrapper pt-45'>
            <div className='lg:bg-white lg:text-start text-center lg:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.03),0px_6px_10px_0px_rgba(0,0,0,0.07)] flex lg:flex-row flex-col justify-center lg:justify-between lg:px-6 py-8 rounded-[20px] items-center'>
                <div className='lg:w-1/2'>
                    <h1 className='lg:text-[72px] text-[30px] text-start font-bold lg:whitespace-nowrap'>{item?.name}</h1>
                    <p className='mt-2 my-7 text-start'>{item?.course_detail}</p>
                    <button className='px-8 cursor-pointer font-bold text-[#141414] py-2.5 bg-[#1818181A] rounded-full'>{t('apply')}</button>
                </div>
                <img className='lg:order-0 -order-1 md:size-100' src={item?.image?.url} alt="Study area image" />
            </div>
            <Program program={item.program} color={color} />
            <Groups groups={item.groups} color={color} />
            <h2 className='text-[38px] font-bold text-center mt-30'>{t('why.title')}</h2>
            <p className='text-[#909090] text-xl text-center mt-4'>{t('why.desc')}</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 pag-x-12 gap-6 mt-12'>
                {handex?.map((item: any, i: number) => (
                    <div key={i} className='bg-white box-shadow p-6 rounded-[20px]'>
                        <img className='mb-3 size-16' src={item?.images[0]?.url} alt={item?.images[0]?.alt} />
                        <h3 className='text-base text-[#141414] font-bold mb-2'>{item.title}</h3>
                        <p className='text-[#909090] text-sm font-normal'>{item.desc}</p>
                    </div>
                ))}
            </div>
            <div className='mt-30 box-shadow pb-6 rounded-[20px] bg-white lg:px-0 px-3 lg:text-start text-center lg:flex justify-between items-center'>
                <img src="/assets/Photo (13).svg" alt="Birbank image" />
                <div className='lg:w-1/2'>
                    <h3 className='lg:text-[68px] text-[24px] leading-[65px] lg:w-4/5 font-bold mb-5'>{t('ads.title')}</h3>
                    <p className='text-[#979797] mb-7 lg:text-xl'>{t('ads.desc')}</p>
                </div>
            </div>
            <div className='mt-30 mb-40'>
                <h2 className='text-[38px] font-bold'>{t('instructors')}</h2>
                <div className='mt-12'>
                    <Instructors />
                </div>
            </div>
            <div className='py-20'>
                <Statistics page='studyArea' />
            </div>
            <div className='mt-30'>
                <h2 className='font-bold mb-6'>{t('faq')}</h2>
                <Faq faq={item && item.faq} />
            </div>
        </div>
    );
};

export default page;