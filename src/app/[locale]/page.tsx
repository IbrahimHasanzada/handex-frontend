import HeadSection from '@/components/home/HeroSection'
import Statistics from '@/components/home/Statistics'
import StudyAreasSection from '@/components/home/StudyAreasSection'
import TestimonialsAccordion from '@/components/home/TestimonialsAccordion'
import UserSlider from '@/components/home/UserSlider'
import { useTranslations } from 'next-intl'
import React from 'react'
const page = () => {
  const t = useTranslations()
  return (
    <div className='bg-primary-bg'>
      <div className='py-30'>
        <div className='wrapper'>
          <div className='py-15'>
            <HeadSection />
          </div>
          <div className='py-15'>
            <StudyAreasSection />
          </div>
        </div>
        <div className='py-15'>
          <div className='w-full flex justify-center py-15'>
            <div className='max-w-126 text-center'>
              <h2 className='text-4xl leading-12 font-bold text-[#141414]'>{t("home.testimonials.heading")}</h2>
              <p className='text-[#787878] text-2xl leading-8'>{t("home.testimonials.title")}</p>
            </div>
          </div>
          <TestimonialsAccordion />
        </div>
        <div className='wrapper'>
          <div className='py-15'>
            <Statistics />
          </div>
          <div className='py-10'>
            <h2 className='font-bold text-4xl leading-12 mb-12'>{t("home.graduates.title")}</h2>
            <UserSlider />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
