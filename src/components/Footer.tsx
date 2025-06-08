import { getTranslations, getLocale } from 'next-intl/server';
import { getGeneral } from '@/service';
import Image from 'next/image';
import React from 'react';
import FooterSlider from './FooterSlider';
import Link from 'next/link';
import Top from './Top';

const Footer = async ({ theme = '', study }: any) => {
  const [t, general, locale] = await Promise.all([
    getTranslations(),
    getGeneral(),
    getLocale(),
  ]);

  const header = t.raw('header.headerLists');
  const about = header[0].subItems;
  const title = t.raw('footer.title');
  const site = t.raw('footer.site');

  return (
    <footer className='wrapper py-16'>
      <div className={`${theme ? 'bg-[#2b2b2b]' : 'bg-white border border-[#DDD]'} box-shadow rounded-[20px] overflow-hidden`}>
        <div className='flex flex-col md:flex-row justify-between gap-11 px-6 py-6 md:py-13'>
          <div className='md:w-1/4 flex flex-col items-center md:items-baseline pb-7 md:pb-0'>
            <Image
              src='/assets/img/handex_logo.png'
              alt='Handex Logo'
              quality={100}
              sizes='100%'
              width={128}
              height={40}
              className='w-32 h-10 select-none'
            />
            <div className='w-full h-full'>
              <FooterSlider study={study} />
            </div>
          </div>

          <div className='flex flex-col justify-between md:w-2/3'>
            <div className='flex justify-between pr-15 md:justify-baseline pb-12'>
              <div className='md:order-3'>
                <h2 className='text-[#909090] text-xs font-medium md:font-bold md:border-b border-b-[#DDD] md:pb-4'>
                  {title[2]}
                </h2>
                <ul className='flex flex-col gap-1 pt-5 md:pt-8'>
                  {study?.map((item: any, index: number) => (
                    <li key={index} className={`text-sm md:text-base ${theme ? 'text-white' : 'text-black'}`}>
                      <Link href={'/' + locale + `/study-area/${item.slug}`}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 md:flex-row md:flex-2/4'>
                <div className='md:order-1'>
                  <h2 className='text-[#909090] text-xs font-medium md:font-bold md:border-b border-b-[#DDD] md:pb-4'>
                    {title[1]}
                  </h2>
                  <ul className='flex flex-col gap-1 pt-5 md:pt-8'>
                    {about.map((item: { text: string; link: string; }, index: number) => (
                      <li key={index} className={`text-sm md:text-base ${theme ? 'text-white' : 'text-black'}`}>
                        <Link href={item.link}>{item.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className='text-[#909090] text-xs font-medium md:font-bold md:border-b border-b-[#DDD] md:pb-4'>
                    {title[0]}
                  </h2>
                  <ul className='flex flex-col gap-1 pt-5 md:pt-8'>
                    {site.map((item: { text: string; link: string; }, i: number) => (
                      <li key={i} className={`text-sm md:text-base ${theme ? 'text-white' : 'text-black'}`}>
                        <Link href={'/' + locale + item.link}>{item.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className='grid grid-cols-1 items-end justify-between w-full xl:grid-cols-2'>
              <div>
                <div className='flex gap-11'>
                  <div>
                    <p className='text-[#909090] text-xs font-bold'>{t('footer.number')}</p>
                    <p className={`text-sm md:text-base ${theme ? 'text-white' : 'text-black'}`}>
                      {general.length && general[0].phone && general[0]?.phone[0]}
                    </p>
                  </div>
                  <div>
                    <p className='text-[#909090] text-xs font-bold'>{t('footer.mail')}</p>
                    <p className={`text-sm md:text-base ${theme ? 'text-white' : 'text-black'}`}>
                      {general.length && general[0]?.email}
                    </p>
                  </div>
                </div>

                <div className='pt-4'>
                  <p className='text-[#909090] text-xs font-bold'>{t('footer.location')}</p>
                  <p className={`text-sm md:text-base ${theme ? 'text-white' : 'text-black'}`}>
                    {general.length && general[0]?.location}
                  </p>
                </div>
              </div>
              <div className='flex justify-end items-end gap-2 lg:mt-0 mt-6'>
                <Link
                  href='https://www.instagram.com/handex.edu.az/'
                  target='_blank'
                  className='size-10 rounded-full bg-[#E8E8E8] flex justify-center items-center'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M7.496 3H16.505C18.987 3 21 5.012 21 7.496V16.505C21 18.987 18.988 21 16.504 21H7.496C5.013 21 3 18.988 3 16.504V7.496C3 5.013 5.012 3 7.496 3V3Z'
                      stroke='#141414'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M16.9492 6.71279C16.7632 6.71379 16.6122 6.86479 16.6122 7.05079C16.6122 7.23679 16.7642 7.38779 16.9502 7.38779C17.1362 7.38779 17.2872 7.23679 17.2872 7.05079C17.2882 6.86379 17.1362 6.71279 16.9492 6.71279'
                      stroke='#141414'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M14.5455 9.45432C15.9514 10.8602 15.9514 13.1396 14.5455 14.5455C13.1396 15.9514 10.8602 15.9514 9.45432 14.5455C8.04843 13.1396 8.04843 10.8602 9.45432 9.45432C10.8602 8.04843 13.1396 8.04843 14.5455 9.45432'
                      stroke='#141414'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </Link>

                <Link
                  href='https://www.facebook.com/handex.edu'
                  target='_blank'
                  className='size-10 rounded-full bg-[#E8E8E8] flex justify-center items-center'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='14'
                    height='20'
                    viewBox='0 0 14 20'
                    fill='none'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M8.5 12H11.2498C11.4792 12 11.6792 11.8439 11.7348 11.6213L12.4848 8.62127C12.5222 8.4719 12.4886 8.31365 12.3939 8.1923C12.2991 8.07094 12.1537 8 11.9998 8H8.5V6C8.5 5.44772 8.94772 5 9.5 5H12C12.2761 5 12.5 4.77614 12.5 4.5V1.5C12.5 1.22386 12.2761 1 12 1H9.5C6.73858 1 4.5 3.23858 4.5 6V8H2C1.72386 8 1.5 8.22386 1.5 8.5V11.5C1.5 11.7761 1.72386 12 2 12H4.5V18.5C4.5 18.7761 4.72386 19 5 19H8C8.27614 19 8.5 18.7761 8.5 18.5V12Z'
                      stroke='#141414'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </Link>

                <Link
                  href='https://www.linkedin.com/company/handexeduaz/'
                  target='_blank'
                  className='size-10 rounded-full bg-[#E8E8E8] flex justify-center items-center'
                >
                  {/* LinkedIn SVG */}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M7.5 3H16.504C18.987 3 21 5.013 21 7.496V16.505C21 18.987 18.987 21 16.504 21H7.496C5.013 21 3 18.987 3 16.504V7.5C3 5.015 5.015 3 7.5 3V3Z'
                      stroke='#141414'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M8.12012 11.1001V16.5001'
                      stroke='#141414'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M11.7192 16.5001V13.3501C11.7192 12.1071 12.7262 11.1001 13.9692 11.1001V11.1001C15.2122 11.1001 16.2192 12.1071 16.2192 13.3501V16.5001'
                      stroke='#141414'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M8.11814 7.83799C7.99414 7.83799 7.89314 7.93899 7.89414 8.06299C7.89414 8.18699 7.99514 8.28799 8.11914 8.28799C8.24314 8.28799 8.34414 8.18699 8.34414 8.06299C8.34414 7.93799 8.24314 7.83799 8.11814 7.83799'
                      stroke='#141414'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </Link>

                <Link
                  href='https://www.youtube.com/@HandexEdu'
                  target='_blank'
                  className='size-10 rounded-full bg-[#E8E8E8] flex justify-center items-center'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M21.583 6.37287C21.354 5.36887 20.676 4.57687 19.814 4.30487C18.255 3.81787 12 3.81787 12 3.81787C12 3.81787 5.748 3.81787 4.186 4.30487C3.327 4.57287 2.649 5.36487 2.417 6.37287C2 8.19487 2 11.9999 2 11.9999C2 11.9999 2 15.8049 2 17.6269C2.646 18.6309 3.324 19.4229 4.186 19.6949C5.748 20.1819 12 20.1819 12 20.1819C12 20.1819 18.255 20.1819 19.814 19.6949C20.673 19.4269 21.351 18.6349 21.583 17.6269C22 15.8049 22 11.9999 22 11.9999C22 11.9999 22 8.19487 21.583 6.37287Z'
                      stroke='#141414'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M10.002 15L15.198 12L10.002 9V15Z'
                      stroke='#141414'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </Link>

                <Top />
              </div>
            </div>
          </div>
        </div>

        {/* <div className='w-full bg-gray-900/10 flex justify-between py-4 px-6'>
          <p className={`text-xs ${theme ? 'text-white' : 'text-black'}`}>
            © 2025 {t('footer.privacy')}
          </p>
          <p className={`text-xs ${theme ? 'text-white' : 'text-black'}`}>{t('footer.policy')}</p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
