import { getGeneral } from '@/service';
import { StatisticsDto } from '@/types/Statistics.dto';
import { useTranslations } from 'next-intl';
import React from 'react';

const Statistics = async () => {
    const t = useTranslations();
    const data = await getGeneral('statistics');

    return (
        <div className='w-full bg-white rounded-[20px] border border-[#DDD] px-10 py-6 md:px-20 md:py-14'>
            <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20'>
                    {t.raw("home.statistics.statisticsValue").map((item: StatisticsDto, i: number) => (
                        <div key={i} className='text-center max-w-54'>
                            <p className='font-bold text-[5rem] text-[#141414]'>{data[item.value]}</p>
                            <p className='text-[#60606080]'>{item.title}</p>
                        </div>
                    ))}
                </div>
                <div className='max-w-120'>
                    <p className='font-bold text-center md:text-start text-2xl md:text-3xl xl:text-5xl leading-8 md:leading-14'>{t("home.statistics.title")}</p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
