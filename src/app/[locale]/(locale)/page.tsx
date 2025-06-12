import HeadSection from '@/components/home/HeroSection';
import Statistics from '@/components/Statistics';
import StudyAreasSection from '@/components/home/StudyAreasSection';
import TestimonialsHome from '@/components/home/TestimonialsHome';
import TopCompanies from '@/components/home/TopCompanies';
import UserSlider from '@/components/home/UserSlider';
import { getTranslations } from 'next-intl/server';
import { baseUrl } from '@/utils/url';
import { getContent, getGeneral, getMeta, getStatistic } from '@/service';

export async function generateMetadata({ params }: any) {
  const { locale } = await params;
  let data: any = await getMeta('home');

  const canonicalUrl = `${baseUrl}/${locale}`;
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
  const t = await getTranslations('home');
  const general = await getGeneral();
  const statistic = await getStatistic('home');
  return (
    <div>
      <div className='pt-30'>
        <div className='wrapper'>
          <div className='py-12.5 md:py-15'>
            <HeadSection t={t} page='home' />
          </div>
          <div className='py-12.5 md:py-15'>
            <StudyAreasSection model='home' page='home' />
          </div>
        </div>
        <div className='py-12.5 md:py-15'>
          <TestimonialsHome t={t} />
        </div>
        <div className='wrapper'>
          <div className='py-12.5 md:py-15'>
            <Statistics page='home' data={statistic} />
          </div>
          <div className='py-12.5 md:py-15'>
            <h2 className='font-bold text-4xl leading-12 mb-12'>{t("graduates.title")}</h2>
            <UserSlider />
          </div>
          <div className='mt-30 md:mt-40 md:mb-10 py-6 shadow-[0px_6px_10px_0px_rgba(0,0,0,0.07),_0px_0px_10px_0px_rgba(0,0,0,0.03)] bg-white rounded-[20px]'>
            <div className='text-center'>
              <h2 className='font-bold text-2xl md:text-3xl leading-8 md:leading-11'>{t('topCompanies')}</h2>
            </div>
            <TopCompanies data={general && general[0]?.company} index={0} page='home' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
