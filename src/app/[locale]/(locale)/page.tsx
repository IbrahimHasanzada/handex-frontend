import HeadSection from '@/components/home/HeroSection';
import Statistics from '@/components/Statistics';
import StudyAreasSection from '@/components/home/StudyAreasSection';
import TestimonialsHome from '@/components/home/TestimonialsHome';
import TopCompanies from '@/components/home/TopCompanies';
import UserSlider from '@/components/home/UserSlider';
import { getLocale, getTranslations } from 'next-intl/server';
import Head from 'next/head';
import { baseUrl } from '@/utils/url';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  let lang = await getLocale();
  const canonicalUrl = `${baseUrl}/${lang}`;
  return {
    title: 'Handex.az',
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const page = async () => {
  const t = await getTranslations();

  return (
    <div>
      {/* <Head>
        <title>Handex.az</title>
        <link rel="canonical" href={baseUrl + '/' + lang} key="canonical" />
      </Head> */}
      <div className='pt-30'>
        <div className='wrapper'>
          <div className='py-12.5 md:py-15'>
            <HeadSection page='home' />
          </div>
          <div className='py-12.5 md:py-15'>
            <StudyAreasSection page='home' />
          </div>
        </div>
        <div className='py-12.5 md:py-15'>
          <TestimonialsHome />
        </div>
        <div className='wrapper'>
          <div className='py-12.5 md:py-15'>
            <Statistics page='home' />
          </div>
          <div className='py-12.5 md:py-15'>
            <h2 className='font-bold text-4xl leading-12 mb-12'>{t("home.graduates.title")}</h2>
            <UserSlider />
          </div>
          <div className='mt-30 md:mt-40 md:mb-10 py-6 shadow-[0px_6px_10px_0px_rgba(0,0,0,0.07),_0px_0px_10px_0px_rgba(0,0,0,0.03)] bg-white rounded-[20px]'>
            <div className='text-center'>
              <h2 className='font-bold text-2xl md:text-3xl leading-8 md:leading-11'>Məzunlarımızın işlədiyi top şirkətlər</h2>
            </div>
            <TopCompanies index={0} page='home' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
