import Image from 'next/image';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import { getLocale, getTranslations } from 'next-intl/server';
import { HeaderItem } from '@/types/Header.dto';
import HeaderModal from './home/HeaderModal';

const langArr = ['az', 'en', 'ru'];

const Header = async ({ theme = '' }: { theme?: string; }) => {
  const local = await getLocale();
  const t = await getTranslations('header');
  const headerLists = t.raw('headerLists') as HeaderItem[];

  return (
    <header className="relative">
      <div className={`wrapper base:bg-transparent ${theme === 'dark' ? 'bg-[#2b2b2b]' : 'bg-white'} fixed left-0 right-0 z-50`}>
        <div className={`base:px-6 w-full rounded-b-[20px] ${theme === 'dark' ? 'base:bg-[#2b2b2b]' : 'base:bg-white base:border border-[#DDD]'} h-25 flex items-center justify-between base:shadow-md`}>
          <Link href='/' className='relative flex items-center'>
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

                <li className='group cursor-pointer py-3'>
                  <p className={`group-hover:border-b border-b-primary-corporate ${theme ? 'text-white' : 'text-black'}`}>
                    <Link href={ '/' + local + '/corporate'}>{t('coorporate')}</Link>
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
                  <LanguageSwitcher availableLocales={langArr} theme={theme} />
                </div>
                <div className='h-12 w-40 text-sm lg:text-base lg:w-60'>
                  <HeaderModal theme={theme} />
                </div>
              </div>
            </div>
          </div>
          <div className='w-8 h-8 block base:hidden'>
            <button>
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
    </header>
  );
};

export default Header;