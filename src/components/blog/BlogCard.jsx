import { formatDateClient } from '@/utils/form-data-client';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const BlogCard = ({ item }) => {
    const t = useTranslations();
    const router = useRouter();
    const handleClick = () => {
        router.push(`/blog/${item.slug}`);
    };

    return (
        <div onClick={() => handleClick()} className='rounded-2xl cursor-pointer box-shadow bg-white py-5 px-3'>
            <h2 className='text-[#141414] font-bold'>{item.title}</h2>
            <button className='my-3 p-2 rounded-[12px] flex items-center gap-2 bg-[#DDD] text-xs'>
                <Image src='/assets/img/calendar.svg' alt='Blogs calendar' width={16} height={16} />
                <p>{formatDateClient(item.createdAt)}</p>
            </button>
            <div className='text-xs text-[#666] font-normal line-clamp-2' dangerouslySetInnerHTML={{ __html: item.description || '' }} />
            <div className='w-full h-[232px] rounded-[12px] mt-4 relative'>
                <Image className='w-full h-full object-cover rounded-[12px]' src={item.image.url} alt={item?.image?.alt} width={100} height={100} />
                <div className='absolute bg-white top-0 right-0 pb-2 pl-2 border-b-l-5'>
                    <button className='flex cursor-pointer items-center rounded-[20px] border border-primary-corporate'>
                        <p className='text-xs text-primary-corporate p-2'>{t('news.card.more')}</p>
                        <Image src='/assets/img/news-arrow.svg' width={16} alt='News arrow icon' height={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;