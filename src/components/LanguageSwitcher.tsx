"use client";

import { useRouter } from '@/i18n/routing';
import { usePathname } from 'next/navigation';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher({
  availableLocales,
  theme
}: {
  availableLocales: string[];
  theme?: string;
}) {
  const [flag, setFlag] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleChange = (lang: string) => {
    Cookies.set('lang', lang, { path: '' });
    setFlag(false);


    // Remove all locale segments from pathname
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '');
    const newPath = pathWithoutLocale || '/';
    router.replace(newPath, { locale: lang });
  };

  return (
    <div className='relative select-none'>
      <div
        onClick={() => setFlag(!flag)}
        className='flex gap-2 justify-center cursor-pointer items-center'
      >
        <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
          {currentLocale.toUpperCase()}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
        >
          <path
            d="M1 1L5 5L9 1"
            stroke={theme === 'dark' ? 'white' : '#141414'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className={`absolute ${flag ? 'block' : 'hidden'} top-10 left-1/2 -translate-x-1/2 bg-white py-4 px-8 rounded-[20px]`}>
        {availableLocales.map((item) => (
          item !== currentLocale &&
          <div
            key={item}
            onClick={() => handleChange(item)}
            className='flex cursor-pointer gap-2 my-4 items-center justify-center'
          >
            <img src={`/assets/img/${item}.svg`} alt={`${item} language`} />
            <p className='text-black'>{item.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}