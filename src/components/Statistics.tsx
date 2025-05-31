import { getGeneral } from '@/service';
import { StatisticsDto } from '@/types/Statistics.dto';
import { getTranslations } from 'next-intl/server';
import React from 'react';

const Statistics: React.FC<StatisticsDto> = async ({ page }) => {
    const t = await getTranslations();
    const data = await getGeneral('statistics');

    return (
        <div className={`${page === 'corporate' || page === 'studyArea' ? 'bg-transparent border-none' : 'bg-white border-[#DDD] p-6 md:px-20 md:py-14'} w-full rounded-[20px] border `}>
            <div className={`flex ${page === 'corporate' || page === 'studyArea' ? 'flex-col-reverse md:justify-between' : 'flex-col-reverse lg:flex-row md:gap-20'} justify-between ${page === 'studyArea' ? 'gap-6' : 'gap-10'} items-center`}>
                <div className={`grid ${page === 'corporate' || page === 'studyArea' ? 'base:grid-cols-4' : ' md:grid-cols-2'} grid-cols-2 ${page === 'studyArea' ? 'gap-6' : 'gap-10 md:gap-20'}`}>
                    {t.raw("home.statistics.statisticsValue").map((item: any, i: number) => {
                        return (
                            <div key={i} className={`${page === 'home' &&  'max-w-54'} ${page === 'studyArea' && 'bg-white rounded-[20px] box-shadow flex-col-reverse px-4 py-10'} text-center flex flex-col`}>
                                <p className={`${page === 'corporate' ? 'bg-gradient-to-r from-[#F4F5F5] to-[#666] text-transparent bg-clip-text' : 'text-[#141414]'} font-bold text-3xl md:text-[5rem] pb-2`}>{(i % 2 ? '+' : '') + (data.length ? Object.values(data)[i] : 0) }</p>
                                <p className={page === 'corporate' ? 'text-white/45 ' : page === 'studyArea' ? 'text-[#AAA]' : 'text-[#60606080] text-xs md:text-base'}>{item.title}</p>
                            </div>
                        );
                    })}
                </div>
                <div className={page === 'corporate' || page === 'studyArea' ? 'w-auto' : ' lg:max-w-120'}>
                    <p className={`${page === 'corporate' ? 'text-3xl bg-gradient-to-r from-[#F4F5F5] to-[#666] text-transparent bg-clip-text' : page === 'studyArea' ? 'text-[#181818] text-[38px] hidden' : 'text-2xl md:text-3xl xl:text-5xl'} font-bold text-center md:text-start leading-8 md:leading-14`}>{t("home.statistics.title")}</p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
