import HandexPreference from '@/components/HandexPreference';
import Statistics from '@/components/Statistics';
import Faq from '@/components/study-area/Faq';
import Groups from '@/components/study-area/Groups';
import Instructors from '@/components/study-area/Instructors';
import Program from '@/components/study-area/Program';
import StudyAreaModal from '@/components/study-area/StudyAreaModal';
import { getBrochure, getContent, getStudyAreaFaq, getStudyAreaItem, getStudyAreaProgram, getStudyAreas } from '@/service';
import { baseUrl } from '@/utils/url';
import React from 'react';

export async function generateMetadata({ params }: any) {
    const { slug } = await params;
    const item = await getStudyAreaItem(slug, 'home');
    const handex = await getContent('');

    const canonicalUrl = `${baseUrl}/tedris/${slug}`;
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
    const item = await getStudyAreaItem(slug, 'home');
    const study = await getStudyAreas('home');
    const programs = await getStudyAreaProgram('az', slug, 'home');
    const faq = await getStudyAreaFaq('az', slug, 'home');
    console.log(locale, slug);
    
    const brochure = await getBrochure(item?.id);

    const color = item?.color;
    return (
        <div className='wrapper pt-20 md:pt-45'>
            <div className='lg:bg-white lg:text-start text-center lg:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.03),0px_6px_10px_0px_rgba(0,0,0,0.07)] flex lg:flex-row flex-col justify-center lg:justify-between lg:px-9 py-8 rounded-[20px] items-center'>
                <div className='lg:w-1/2'>
                    <h1 className='lg:text-[72px] text-[30px] text-start font-bold lg:whitespace-nowrap'>{item?.name}</h1>
                    { item.hidden && <h2 className='hidden'>{item?.hidden}</h2> }
                    <div className='text-start' dangerouslySetInnerHTML={{ __html: item?.course_detail }} />
                    <StudyAreaModal study={study} />
                </div>
                <img className='lg:order-0 -order-1 md:size-100' src={item?.image?.url} alt="Study area image" />
            </div>
            {programs?.map((item: any) => <h3 className='hidden'>{item.name}</h3>)}
            <Program brochure={brochure ? brochure : null} slug={slug} locale={locale} program={item.program} color={color} />
            <Groups locale={locale} slug={slug} study={study} groups={item.groups} color={color} />
            <h3 className='text-2xl md:text-[38px] font-bold text-center mt-30'>Niyə Handex ?</h3>
            <p className='text-[#909090] text-xl text-center mt-4'>Müasir təhsil metodları və peşəkar dəstəklə karyeranızda yeni səhifə açın!</p>
            <HandexPreference slug='why-handex' />
            <div className='mt-44 box-shadow pb-6 md:pb-0 rounded-[20px] bg-white lg:px-0 px-3 lg:text-start text-center lg:flex justify-between items-center'>
                <img src="/assets/Photo (13).svg" alt="Birbank image" />
                <div className='lg:w-1/2'>
                    <p className='lg:text-[68px] text-[24px] leading-[65px] lg:w-4/5 font-bold mb-5'>Birkart ilə sərfəli fürsət</p>
                    <p className='text-[#979797] mb-7 lg:text-xl max-w-[500px]'>İstədiyiniz kursa qeydiyyatdan keçərək birkart və daxili kredit imkanlarından yararlana bilersiniz</p>
                </div>
            </div>
            <div className='mt-30'>
                <h4 className='text-2xl md:text-[38px] font-bold'>Təlimçilərimiz</h4>
                <div className='mt-12'>
                    <Instructors locale={locale} slug={slug} />
                </div>
            </div>
            <Statistics slug={slug} page='studyArea' />

            <div className='mt-6 md:mt-30'>
                <p className='font-bold text-2xl md:text-4xl mb-6'>Tez-tez verilən suallar</p>
                {faq?.map((item: any, i: number) => <h2 key={i} className='hidden'>{item.title}</h2>)}
                <Faq locale={locale} slug={slug} />
            </div>
        </div>
    );
};

export default page;