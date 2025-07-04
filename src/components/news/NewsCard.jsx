import Image from 'next/image';
import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { formatDateClient } from '@/utils/form-data-client';
import Link from 'next/link';

const NewsCard = ({ item }) => {
  const local = useLocale();
  const t = useTranslations();


  return (
    <Link href={`/${local}/news/${item.slug}`} className='bg-white pt-5 flex flex-col justify-between py-8 px-3 rounded-2xl'>
      <div className='w-full h-60 rounded-[12px]'>
        <img
          quality={100}
          className='w-full object-cover h-full rounded-[12px]'
          src={item.image.url}
          alt={item?.image?.alt}
          width={100}
          height={100}
        />
      </div>
      <h2 className='font-bold text-base mt-4 mb-2 w-3/5 line-clamp-2'>{item.title}</h2>
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
      <div className='flex items-center justify-between'>
        <p>{formatDateClient(item.createdAt)}</p>
        <div href={`/${local}/news/${item.slug}`}
          className='flex cursor-pointer items-end px-2 py-1.5 border border-primary-corporate rounded-[18px]'
        >
          <p className='text-primary-blue text-sm text-primary-corporate'>{t('news.card.more')}</p>
          <Image src='/assets/img/news-arrow.svg' width={16} alt='News arrow icon' height={16} />
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
