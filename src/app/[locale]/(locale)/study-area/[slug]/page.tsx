import HandexPreference from '@/components/HandexPreference';
import Statistics from '@/components/Statistics';
import Faq from '@/components/study-area/Faq';
import Groups from '@/components/study-area/Groups';
import Instructors from '@/components/study-area/Instructors';
import Program from '@/components/study-area/Program';
import StudyAreaModal from '@/components/study-area/StudyAreaModal';
import { getContent, getGeneral, getMeta, getProfiles, getStudyArea, getStudyAreas } from '@/service';
import { baseUrl } from '@/utils/url';
import { getTranslations } from 'next-intl/server';
import { log } from 'node:console';
import React from 'react';

export async function generateMetadata({ params }: any) {
    const { locale, slug } = await params;
    let data = await getMeta('news');

    const canonicalUrl = `${baseUrl}/${locale}/study-area/${slug}`;
    if (data.error) {
        return {
            alternates: {
                canonical: canonicalUrl,
            },
        };
    }

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
    const { slug } = await params;
    const t = await getTranslations('study-area');

    const general = await getGeneral();
    const item = await getStudyArea(slug);
    const students = await getProfiles('instructor');
    const study = await getStudyAreas();


    const color = item?.color;

    return (
        <div className='wrapper pt-45'>
            <div className='lg:bg-white lg:text-start text-center lg:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.03),0px_6px_10px_0px_rgba(0,0,0,0.07)] flex lg:flex-row flex-col justify-center lg:justify-between lg:px-6 py-8 rounded-[20px] items-center'>
                <div className='lg:w-1/2'>
                    <h1 className='lg:text-[72px] text-[30px] text-start font-bold lg:whitespace-nowrap'>{item?.name}</h1>
                    <p className='mt-2 my-7 text-start'>{item?.course_detail}</p>
                    <StudyAreaModal study={study} />
                </div>
                <img className='lg:order-0 -order-1 md:size-100' src={item?.image?.url} alt="Study area image" />
            </div>
            <Program program={item.program} color={color} />
            <Groups study={study} groups={item.groups} color={color} />
            <h2 className='text-[38px] font-bold text-center mt-30'>{t('why.title')}</h2>
            <p className='text-[#909090] text-xl text-center mt-4'>{t('why.desc')}</p>
            <HandexPreference />
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
                    <Instructors students={students} />
                </div>
            </div>
            <div className='py-20'>
                <Statistics data={general} page='studyArea' />
            </div>
            <div className='mt-30'>
                <h2 className='font-bold mb-6'>{t('faq')}</h2>
                <Faq faq={item && item.faq} />
            </div>
        </div>
    );
};

export default page;