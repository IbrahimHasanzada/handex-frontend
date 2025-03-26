import React from 'react'
import Button from '../ui/Button'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const HeadSection = () => {
    const t = useTranslations()
    return (
        <div className='flex flex-col-reverse md:flex-row'>
            <div className='flex-1/2 md:py-32'>
                <h1 className='font-bold md:text-2xl base:!text-4xl leading-12 mb-6 max-w-120'>Sabahin pesekarlari bu gun burada yetisir</h1>
                <p className='mb-10 max-w-150 md:text-sm base:text-base'>Handex, gələcəyin texnoloji trendlərini öncədən görərək, mütəxəssisləri bugündən bu dəyişikliklərə hazır edən innovativ tədris mərkəzidir.</p>
                <div className='w-35 h-12 '>
                    <Button flag={true} link='' >
                        <div className='flex items-center justify-center h-full'>
                            {t("home.headSection.button")}
                        </div>
                    </Button>
                </div>
            </div>
            <div className='h-80 w- md:h-130 md:w-150 relative'>
                <Image src='/assets/img/hero.png' alt='Handex hero page icon' fill className='object-cover md:object-contain' quality={80} priority={true} sizes="100%" />
            </div>
        </div>
    )
}

export default HeadSection
