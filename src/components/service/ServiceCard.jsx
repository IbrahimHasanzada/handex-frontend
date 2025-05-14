import { getTranslations } from 'next-intl/server';
import React from 'react';

const ServiceCard = async () => {
    const t = await getTranslations();
    return (
        <div className='flex items-end bg-white box-shadow rounded-[20px] w-full'>
            <div className='md:w-1/2 w-2/3 h-full'>
                <img className='rounded-l-[20px] w-full h-full object-cover' src="/assets/cover.svg" alt="" />
            </div>
            <div className='p-4'>
                <h2 className='md:text-2xl text-sm font-bold line-clamp-2 mb-3'>Morbi habitasse felis nulla arcu, morbi ultricies.</h2>
                <p className='text-[#909090] md:text-base text-[10px] line-clamp-3'>Volutpat tellus porta felis, accumsan. Praesent quis amet et scelerisque dictum fringilla id.</p>
                <div className='lg:mt-16 mt-6 flex items-end cursor-pointer'>
                    <p className='text-[#141414] font-bold text-base leading-[30px]'>{t('news.card.more')}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path d="M10.9004 16.1L14.9004 12.1L10.9004 8.09998" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;