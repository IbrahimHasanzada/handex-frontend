import ContactForm from '@/components/contact/ContactForm';
import { getGeneral, getMeta } from '@/service';
import { baseUrl } from '@/utils/url';
import { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';
import React from 'react';

export async function generateMetadata({ params }: any) {
  const { locale } = await params;
  let data: any = await getMeta('contact');

  const canonicalUrl = `${baseUrl}/${locale}/contact`;
  if (data.error) {
    return {
      alternates: {
        canonical: canonicalUrl,
      },
    };
  }
  let meta: any = {};
  data.forEach((item: any) => {
    meta[item.name] = item.value;
  });

  return {
    title: meta.title || undefined,
    description: meta.description || undefined,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const page = async () => {
    const data = await getGeneral();
    const t = await getTranslations('contact');
    return (
        <div className='wrapper pt-45'>
            <h1 className='text-[40px] font-bold'>{t('title')}</h1>
            <div className='grid md:grid-cols-3 gap-8 mt-15'>
                <div className='bg-white rounded-[20px] py-6 px-12 box-shadow flex gap-4 items-center'>
                    <svg className='size-12' xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M37.93 33.22L35.584 30.874C34.412 29.702 32.512 29.702 31.342 30.874L29.498 32.718C29.086 33.13 28.462 33.268 27.93 33.034C25.258 31.864 22.618 30.09 20.264 27.736C17.92 25.392 16.152 22.764 14.98 20.102C14.736 19.552 14.878 18.906 15.304 18.48L16.956 16.828C18.298 15.486 18.298 13.588 17.126 12.416L14.78 10.07C13.218 8.508 10.686 8.508 9.12405 10.07L7.82005 11.372C6.33805 12.854 5.72005 14.992 6.12005 17.112C7.10805 22.338 10.144 28.06 15.042 32.958C19.94 37.856 25.6621 40.892 30.8881 41.88C33.0081 42.28 35.146 41.662 36.628 40.18L37.93 38.878C39.492 37.316 39.492 34.784 37.93 33.22V33.22Z" stroke="url(#paint0_linear_5785_3974)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M25.999 13.9819C28.061 13.9539 30.133 14.7179 31.707 16.2919" stroke="url(#paint1_linear_5785_3974)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M37.363 10.636C34.225 7.49798 30.111 5.92798 25.999 5.92798" stroke="url(#paint2_linear_5785_3974)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M34.017 22C34.045 19.938 33.281 17.866 31.707 16.292" stroke="url(#paint3_linear_5785_3974)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M37.3633 10.636C40.5013 13.774 42.0713 17.888 42.0713 22" stroke="url(#paint4_linear_5785_3974)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                            <linearGradient id="paint0_linear_5785_3974" x1="22.6798" y1="-4.22341" x2="-7.42178" y2="26.0284" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#73CCD8" />
                                <stop offset="1" stopColor="#2B6B9F" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_5785_3974" x1="28.8752" y1="13.0652" x2="27.4186" y2="16.6812" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#73CCD8" />
                                <stop offset="1" stopColor="#2B6B9F" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_5785_3974" x1="31.7252" y1="4.06161" x2="28.7079" y2="11.3808" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#73CCD8" />
                                <stop offset="1" stopColor="#2B6B9F" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_5785_3974" x1="32.8714" y1="14.0292" x2="29.2474" y2="15.5036" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#73CCD8" />
                                <stop offset="1" stopColor="#2B6B9F" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_5785_3974" x1="39.7356" y1="6.13101" x2="32.4013" y2="9.1847" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#73CCD8" />
                                <stop offset="1" stopColor="#2B6B9F" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div>
                        {data[0]?.phone?.map((item: string, i: number) => (
                            <p key={i} className='text-base md:text-lg'>{item}</p>
                        ))}
                    </div>
                </div>
                <div className='bg-white rounded-[20px] py-6 px-12 box-shadow flex gap-4 items-center'>
                    <svg className='size-12' xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path d="M6 19.406V38C6 40.21 7.79 42 10 42H37.998C40.208 42 41.998 40.21 41.998 38V19.406" stroke="url(#paint0_linear_5785_9520)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.77261 16.088L21.7606 6.67798C23.1146 5.76798 24.8846 5.76798 26.2386 6.67798L40.2266 16.088C42.5826 17.674 42.5826 21.14 40.2266 22.726L28.4786 30.63C25.7706 32.452 22.2306 32.452 19.5226 30.63L7.77461 22.726C5.41661 21.14 5.41661 17.672 7.77261 16.088Z" stroke="url(#paint1_linear_5785_9520)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18.2397 29.7599L7.17969 40.8199" stroke="url(#paint2_linear_5785_9520)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M40.8198 40.8199L29.7598 29.7599" stroke="url(#paint3_linear_5785_9520)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                            <linearGradient id="paint0_linear_5785_9520" x1="24.1388" y1="10.4492" x2="5.67551" y2="40.0127" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#73CCD8" />
                                <stop offset="1" stopColor="#2B6B9F" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_5785_9520" x1="24.1395" y1="-4.31197" x2="1.72566" y2="26.8656" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#73CCD8" />
                                <stop offset="1" stopColor="#2B6B9F" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_5785_9520" x1="12.7526" y1="25.3755" x2="2.6947" y2="35.4836" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#73CCD8" />
                                <stop offset="1" stopColor="#2B6B9F" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_5785_9520" x1="35.3327" y1="25.3755" x2="25.2748" y2="35.4836" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#73CCD8" />
                                <stop offset="1" stopColor="#2B6B9F" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div>
                        <p className='text-base md:text-lg'>{data[0]?.email}</p>
                    </div>
                </div>
                <div className='bg-white rounded-[20px] py-6 px-12 box-shadow flex gap-4 items-center'>
                    <svg className='md:size-12 size-20' xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M24 26V26C20.686 26 18 23.314 18 20V20C18 16.686 20.686 14 24 14V14C27.314 14 30 16.686 30 20V20C30 23.314 27.314 26 24 26Z" stroke="url(#paint0_linear_5785_6836)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M24 42C24 42 10 30.5 10 20C10 12.268 16.268 6 24 6C31.732 6 38 12.268 38 20C38 30.5 24 42 24 42Z" stroke="url(#paint1_linear_5785_6836)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                            <linearGradient id="paint0_linear_5785_6836" x1="24.0466" y1="9.2429" x2="13.1338" y2="20.2101" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#73CCD8" />
                                <stop offset="1" stopColor="#2B6B9F" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_5785_6836" x1="24.1087" y1="-8.27131" x2="-7.66116" y2="16.5619" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#73CCD8" />
                                <stop offset="1" stopColor="#2B6B9F" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div>
                        <p className='text-base md:text-lg'>{data[0]?.location}</p>
                    </div>
                </div>
            </div>
            <ContactForm />
        </div>
    );
};

export default page;