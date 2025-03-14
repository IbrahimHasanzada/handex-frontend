import { useTranslations } from 'next-intl'
import React from 'react'
import Button from '../ui/Button'
import Image from 'next/image'
import StudyCards from './StudyCards'

const StudyAreasSection = () => {

  const study = [
    { img: '/assets/img/excel.png', title: "Microsoft Excel" },
    { img: '/assets/img/excel.png', title: "Microsoft Excel" },
    { img: '/assets/img/excel.png', title: "Microsoft Excel" },
    { img: '/assets/img/excel.png', title: "Microsoft Excel" },
    { img: '/assets/img/excel.png', title: "Microsoft Excel" },
    { img: '/assets/img/excel.png', title: "Microsoft Excel" },
    { img: '/assets/img/excel.png', title: "Microsoft Excel" },
    { img: '/assets/img/excel.png', title: "Microsoft Excel" },
  ]

  const t = useTranslations()
  return (
    <div>
      <h2 className='font-bold leading-12 text-4xl'>{t("home.studyOfArea.title")}</h2>
      <div className='mt-12 grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
        {study.map((item, index) => (
          <StudyCards key={index} item={item} index={index} />
        ))}
      </div>
      <div className='mt-15 w-full flex justify-center'>
        <div className='w-35 h-12'>
          <Button link=''>
            <div className='flex items-center gap-2'>
              {t("home.studyOfArea.button")}
              <div className='pt-1'>
                <Image src='/assets/img/angle-arrow.svg' alt='Handex study of area section arrow icon' width={24} height={24} className='' />
              </div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default StudyAreasSection
