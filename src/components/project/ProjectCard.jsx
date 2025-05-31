import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';

const ProjectCard = ({ item }) => {
    const local = useLocale();
    const t = useTranslations();

    return (
        <Link href={`/${local}/project/${item.slug}`} className='w-full'>
            <div className='p-6 w-4/5 box-shadow bg-white rounded-[20px] md:h-81 flex items-end relative'>
                <div>
                    <h2 className='mb-2 text-xl max-[450px]:text-sm whitespace-normal md:text-[30px] font-bold'>{item.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: item.description }} className='w-2/3 xl:text-base text-xs line-clamp-4' />
                    <div className='flex items-center mt-7 md:mt-11 cursor-pointer'>
                        <p className='font-bold'>{t('news.card.more')}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M10 16L14 12L10 8" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className='absolute -right-1/5 md:w-58 w-35.5 md:h-61 h-44 top-1/2 -translate-y-1/2'>
                    <img className='w-full h-full object-cover rounded-[14px]' src={item?.image?.url} alt={item?.image?.alt} />
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;