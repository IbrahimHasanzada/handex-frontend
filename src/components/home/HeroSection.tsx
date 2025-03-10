import React from 'react'
import Button from '../ui/Button'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const HeadSection = () => {
    const t = useTranslations()
    return (
        <div className='flex'>
            <div className=' py-32'>
                <h1 className='font-bold text-4xl leading-12 mb-6 max-w-120'>Sabahin pesekarlari bu gun burada yetisir</h1>
                <p className='mb-10 max-w-150'>Handex, gələcəyin texnoloji trendlərini öncədən görərək, mütəxəssisləri bugündən bu dəyişikliklərə hazır edən innovativ tədris mərkəzidir.</p>
                <div className='w-35 h-12'>
                    <Button link='' >
                        {t("home.headSection.button")}
                    </Button>
                </div>
            </div>
            <div className='relative w-175 h-125'>
                <Image src='/assets/img/hero.png' alt='Handex hero page icon' fill className='object-cover' />
            </div>
        </div>
    )
}

export default HeadSection
