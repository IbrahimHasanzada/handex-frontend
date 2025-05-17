"use client";
import React, { useState } from 'react';

const arr = [
    {
        img: "/assets/Skillcard.svg",
        title: "Power Pivot",
    },
    {
        img: "/assets/Skill icon.svg",
        title: "Excel",
    },
    {
        img: "/assets/Skill icon (1).svg",
        title: "Power Query (DAX)",
    },
    {
        img: "/assets/Skill icon (2).svg",
        title: "MySql",
    },
    {
        img: "/assets/Skill icon (3).svg",
        title: "R (programming language)"
    },
    {
        img: "/assets/Skill icon (4).svg",
        title: "Broşur yüklə"
    }
];

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


const page = () => {
    const [count, setCount] = useState<number>(0);
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
            <div className='bg-white flex items-center gap-15 rounded-[20px] py-12 px-6 mt-30 box-shadow'>
                <div className='w-full'>
                    {arr.map((item, i) => (
                        <div onClick={() => setCount(i)} key={i} className={`cursor-pointer flex gap-3 items-center rounded-[20px] px-5 py-2.5 my-3 ${count === i ? 'bg-[#DE465D]' : 'bg-[#1818181A]'}`}>
                            <div className='bg-white rounded-full p-1.5'>
                                <img className='size-9' src={item.img} alt={item.title} />
                            </div>
                            <h3 className={`${count === i ? 'text-white' : 'text-[#141414]'} text-base font-medium `}>{item.title}</h3>
                        </div>
                    ))}
                </div>
                <div>
                    <h2 className='text-[#111827] text-[30px] font-bold mb-6'>Program haqqında</h2>
                    <p className='text-[#141414] mt-6 mb-19'>Kursun məqsədi: Data analitikası, həyatın hər sahəsində məlumatların əhəmiyyətini artıran, qərarlarımızı dəqiqləşdirməyə və iş proseslərini optimallaşdırmağa kömək edən bir peşədir. Bu sahədəki mütəxəssislər, məlumatları təhlil etmək, vizuallaşdırmaq və fikirlər əldə etmək üçün texniki alətlərdən və iş təcrübəsindən istifadə edir. </p>
                    <h2 className='text-[#111827] text-[30px] font-bold'>Sillabus</h2>
                    <div>
                        {Array.from({ length: 4 }).map((item, i) => (
                            <div key={i} className='flex items-center gap-2 my-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.495 13.465L4.69 15.029L4.948 16.976C5.091 18.056 5.94 18.906 7.02 19.05L8.972 19.311L10.535 20.505C11.4 21.166 12.599 21.166 13.464 20.505L15.028 19.31H15.026L16.974 19.052C18.054 18.909 18.904 18.06 19.048 16.98L19.308 15.028C19.308 15.029 19.912 14.238 20.503 13.465C21.164 12.6 21.163 11.401 20.503 10.536L19.31 8.97099L19.052 7.02399C18.909 5.94399 18.06 5.09399 16.98 4.94999L15.027 4.68999L13.464 3.49599C12.599 2.83499 11.4 2.83499 10.535 3.49599L8.971 4.68999H8.973L7.025 4.94899C5.945 5.09199 5.095 5.94099 4.951 7.02099L4.69 8.97299C4.69 8.97199 4.086 9.76299 3.495 10.536C2.835 11.4 2.835 12.6 3.495 13.465V13.465Z" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14.8032 10.6021L11.3022 14.1031L9.19922 12.0021" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p>Laoreet sagittis semper mattis at platea adipiscing morbi.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='mt-30'>
                <h2 className='text-[38px] font-bold'>Növbəti qruplarımız</h2>
                <p className='mt-4 text-xl'>Aşağıdakı bölmədən tezliklə başlayacaq qruplarımızla tanış ol və tədris başlamadan yerini tut.</p>
                <div className='grid lg:grid-cols-2 gap-6 mt-12'>
                    <div className='bg-[#DE465D] box-shadow p-6 lg:p-12 rounded-[20px] text-white'>
                        <div className='lg:flex justify-between'>
                            <div className='text-center'>
                                <p>Dərs günləri</p>
                                <p>Həftəiçi</p>
                            </div>
                            <div className='rounded-[20px] text-[#141414] flex items-center lg:w-auto w-full justify-between bg-white py-2 px-6'>
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
                        <h3 className='lg:text-[58px] text-[34px] font-bold text-center my-8'>27 Aprel</h3>
                        <p className='text-center lg:text-xl font-normal'>Laoreet sagittis semper mattis at platea adipiscing morbi.Laoreet sagittis semper mattis.</p>
                        <button className='cursor-pointer bg-white w-full h-12 rounded-full mt-10 text-[#141414]'>Müraciət et</button>
                    </div>
                    <div className='bg-white p-12 rounded-[20px] box-shadow text-[#141414]'>
                        <div className='flex justify-between'>
                            <div className='text-center'>
                                <p>Şənbə, Bazar </p>
                                <p>qrupları</p>
                            </div>
                            <div className='rounded-[20px] text-[#141414] flex items-center bg-[#E8E8E8] py-2 px-6'>
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
                        <h3 className='text-[58px] font-bold text-center my-8'>10 May</h3>
                        <p className='text-center text-xl font-normal'>Laoreet sagittis semper mattis at platea adipiscing morbi.Laoreet sagittis semper mattis.</p>
                        <button className='cursor-pointer bg-[#383838] w-full h-12 rounded-full mt-10 text-white'>Müraciət et</button>
                    </div>
                </div>
            </div>
            <h2 className='text-[38px] font-bold text-center mt-30'>Niyə Handex ?</h2>
            <p className='text-[#909090] text-xl text-center mt-4'>Müasir təhsil metodları və peşəkar dəstəklə karyeranızda yeni səhifə açın!</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 pag-x-12 gap-6 mt-12'>
                {handex.map((item, i) => (
                    <div key={i} className='bg-white box-shadow p-6 rounded-[20px]'>
                        <img className='mb-3' src={item.img} alt={item.title} />
                        <h3 className='text-base text-[#141414] font-bold mb-2'>{item.title}</h3>
                        <p className='text-[#909090] text-sm font-normal'>{item.text}</p>
                    </div>
                ))}
            </div>
            <div className='mt-30 box-shadow rounded-[20px] bg-white lg:px-0 px-3 lg:text-start text-center lg:flex justify-between items-center'>
                <img src="/assets/Photo (13).svg" alt="Birbank image" />
                <div className='lg:w-1/2'>
                    <h3 className='lg:text-[68px] text-[24px] leading-[65px] lg:w-4/5 font-bold mb-5'>Birkart ilə sərfəli fürsət</h3>
                    <p className='text-[#979797] mb-7 lg:text-xl'>İstədiyiniz kursa qeydiyyatdan keçərək birkart və daxili kredit imkanlarından yararlana bilersiniz</p>
                    <button className='py-2 px-6 rounded-full lg:mb-0 mb-5 bg-[#E8E8E8]'>İndi müraciət et</button>
                </div>
            </div>
        </div>
    );
};

export default page;