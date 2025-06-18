"use client"
import Image from 'next/image';
import React from 'react';
import Button from '../ui/Button';
import Link from 'next/link';
import { useLocale } from 'next-intl';

const StudyCards: React.FC<any> = ({ item, theme, model }) => {
    const locale = useLocale();

    return (
        <Link href={model === 'corporate' ? ('/' + locale + `/corporate/study-area/${item.slug}`) : ('/' + locale + `/study-area/${item.slug}`)} className={`${theme ? 'bg-[#282828]' : 'bg-[#fff]'} block group relative rounded-3xl w-full sm:h-65  xl:h-76 max-w-76 p-6 flex flex-col justify-between`}>
            <p className={`${theme ? 'text-white' : 'text-black'} font-medium text-xl xl:text-2xl md:max-w-20 lg:max-w-47`}>{item.name}</p>
            <div className='relative flex justify-center items-center'>
                <Image src={item?.image?.url} alt='Handex study area icons' width={240} height={140} className='object-cover duration-500 group-hover:scale-110 h-35 w-50 xl:h-45 xl:w-60' quality={80} priority={true} sizes='100%' />
            </div>
            <div className={` ${theme ? 'bg-[#181818]' : 'bg-primary-bg'} absolute -top-2 -right-4 md:-top-3 md:-right-8 xl:-top-5 xl:-right-7  w-20 h-20 md:w-25 md:h-25 xl:w-28 xl:h-28 p-2 md:p-3 xl:p-5 rounded-full flex items-center justify-center`}>
                <Button theme={theme ? true : false} flag={true} link=''>
                    <div className='w-full h-full relative'>
                        <Image
                            src='/assets/img/Arrow.png'
                            alt='Handex study area arrow icon'
                            width={48}
                            height={48}
                            className='absolute  duration-500 h-12 w-12 
                    /* Mobile default position */
                    left-2 top-2
                    /* Mobile hover position */
                    group-hover:left-11 group-hover:-top-7
                    /* Tablet/Desktop default position */
                    md:left-3 md:top-3
                    /* Tablet/Desktop hover position */
                    md:group-hover:left-13 md:group-hover:-top-9'
                            quality={80}
                            priority={true}
                            sizes="100%"
                        />

                        {/* Second Arrow */}
                        <Image
                            src='/assets/img/Arrow.png'
                            alt='Handex study area arrow icon'
                            width={48}
                            height={48}
                            className='absolute   duration-500 h-12 w-12 
                    /* Mobile default position */
                    -left-9 top-15
                    /* Mobile hover position */
                    group-hover:left-2 group-hover:top-2
                    /* Tablet/Desktop default position */
                    md:-left-8 md:top-15
                    /* Tablet/Desktop hover position */
                    md:group-hover:left-3 md:group-hover:top-3'
                            quality={80}
                            priority={true}
                            sizes="100%"
                        />
                    </div>
                </Button>
            </div>
            <svg className='absolute size-[45px] md:size-[50px] -top-1 right-12.5 md:-top-1  md:right-13  xl:right-17.5 -rotate-84 md:-rotate-90' width="200" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <path className={`absoulte ${theme ? 'fill-[#181818]' : 'fill-primary-bg'}`} d="M -50 70 Q 100 95, 100 0 L 100 100 Z" stroke={theme ? '#181818' : '#F4F5F5'} fill="none" strokeWidth="2" />
            </svg>

            <svg className='absolute size-[50px] md:size-[60px] top-16 -right-3 md:top-21 md:-right-4 xl:-right-3 -rotate-85 xl:-rotate-95' width="200" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <path className={`absoulte ${theme ? 'fill-[#181818]' : 'fill-primary-bg'}`} d="M -30 75 Q 90 95, 100 -7 L 150 100 Z" stroke={theme ? '#181818' : '#F4F5F5'} fill="none" strokeWidth="2" />
            </svg>
        </Link>
    );
};

export default StudyCards;
