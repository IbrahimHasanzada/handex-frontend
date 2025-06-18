"use client";
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

const Program: React.FC<any> = ({ program, color, model }) => {
    const t = useTranslations('study-area.program');
    const [count, setCount] = useState<number>(0);
    return (
        <div className={`${model ? 'bg-[#282828]' : 'bg-white'} md:flex gap-15 rounded-[20px] py-12 px-6 mt-30 box-shadow`}>
            <div className='md:w-2/5'>
                {program?.map((item: any, i: number) => (
                    <div style={{ backgroundColor: count === i ? color : model ? '#E8E8E833' : '#1818181A' }} onClick={() => setCount(i)} key={i} className={`cursor-pointer w-full flex gap-3 items-center rounded-[20px] px-5 py-2.5 my-3`}>
                        <div className={`${model ? 'bg-[#282828]' : 'bg-white'} overflow-hidden rounded-full p-1.5`}>
                            <img className='size-9' src={item?.image?.url} alt={item?.image?.alt} />
                        </div>
                        <p className={`${!model ? (count === i ? 'text-white' : 'text-[#141414]') : 'text-white'}`}>{item.name}</p>
                        <h3 className={`${!model ? (count === i ? 'text-white' : 'text-[#141414]') : 'text-white'} text-base font-medium `}>{item.title}</h3>
                    </div>
                ))}
            </div>
            <div className='md:mt-0 mt-6 md:w-3/5'>
                <h2 className={`${model ? 'text-white' : 'text-[#111827]'} text-[30px] font-bold mb-6`}>{t('about')}</h2>
                <div className={model && 'text-[#909090]'} dangerouslySetInnerHTML={{ __html: program && program[count]?.description }} />
            </div>
        </div>
    );
};

export default Program;