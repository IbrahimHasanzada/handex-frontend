"use client";
import React, { useState } from 'react';

const faq = [
    {
        id: 1,
        title: 'Təlim zamanı nə tədris olunur?'
    },
    {
        id: 2,
        title: 'Təlim zamanı nə tədris olunur?'
    },
    {
        id: 3,
        title: 'Təlim zamanı nə tədris olunur?'
    },
    {
        id: 4,
        title: 'Təlim zamanı nə tədris olunur?'
    },
    {
        id: 5,
        title: 'Təlim zamanı nə tədris olunur?'
    },
];

const Faq = () => {
    const [flag, setFlag] = useState<number>(0);
    return (
        <div>
            {faq.map(item => (
                <div onClick={() => setFlag(flag === item.id ? 0 : item.id)} className={`mt-4 py-4 px-6 bg-white overflow-y-hidden  ${flag === item.id ? 'h-40' : 'h-14'} duration-500 box-shadow rounded-[20px]`}>
                    <div className='flex items-center justify-between cursor-pointer'>
                        <p className='text-base select-none text-[#141414]'>{item.title}</p>
                        <div className='size-6 bg-[#DDDDDD] rounded-full flex items-center justify-center'>
                            <svg className={`${ flag === item.id && 'rotate-180' } duration-400`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M8 10L12 14L16 10" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className='mt-4 line-clamp-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora optio sequi labore maxime temporibus dolorem soluta libero commodi repellendus veritatis aperiam maiores et debitis tenetur, vero eaque! Nobis placeat iusto maxime saepe eius blanditiis labore magnam quos esse fugiat vel porro ratione, vero corporis ducimus at dolorem rerum, libero suscipit.
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Faq;