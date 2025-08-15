import HeadSection from '@/components/home/HeroSection';
import Statistics from '@/components/Statistics';
import StudyAreasSection from '@/components/home/StudyAreasSection';
import TestimonialsHome from '@/components/home/TestimonialsHome';
import TopCompanies from '@/components/home/TopCompanies';
import UserSlider from '@/components/home/UserSlider';
import { baseUrl } from '@/utils/url';
import { getContent, getFaqs, getGeneral, getMeta, getStatistic } from '@/service';
import Faq from '@/components/study-area/Faq';

export async function generateMetadata({ params }: any) {
  const { locale } = await params;
  let data: any = await getMeta('home');

  const canonicalUrl = `${baseUrl}`;
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
  const general = await getGeneral();
  const result = await getContent('graduates');
  const faq = await getFaqs('home');

  return (
    <div>
      <div className='pt-30'>
        <div className='wrapper'>
          <div className='md:py-15'>
            <HeadSection page='home' />
          </div>
          <div className='py-12.5 md:py-15'>
            <StudyAreasSection model='home' page='home' />
          </div>
        </div>
        <div className='py-12.5 md:py-15'>
          <TestimonialsHome />
        </div>
        <div className='wrapper'>
          <div className='py-12.5 md:py-15'>
            <Statistics page='home' slug='home' />
          </div>
          <div className='py-12.5 md:py-15'>
            <h2 className='font-bold text-4xl leading-12 mb-12'>Məzunlar</h2>
            <UserSlider result={result} />
          </div>
          <div className='mt-30 md:mt-40 md:mb-10 py-6 shadow-[0px_6px_10px_0px_rgba(0,0,0,0.07),_0px_0px_10px_0px_rgba(0,0,0,0.03)] bg-white rounded-[20px]'>
            <div className='text-center'>
              <h2 className='font-bold text-2xl md:text-3xl leading-8 md:leading-11'>Məzunlarımızın işlədiyi top şirkətlər</h2>
            </div>
            {/* <PartnersClient data={general && general[0]?.company} page='home' title={t('topCompanies')} description='' /> */}
            <TopCompanies initialSlide={0} data={general && general[0]?.company} index={1} sliderIndex={1} page='home' />
          </div>
          {faq.length ? (
            <div className='mt-6 md:mt-30'>
              <p className='font-bold text-2xl md:text-4xl mb-6'>Tez-tez verilən suallar</p>
              {faq?.map((item: any, i: number) => <h2 key={i} className='hidden'>{item.title}</h2>)}
              <Faq locale='az' />
            </div>
          ): undefined}
        </div>
      </div>
    </div>
  );
};

export default page;
