"use client";
import { getStudyAreaProgram } from '@/service';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react'
const Program: React.FC<any> = ({ slug, locale, color, model, brochure }) => {
    const t = useTranslations('study-area.program');
    const [count, setCount] = useState<number>(0);
    const [program, setProgram] = useState<any>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        (async function fetchData() {
            setProgram(await getStudyAreaProgram(locale, slug, model ? 'corporate' : 'home'));
        }
        )();
    }, []);
    const downloadFile = async () => {
        setIsLoading(true)
        const response = await fetch(`https://backend.handex.edu.az${brochure?.url}`);
        response && setIsLoading(false)
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = slug + '-brochure.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    };
    return (
        <div className={`${model ? 'bg-[#282828]' : 'bg-white'} md:flex gap-15 rounded-[20px] py-12 px-6 mt-10 md:mt-30 box-shadow`}>
            <div className='md:w-2/5'>
                {program?.map((item: any, i: number) => (
                    <div style={{ backgroundColor: count === i ? color : model ? '#E8E8E833' : '#1818181A' }} onClick={() => setCount(i)} key={i} className={`cursor-pointer w-full flex gap-3 items-center rounded-[20px] px-5 py-2.5 my-3`}>
                        <div className={`${model ? 'bg-[#282828]' : 'bg-white'} overflow-hidden rounded-full p-1.5`}>
                            <img className='size-9' src={item?.image?.url} alt={item?.image?.alt} />
                        </div>
                        <p className={`${!model ? (count === i ? 'text-white' : 'text-[#141414]') : 'text-white'}`}>{item.name}</p>
                        <p className={`${!model ? (count === i ? 'text-white' : 'text-[#141414]') : 'text-white'} text-base font-medium `}>{item.title}</p>
                    </div>
                ))}
                {brochure && (

                    <div style={{ backgroundColor: count === program?.length + 1 ? color : model ? '#E8E8E833' : '#1818181A' }} onClick={downloadFile} className={`cursor-pointer w-full flex gap-3 items-center rounded-[20px] px-5 py-2.5 my-3`}>
                        {isLoading ?


                            <div className='w-full flex justify-center items-center'>
                                <Loader2 className='h-10 w-10 animate-spin' />
                            </div>
                            :
                            <>
                                <div className={`${model ? 'bg-[#282828]' : 'bg-white'} overflow-hidden rounded-full p-1.5`}>
                                    <img className='size-9' src='/assets/brochure.svg' alt={slug + ' brochure'} />
                                </div>
                                <p className={`${!model ? (count === program?.length + 1 ? 'text-white' : 'text-[#141414]') : 'text-white'}`}>Broşür yüklə</p>
                            </>
                        }
                    </div>
                )}
            </div>
            <div className='md:mt-0 mt-6 md:w-3/5'>
                <p className={`${model ? 'text-white' : 'text-[#111827]'} text-[30px] font-bold mb-6`}>{t('about')}</p>
                <div className={model && 'text-[#909090]'} dangerouslySetInnerHTML={{ __html: program && program[count]?.description }} />
            </div>
        </div>
    );
};

export default Program;