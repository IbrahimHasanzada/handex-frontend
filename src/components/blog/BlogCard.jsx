import { formatDateClient } from '@/utils/form-data-client';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import './../../styles/reset.css';

const BlogCard = ({ item }) => {
    const t = useTranslations();
    const router = useRouter();
    const locale = useLocale();
    const handleClick = () => {
        router.push(`/${locale}/blog/${item.slug}`);
    };
    console.log(item?.image);

    return (
        <div onClick={() => handleClick()} className='rounded-2xl cursor-pointer box-shadow bg-white py-5 px-3'>
            <h2 className='text-[#141414] text-base font-bold line-clamp-2'>{item.title}</h2>
            <button className='my-3 p-2 rounded-[12px] flex items-center gap-2 bg-[#DDD] text-xs'>
                <Image src='/assets/img/calendar.svg' alt='Blogs calendar' width={16} height={16} />
                <p>{formatDateClient(item.createdAt)}</p>
            </button>
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
            <div className='w-full mt-auto h-[232px] rounded-[12px] relative'>
                <img className='w-full h-full object-cover rounded-[12px]' src={item.image.url} alt={item?.image?.alt} />
                <div className='absolute bg-white top-0 right-0  pb-2 pl-2 border-b-l-5'>
                    <svg className='size-4 absolute md:top-1 top-1 min-[460px]:top-[0] -left-4 rotate-90' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
                        <path d="M0,150 Q0,0 150,0 L150,0 L0,0 Z" fill="#fff" />
                    </svg>
                    <button className='flex cursor-pointer items-center rounded-[20px] border border-primary-corporate'>
                        <p className='text-xs text-primary-corporate p-2'>{t('news.card.more')}</p>
                        <Image src='/assets/img/news-arrow.svg' width={16} alt='News arrow icon' height={16} />
                    </button>
                    <svg className='size-4 absolute -bottom-4 min-[465px]:right-[5px] right-0 md:right-0 rotate-90' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
                        <path d="M0,150 Q0,0 150,0 L150,0 L0,0 Z" fill="#fff" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;