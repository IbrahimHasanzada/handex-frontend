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

const Program = () => {
    const [count, setCount] = useState<number>(0);
    return (
        <div className='bg-white md:flex items-center gap-15 rounded-[20px] py-12 px-6 mt-30 box-shadow'>
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
            <div className='md:mt-0 mt-6'>
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
    );
};

export default Program;