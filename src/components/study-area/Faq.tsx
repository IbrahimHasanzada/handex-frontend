"use client";
import React, { useState, useRef, useEffect } from 'react';

const Faq: React.FC<any> = ({ faq, model }) => {
    const [flag, setFlag] = useState<number>(0);
    const contentRefs = useRef<any>({});

    const toggleFaq = (id: number) => {
        setFlag(prev => prev === id ? 0 : id);
    };

    return (
        <div>
            {faq?.map((item: any, i: number) => (
                <div
                    key={i}
                    onClick={() => toggleFaq(item.id)}
                    className={`${model ? 'bg-[#282828]' : 'bg-white'} mt-4 px-6 overflow-hidden duration-500 box-shadow rounded-[20px] cursor-pointer`}
                    style={{
                        maxHeight: flag === item.id
                            ? `${contentRefs.current[item.id]?.scrollHeight + 60}px`
                            : '56px',
                        transition: 'max-height 0.5s ease',
                    }}
                >
                    <div className='flex items-center justify-between py-4'>
                        <p className={`text-base select-none ${model ? 'text-white' : 'text-[#141414]'}`}>{item.title}</p>
                        <div className={`size-6  rounded-full flex items-center justify-center ${model ? 'bg-[#909090]' : 'bg-[#DDDDDD]'}`}>
                            {model ?
                                <svg className={`${flag === item.id ? 'rotate-180' : ''} duration-300`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M8 10L12 14L16 10"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                :
                                <svg
                                    className={`${flag === item.id ? 'rotate-180' : ''} duration-300`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path d="M8 10L12 14L16 10" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>}
                        </div>
                    </div>
                    <div
                        className={`pb-4 text-sm select-none ${model ? 'text-white' : 'text-[#555]'}`}
                        ref={el => contentRefs.current[item.id] = el as any}
                    >
                        {item.description}
                    </div>
                </div>
            ))}
        </div>
    );
};


export default Faq;