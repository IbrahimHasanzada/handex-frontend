import FeaturesSlider from '@/components/about/FeaturesSlider';
import ImageCollage from '@/components/about/ImageCollage';
import { getAbout, getContent, getMeta } from '@/service';
import { baseUrl } from '@/utils/url';
import { getTranslations } from 'next-intl/server';
import React from 'react';

export async function generateMetadata({ params }: any) {
  const { locale } = await params;
  let data: any = await getMeta('about');

  const canonicalUrl = `${baseUrl}/${locale}/about`;
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

const AboutPage = async () => {
    const about: any = await getAbout();
    const t = await getTranslations('home');
    const features = await getContent('corporate-features');
    

    return (
        <div className="wrapper w-full pt-30">
            <div className='relative'>
                <ImageCollage images={about.images} />
            </div>
            <div className='base:mt-30'>
                {about.sections.map((item: any, index: number) => (
                    <div key={index} className={`mt-30 grid md:grid-cols-2 justify-between gap-7 base:gap-33 flex-col  ${index % 2 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                        <div className='flex-1/2 rounded-[20px]'>
                            {item?.left_side?.type === 'image' ? (
                                <img src={item?.left_side?.url} alt='' className='object-cover h-100 w-full rounded-[20px]' />
                            ) : (
                                <div dangerouslySetInnerHTML={{ __html: item?.left_side?.translations[0]?.value }}></div>
                            )}
                        </div>
                        <div className='flex-1/2 rounded-[20px]'>
                            {item?.right_side?.type === 'image' ? (
                                <img src={item?.right_side?.url} alt='' className='object-cover h-100 w-full rounded-[20px]' />
                            ) : (
                                <div dangerouslySetInnerHTML={{ __html: item?.right_side?.translations[0]?.value }}></div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <h2 className='md:text-center text-2xl md:text-[38px] mt-25 md:mt-30 mb-7 md:mb-12 font-bold'>{t('preference')}</h2>
            <div className='mb-20 lg:grid hidden gap-11 grid-cols-3'>
                {features?.map((item: any, i: number) => (
                    <div style={{ marginTop: (i >= 3) ? (i * -52) : (i * 52) + 'px' }} key={i} className={`h-54 ${i < 3 && 'my-72'} bg-white box-shadow p-6 rounded-[20px]`}>
                        <img className='mb-3 size-16' src={item?.images[0]?.url} alt={item?.images[0]?.alt} />
                        <h3 className='text-base text-[#141414] font-bold mb-2'>{item?.title}</h3>
                        <div className='text-[#909090] text-sm line-clamp-4' dangerouslySetInnerHTML={{ __html: item.desc }}></div>
                    </div>
                ))}
            </div>
            <div className='md:mt-25 mb-9 lg:hidden block'>
                <FeaturesSlider features={features} />
            </div>
        </div >
    );
};

export default AboutPage;