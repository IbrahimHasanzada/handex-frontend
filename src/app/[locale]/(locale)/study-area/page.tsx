import Statistics from '@/components/Statistics';
import Faq from '@/components/study-area/Faq';
import Instructors from '@/components/study-area/Instructors';
import Program from '@/components/study-area/Program';
import { getTranslations } from 'next-intl/server';
import React from 'react';



const handex = [
    {
        img: '/assets/Photo (7).svg',
        title: 'Müasir Tədris Metodu',
        text: 'Davamlı yenilənən, müasir texnologiyalarla ayaqlaşan, innovativ tədris metodu ilə sahənizi ən son yenilikləri ilə öyrənirsiniz.'
    },
    {
        img: '/assets/Photo (8).svg',
        title: 'Mentor Dəstəyi',
        text: 'Nəzəri biliklərdən əlavə, praktikada sizə dəstək olan mentorlar fəaliyyət göstərir.'
    },
    {
        img: '/assets/Photo (9).svg',
        title: 'Praktiki Yanaşma',
        text: 'Hər modulun sonunda praktiki dərslər həyata keçirilir.'
    },
    {
        img: '/assets/Photo (10).svg',
        title: 'Karyera Dəstəyi',
        text: 'CV, Linkedln hazırlanması, sahədən asılı olaraq uyğun platformada portfolio hazırlanması dəstəyi.'
    },
    {
        img: '/assets/Photo (11).svg',
        title: 'Peşəkar Təlimçilər',
        text: '8+ il real təcrübəli təlimçilər, sahənin ən son yenilikləri ilə təcrübənizi artırmağa kömək edir.'
    },
    {
        img: '/assets/Photo (12).svg',
        title: 'Yekun Layihə',
        text: 'Yekun layihə sayəsində sən kurs boyunca öyrəndiklərini real layihədə tətbiq etməyi öyrənəcəksən.'
    },
];

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

const page = async () => {
    const t = await getTranslations('study-area');
    return (
        <div className='wrapper pt-45'>
            <div className='lg:bg-white lg:text-start text-center lg:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.03),0px_6px_10px_0px_rgba(0,0,0,0.07)] flex lg:flex-row flex-col justify-center lg:justify-between lg:px-6 py-8 rounded-[20px] items-center'>
                <div className='lg:w-1/2'>
                    <h1 className='lg:text-[72px] text-[30px] text-start font-bold lg:whitespace-nowrap'>Data Analitika</h1>
                    <p className='mt-2 my-7 text-start'>Handex-də Data Analitika tədrisi, tələbələri real dünya problemlərini həll edəcək qlobal bilik və praktiki bacarıqlarla təchiz edən innovativ və təcrübə yönümlü proqramdır.</p>
                    <button className='px-8 cursor-pointer font-bold text-[#141414] py-2.5 bg-[#1818181A] rounded-full'>İndi müraciət et</button>
                </div>
                <img className='lg:order-0 -order-1' src="/assets/study-area.svg" alt="Study area image" />
            </div>
            <Program />
            <div className='mt-30'>
                <h2 className='text-[38px] font-bold'>Növbəti qruplarımız</h2>
                <p className='mt-4 text-xl'>Aşağıdakı bölmədən tezliklə başlayacaq qruplarımızla tanış ol və tədris başlamadan yerini tut.</p>
                <div className='grid lg:grid-cols-2 gap-6 mt-12'>
                    <div className='bg-[#DE465D] box-shadow p-6 lg:p-12 rounded-[20px] text-white'>
                        <div className='lg:flex justify-between'>
                            <div className='text-center md:mb-0 mb-6'>
                                <p>Dərs günləri</p>
                                <p>Həftəiçi</p>
                            </div>
                            <div className='rounded-[20px] text-[#141414] flex items-center lg:w-auto w-full justify-between bg-white py-2 px-6'>
                                <div className='text-center'>
                                    <p className='text-base font-bold'>23</p>
                                    <p className='text-sm'>saat</p>
                                </div>
                                <div className='h-4 mx-5 w-[1px] bg-[#909090]'></div>
                                <div className='text-center'>
                                    <p className='text-base font-bold'>58</p>
                                    <p className='text-sm'>dəqiqə</p>
                                </div>
                                <div className='h-4 mx-5 w-[1px] bg-[#909090]'></div>
                                <div className='text-center'>
                                    <p className='text-base font-bold'>34</p>
                                    <p className='text-sm'>saniyə</p>
                                </div>
                            </div>
                        </div>
                        <h3 className='lg:text-[58px] text-[34px] font-bold text-center my-8'>27 Aprel</h3>
                        <p className='text-center lg:text-xl font-normal'>Laoreet sagittis semper mattis at platea adipiscing morbi.Laoreet sagittis semper mattis.</p>
                        <button className='cursor-pointer bg-white w-full h-12 rounded-full mt-10 text-[#141414]'>Müraciət et</button>
                    </div>
                    <div className='bg-white p-6 md:p-12 rounded-[20px] box-shadow text-[#141414]'>
                        <div className='md:flex justify-between'>
                            <div className='text-center md:mb-0 mb-6'>
                                <p>Şənbə, Bazar </p>
                                <p>qrupları</p>
                            </div>
                            <div className='rounded-[20px] text-[#141414] flex items-center w-full justify-between bg-[#E8E8E8] py-2 px-6'>
                                <div className='text-center'>
                                    <p className='text-base font-bold'>23</p>
                                    <p className='text-sm'>saat</p>
                                </div>
                                <div className='mx-5 h-4 w-[1px] bg-[#909090]'></div>
                                <div className='text-center'>
                                    <p className='text-base font-bold'>58</p>
                                    <p className='text-sm'>dəqiqə</p>
                                </div>
                                <div className='mx-5 h-4 w-[1px] bg-[#909090]'></div>
                                <div className='text-center'>
                                    <p className='text-base font-bold'>34</p>
                                    <p className='text-sm'>saniyə</p>
                                </div>
                            </div>
                        </div>
                        <h3 className='lg:text-[58px] text-[34px] font-bold text-center my-8'>10 May</h3>
                        <p className='text-center lg:text-xl font-normal'>Laoreet sagittis semper mattis at platea adipiscing morbi.Laoreet sagittis semper mattis.</p>
                        <button className='cursor-pointer bg-[#383838] w-full h-12 rounded-full mt-10 text-white'>Müraciət et</button>
                    </div>
                </div>
            </div>
            <h2 className='text-[38px] font-bold text-center mt-30'>{t('why.title')}</h2>
            <p className='text-[#909090] text-xl text-center mt-4'>{t('why.desc')}</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 pag-x-12 gap-6 mt-12'>
                {handex.map((item, i) => (
                    <div key={i} className='bg-white box-shadow p-6 rounded-[20px]'>
                        <img className='mb-3' src={item.img} alt={item.title} />
                        <h3 className='text-base text-[#141414] font-bold mb-2'>{item.title}</h3>
                        <p className='text-[#909090] text-sm font-normal'>{item.text}</p>
                    </div>
                ))}
            </div>
            <div className='mt-30 box-shadow pb-6 rounded-[20px] bg-white lg:px-0 px-3 lg:text-start text-center lg:flex justify-between items-center'>
                <img src="/assets/Photo (13).svg" alt="Birbank image" />
                <div className='lg:w-1/2'>
                    <h3 className='lg:text-[68px] text-[24px] leading-[65px] lg:w-4/5 font-bold mb-5'>Birkart ilə sərfəli fürsət</h3>
                    <p className='text-[#979797] mb-7 lg:text-xl'>İstədiyiniz kursa qeydiyyatdan keçərək birkart və daxili kredit imkanlarından yararlana bilersiniz</p>
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
                <Faq />
            </div>
        </div>
    );
};

export default page;