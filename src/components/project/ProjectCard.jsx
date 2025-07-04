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
                    <div
                        className='
                        text-[#666] text-xs font-normal line-clamp-2 mb-3
                        [&_p]:inline
                        [&_a]:inline [&_a]:text-xs [&_a]:font-normal [&_a]:text-[#0070f3]
                        [&_h1]:inline [&_h1]:text-xs [&_h1]:font-normal [&_h1]:mb-0
                        [&_h2]:inline [&_h2]:text-xs [&_h2]:font-normal [&_h2]:mb-0
                        [&_h3]:inline [&_h3]:text-xs [&_h3]:font-normal [&_h3]:mb-0
                        [&_h4]:inline [&_h4]:text-xs [&_h4]:font-normal [&_h4]:mb-0
                        [&_h5]:inline [&_h5]:text-xs [&_h5]:font-normal [&_h5]:mb-0
                        [&_h6]:inline [&_h6]:text-xs [&_h6]:font-normal [&_h6]:mb-0'
                        dangerouslySetInnerHTML={{ __html: item.description || '' }}
                    />
                    <div className='flex items-center mt-7 md:mt-11 cursor-pointer'>
                        <p className='font-bold'>{t('news.card.more')}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M10 16L14 12L10 8" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className='absolute -right-1/5 md:w-58 w-35.5 md:h-61 h-4/5 top-1/2 -translate-y-1/2'>
                    <img className='w-full h-full object-cover rounded-[14px]' src={item?.image?.url} alt={item?.image?.alt} />
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;