import Image from 'next/image';
import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { formatDateClient } from '@/utils/form-data-client';
import Link from 'next/link';

const NewsCard = ({ item }) => {
  const local = useLocale()
  const t = useTranslations();

  const title = item.translations.find(t => t.field === 'title')?.value;
  const description = item.translations.find(t => t.field === 'description')?.value;


  return (
    <div className='bg-white pt-5 flex flex-col justify-between py-8 px-3 rounded-2xl'>
      <div className='w-full h-60 rounded-[12px]'>
        <img
          quality={100}
          className='w-full object-cover h-full rounded-[12px]'
          src={item.image.url}
          alt={title || 'News Image'}
          width={100}
          height={100}
        />
      </div>
      <h2 className='font-bold text-base mt-4 mb-2 w-3/5 line-clamp-2'>{title}</h2>
      <div className='line-clamp-2 text-[#909090] text-sm mb-6'
        dangerouslySetInnerHTML={{ __html: description || '' }}
      />
      <div className='flex items-center justify-between'>
        <p>{formatDateClient(item.createdAt)}</p>
        <Link href={`/${local}/news/${item.slug}`}
          className='flex cursor-pointer items-end px-2 py-1.5 border border-primary-corporate rounded-[18px]'
        >
          <p className='text-primary-blue text-sm text-primary-corporate'>{t('news.card.more')}</p>
          <Image src='/assets/img/news-arrow.svg' width={16} alt='News arrow icon' height={16} />
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
