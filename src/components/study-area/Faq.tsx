"use client";
import React, { useEffect, useState, useRef } from 'react';
import { getStudyAreaFaq } from '@/service';

const Faq: React.FC<any> = ({ locale, slug, model }) => {
    const [faq, setFaq] = useState<any[]>([]);
    const [flag, setFlag] = useState<number>(0);
    const contentRefs = useRef<any>({});

    useEffect(() => {
        (async () => {
            const data = await getStudyAreaFaq(locale, slug, model ? 'corporate' : 'home');
            setFaq(data || []);
        })();
    }, [locale, slug, model]);

    const toggleFaq = (id: number) => {
        setFlag(prev => (prev === id ? 0 : id));
    };

    return (
        <div>
            {faq.map((item: any, index: number) => (
                <div id={slug + 'faq' + index} key={item.id} className={`mt-4  rounded-[20px] ${ !model ? '!bg-[#fff]' : 'bg-[#282828]' } box-shadow`}>
                    {/* TITLE */}
                    <div
                        onClick={() => toggleFaq(item.id)}
                        className={`flex items-center justify-between px-6 py-4   
                        ${flag === item.id ? 'rounded-[20px]' : 'rounded-[20px]'} 
                        cursor-pointer transition-colors duration-300
                        ${model ? 'bg-[#282828]' : 'bg-white'}`}
                    >
                        <p className={`text-base select-none ${model ? 'text-white' : 'text-[#141414]'}`}>
                            {item.title}
                        </p>
                        <div className={`size-6 rounded-full text-sm flex items-center justify-center 
                            ${model ? 'bg-[#909090]' : 'bg-[#DDDDDD]'}`}>
                            <svg className={`${flag === item.id ? 'rotate-180' : ''} duration-300`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                                <path
                                    d="M8 10L12 14L16 10"
                                    stroke={model ? 'white' : '#141414'}
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    <div
                        ref={el => (contentRefs.current[item.id] = el) as any}
                        className={`overflow-hidden px-6 transition-all duration-500 ease-in-out rounded-b-[20px] 
                        ${model ? 'bg-[#282828]' : ''} 
                        ${flag === item.id ? 'max-h-[500px] py-4' : 'max-h-0 py-0'}`}
                    >
                        <p className={`text-sm select-none ${model ? 'text-white' : 'text-[#555]'}`}>
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Faq;
