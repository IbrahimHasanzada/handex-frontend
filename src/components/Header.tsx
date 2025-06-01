"use client";
import Image from 'next/image';
import Link from 'next/link';
import { HeaderItem } from '@/types/Header.dto';
import HeaderModal from './home/HeaderModal';
import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { usePathname } from 'next/navigation';
import { useRouter } from '@/i18n/routing';

const langArr = ['az', 'en', 'ru'];

const Header = ({ theme = '', study }: { theme?: string; study: any; }) => {
  const local = useLocale();
  const t = useTranslations('header');
  const headerLists = t.raw('headerLists') as HeaderItem[];

  const [langSwitch, setLangSwitch] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const [flag, setFlag] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (flag) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [flag]);

  const handleChange = (lang: string) => {
    Cookies.set('lang', lang, { path: '' });
    setFlag(false);

    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '');
    const newPath = pathWithoutLocale || '/';
    router.replace(newPath, { locale: lang });
  };

  const handleClose = () => {
    setFlag(false);
  };
  return (
    <header className="relative">
      <div className={`wrapper z-99 max-md:box-shadow base:bg-transparent ${theme === 'dark' ? 'bg-[#2b2b2b]' : 'bg-white'} fixed left-0 right-0`}>
        <div className={`base:px-6 w-full rounded-b-[20px] ${theme === 'dark' ? 'base:bg-[#2b2b2b]' : 'base:bg-white base:border border-[#DDD]'} h-25 flex items-center justify-between base:shadow-md`}>
          <Link href={'/' + local} className='relative flex items-center'>
            <Image
              src='/assets/img/handex_logo.png'
              alt='Handex Logo'
              quality={100}
              sizes='100%'
              width={128}
              height={40}
              className='w-32 h-10'
            />
          </Link>
          <div className='hidden base:block'>
            <div className='flex items-center gap-18'>
              <ul className='flex gap-6'>
                {headerLists.map(({ title, subItems }, index) => (
                  <li
                    key={index}
                    className={`group relative cursor-pointer flex z-50 py-3 ${theme ? 'text-white' : 'text-black'}`}
                  >
                    <p className='group-hover:border-b border-b-primary-corporate text-sm lg:text-base'>{title}</p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 10L12 14L16 10" stroke={theme ? 'white' : 'black'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className='absolute z-50 top-12 hidden group-hover:block pt-5'>
                      <ul className='flex flex-col gap-4 py-6 px-8 bg-primary-bg rounded-[20px]'>
                        {subItems.map((item, idx) => (
                          <li className='text-black' key={idx}>
                            <Link className='whitespace-nowrap' href={'/' + local + item.link}>
                              {item.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
                <li
                  className={`group relative cursor-pointer flex z-50 py-3 ${theme ? 'text-white' : 'text-black'}`}
                >
                  <p className='group-hover:border-b border-b-primary-corporate text-sm lg:text-base'>{t('study-area')}</p>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 10L12 14L16 10" stroke={theme ? 'white' : 'black'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className='absolute z-50 top-12 hidden group-hover:block pt-5'>
                    <ul className='flex flex-col gap-4 py-6 px-8 bg-primary-bg rounded-[20px]'>
                      {study.map((item: any, idx: number) => (
                        <li className='text-black' key={idx}>
                          <Link className='whitespace-nowrap' href={'/' + local + `/study-area/${item.slug}`}>
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <li className='group cursor-pointer py-3'>
                  <p className={`group-hover:border-b border-b-primary-corporate ${theme ? 'text-white' : 'text-black'}`}>
                    <Link href={'/' + local + '/corporate'}>{t('coorporate')}</Link>
                  </p>
                </li>
                <li className='group cursor-pointer py-3'>
                  <p className={`group-hover:border-b border-b-primary-corporate ${theme ? 'text-white' : 'text-black'}`}>
                    <Link href={'/' + local + '/contact'}>{t('contact')}</Link>
                  </p>
                </li>
              </ul>
              <div className='flex items-center gap-4'>
                <div className='py-1'>
                  <div className='relative select-none'>
                    <div
                      onClick={() => setLangSwitch(!langSwitch)}
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
                    <div className={`absolute ${langSwitch ? 'block' : 'hidden'} top-10 left-1/2 -translate-x-1/2 bg-white py-4 px-8 rounded-[20px]`}>
                      {langArr.map((item) => (
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
                </div>
                <div className='h-12 w-40 text-sm lg:text-base lg:w-60'>
                  <HeaderModal study={study} theme={theme} />
                </div>
              </div>
            </div>
          </div>
          <div className='w-8 h-8 block base:hidden'>
            <button onClick={() => setFlag(!flag)} className='cursor-pointer'>
              <Image
                src='/assets/img/menu-burger-square.svg'
                alt='Handex burger menu icon'
                width={32}
                height={32}
                sizes='100%'
                quality={100}
              />
            </button>
          </div>
        </div>
      </div>
      {/*  H A M B U R G ER  */}
      <div onClick={() => setFlag(!flag)} className={`top-0 left-0 ${flag ? 'fixed' : 'hidden'} z-80 w-screen h-screen bg-black opacity-50`}></div>
      <div className={`fixed ${flag ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto duration-300 right-0 h-screen w-4/5 sm:w-1/2 z-80 ${theme ? 'bg-[#181818]' : 'bg-white'} pt-35 list-none p-7`}>
        <li onClick={() => handleClose()} className={`${theme ? 'text-white' : 'text-[#141414]'} cursor-pointer font-medium text-xl pb-1`}>
          <Link href={'/' + local}>{t('home')}</Link>
        </li>
        {headerLists.map(({ title, subItems }, index) => (
          <div key={index}>
            <li onClick={() => setCount(count === 1 ? 0 : 1)} className={`relative group cursor-pointer flex justify-between items-center z-50 pt-4 pb-2 ${theme ? 'text-white' : 'text-black'}`}>
              <p className='group-hover:border-b border-b-primary-corporate text-xl lg:text-base'>{title}</p>
              <svg className={`${count === 1 && 'rotate-180'} duration-300`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 10L12 14L16 10" stroke={theme ? 'white' : 'black'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </li>
            <div className={`${count === 1 ? 'max-h-[600px] mb-6' : 'max-h-0'} overflow-hidden duration-500 z-50 top-12 pt-5`}>
              <ul className='flex flex-col gap-4 px-1 rounded-[20px]'>
                {subItems.map((item: any, idx: number) => (
                  <li onClick={() => handleClose()} className='text-[#909090]' key={idx}>
                    <Link className='whitespace-nowrap' href={'/' + local + item.link}>
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <li onClick={() => setCount(count === 2 ? 0 : 2)} className={`relative group cursor-pointer flex justify-between items-center z-50 pb-2 ${theme ? 'text-white' : 'text-black'}`}>
          <p className='group-hover:border-b border-b-primary-corporate text-xl lg:text-base'>{t('study-area')}</p>
          <svg className={`${count === 2 && 'rotate-180'} duration-500`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path stroke={theme ? 'white' : 'black'} d="M8 10L12 14L16 10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </li>
        <div className={`${count === 2 ? 'max-h-[500px]' : 'max-h-0'} overflow-hidden duration-500 z-50 top-12`}>
          <ul className='flex flex-col gap-4 px-1 rounded-[20px]'>
            {study.map((item: any, idx: number) => (
              <li onClick={() => handleClose()} className='text-[#909090]' key={idx}>
                <Link className='whitespace-nowrap' href={'/' + local + `/study-area/${item.slug}`}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <li onClick={() => handleClose()} className={`cursor-pointer font-medium text-xl pb-1 my-2.5 ${theme ? 'text-white' : 'text-[#141414]'}`}>
          <Link href={'/' + local + '/corporate'}>{t('coorporate')}</Link>
        </li>
        <li onClick={() => handleClose()} className={`cursor-pointer font-medium text-xl pb-1 my-2.5 ${theme ? 'text-white' : 'text-[#141414]'}`}>
          <Link href={'/' + local + '/contact'}>{t('contact')}</Link>
        </li>
        <div className='w-full h-[1px] bg-[#ABABAB] mt-10 mb-5'></div>
        <div className='flex items-center gap-2 mb-4'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path stroke={theme ? 'white' : '#222222'} d="M7.5 4V7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path stroke={theme ? 'white' : '#222222'} d="M20.5 20L16.5 11L12.5 20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path stroke={theme ? 'white' : '#222222'} d="M13.3906 18H19.6106" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path stroke={theme ? 'white' : '#222222'} d="M3.5 15C7.595 14.676 11.176 11.095 11.501 7H3.501" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path stroke={theme ? 'white' : '#222222'} d="M11.5 15C8.941 14.798 6.702 12.559 6.5 10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className={`text-[#141414] text-base ${theme ? 'text-white' : 'text-[#141414]'} font-medium`}>Language</p>
        </div>
        <div className='grid grid-cols-3 gap-3 justify-between px-1'>
          <div onClick={() => handleChange('az')} className={`flex ${currentLocale === 'az' ? 'bg-[linear-gradient(225deg,_#73CCD8_4.87%,_#2B6B9F_96.04%)] text-white' : 'bg-transparent border border-[#ABABAB] text-[#141414]'} justify-center ${theme && '!text-white' } items-center rounded-2xl px-3 py-1.5 `}>
            <p>AZ</p>
          </div>
          <div onClick={() => handleChange('en')} className={`flex ${currentLocale === 'en' ? 'bg-[linear-gradient(225deg,_#73CCD8_4.87%,_#2B6B9F_96.04%)] text-white' : 'bg-transparent border border-[#ABABAB] text-[#141414]'} justify-center ${theme && '!text-white' } items-center rounded-2xl px-3 py-1.5 `}>
            <p>EN</p>
          </div>
          <div onClick={() => handleChange('ru')} className={`flex ${currentLocale === 'ru' ? 'bg-[linear-gradient(225deg,_#73CCD8_4.87%,_#2B6B9F_96.04%)] text-white' : 'bg-transparent border border-[#ABABAB] text-[#141414]'} justify-center ${theme && '!text-white' } items-center rounded-2xl px-3 py-1.5 `}>
            <p>RU</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;