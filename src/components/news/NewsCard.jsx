import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { formatDate } from '@/utils/form-data';

const NewsCard = ({ item }) => {
  // HTML-i decode edib təmiz mətn əldə edirik
  const getPlainText = (html) => {
    if (!html) return '';
    
    // Müvəqqəti bir div yaradıb HTML-i decode edirik
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || '';
  };

  const plainTextDescription = getPlainText(item.description);

  return (
    <Link id={item.slug} href={`/xeberler/${item.slug}`} className='bg-white pt-5 flex w-full flex-col justify-between py-8 px-3 rounded-2xl'>
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
      <h2 className='font-bold text-base mt-4 whitespace-normal mb-2 w-full break-words line-clamp-2'>{item.title}</h2>
      
      <p className='text-[#666] text-xs font-normal break-words line-clamp-2 mb-3'>
        {plainTextDescription}
      </p>

      <div className='flex items-center justify-between'>
        <p>{formatDate(item.createdAt)}</p>
        <div href={`/news/${item.slug}`}
          className='flex cursor-pointer items-end px-2 py-1.5 border border-primary-corporate rounded-[18px]'
        >
          <p className='text-primary-blue text-sm text-primary-corporate'>Daha çox</p>
          <Image src='/assets/img/news-arrow.svg' width={16} alt='News arrow icon' height={16} />
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;