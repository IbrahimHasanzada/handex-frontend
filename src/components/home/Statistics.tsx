import { StatisticsDto } from '@/types/Statistics.dto'
import { useTranslations } from 'next-intl'
import React from 'react'

const Statistics = () => {
    const t = useTranslations()
    return (
        <div className='w-full bg-white rounded-[20px] border border-[#DDD] px-20 py-14'>
            <div className='flex justify-between items-center gap-20'>
                <div className='grid grid-cols-2 gap-20'>
                    {t.raw("home.statistics.statisticsValue").map((item: StatisticsDto, index: number) => (
                        <div key={index} className='text-center max-w-54'>
                            <p className='font-bold text-[5rem] text-[#141414]'>0</p>
                            <p className='text-[#60606080]'>{item.title}</p>
                        </div>
                    ))}
                </div>
                <div className='max-w-120'>
                    <p className='font-bold text-5xl leading-14'>{t("home.statistics.title")}</p>
                </div>
            </div>
        </div>
    )
}

export default Statistics
