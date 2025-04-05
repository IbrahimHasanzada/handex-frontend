import HeadSection from '@/components/home/HeroSection';
import Statistics from '@/components/home/Statistics';
import StudyAreasSection from '@/components/home/StudyAreasSection';
import TestimonialsAccordion from '@/components/home/TestimonialsAccordion';
import TestimonialsHome from '@/components/home/TestimonialsHome';
import TopCompanies from '@/components/home/TopCompanies';
import UserSlider from '@/components/home/UserSlider';
import { getCustomers } from '@/service';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

const page = () => {
  const t = useTranslations();

  return (
    <div>
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
            <Statistics />
          </div>
          <div className='py-12.5 md:py-15'>
            <h2 className='font-bold text-4xl leading-12 mb-12'>{t("home.graduates.title")}</h2>
            <UserSlider />
          </div>
        </div>
        <div className='mt-30 md:mt-40 md:mb-10'>
          <div className='text-center'>
            <h2 className='font-bold text-2xl md:text-3xl leading-8 md:leading-11'>Məzunlarımızın işlədiyi top şirkətlər</h2>
          </div>
          <TopCompanies />
        </div>
      </div>
    </div>
  );
};

export default page;
