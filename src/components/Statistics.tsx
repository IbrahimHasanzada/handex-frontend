import { getGeneral } from '@/service';
import { StatisticsDto } from '@/types/Statistics.dto';
import { getTranslations } from 'next-intl/server';
import React from 'react';

const Statistics: React.FC<StatisticsDto> = async ({ page }) => {
    const t = await getTranslations();
    const data = await getGeneral('statistics');
    return (
        <div className={`${page === 'corporate' ? 'bg-transparent border-none' : 'bg-white border-[#DDD] px-10 py-6 md:px-20 md:py-14'} w-full rounded-[20px] border `}>
            <div className={`flex ${page === 'corporate' ? 'flex-col-reverse gap-10 md:justify-between' : 'flex-col-reverse md:flex-row gap-10 md:gap-20'} justify-between items-center`}>
                <div className={`grid ${page === 'corporate' ? 'grid-cols-2 base:grid-cols-4' : 'grid-cols-1 md:grid-cols-2'} gap-10 md:gap-20`}>
                    {t.raw("home.statistics.statisticsValue").map((item: any, i: number) => (
                        <div key={i} className={`${page !== 'corporate' && 'max-w-54'} text-center`}>
                            <p className={`${page ? 'bg-gradient-to-r from-[#F4F5F5] to-[#666] text-transparent bg-clip-text' : 'text-[#141414]'} font-bold text-[5rem] `}>{(i % 2 ? '+' : '') + data[item.value]}</p>
                            <p className={page === 'corporate' ? 'text-white/45 ' : 'text-[#60606080]'}>{item.title}</p>
                        </div>
                    ))}
                </div>
                <div className={page === 'corporate' ? 'w-auto' : 'max-w-120'}>
                    <p className={`${page === 'corporate' ? 'text-3xl bg-gradient-to-r from-[#F4F5F5] to-[#666] text-transparent bg-clip-text' : 'text-2xl md:text-3xl xl:text-5xl'} font-bold text-center md:text-start leading-8 md:leading-14`}>{t("home.statistics.title")}</p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
