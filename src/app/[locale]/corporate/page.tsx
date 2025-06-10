import TestimonialsCorporate from "@/components/corporate/TestimonialsCorporate";
import HeadSection from "@/components/home/HeroSection";
import Statistics from "@/components/Statistics";
import StudyAreasSection from "@/components/home/StudyAreasSection";
import Partners from "@/components/corporate/Partners";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { baseUrl } from "@/utils/url";
import { getGeneral, getMeta, getStatistic } from "@/service";
import HandexPreference from "@/components/HandexPreference";


export async function generateMetadata({ params }: any) {
  const { locale } = await params;
  let data: any = await getMeta('corporate');

  const canonicalUrl = `${baseUrl}/${locale}/corporate`;
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
  const statistic = await getStatistic('corporate');
  return (
    <div className='pt-30'>
      <div className="wrapper">
        <div className='py-12.5 md:py-15'>
          <HeadSection t={t} page='corporate' />
        </div>
        <div className='py-12.5 md:py-15'>
          <StudyAreasSection model='corporate' page="corporate" />
        </div>
        <div className="mb-30 mt-17.5">
          <h3 className="text-center text-white text-2xl md:text-[38px] font-bold">{t('preference')}</h3>
          <HandexPreference theme="dark" />
        </div>
        <div className='my-12.5 md:my-15 bg-[#282828] rounded-[20px]'>
          <TestimonialsCorporate />
        </div>
        <div className='py-12.5 md:py-15'>
          <Statistics data={statistic} page='corporate' />
        </div>
        <div className='py-12.5 md:py-15'>
          <Partners page='corporate' />
        </div>
      </div>
    </div>

  );
};

export default page;