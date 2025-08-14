import { StatisticsDto } from '@/types/Statistics.dto';
import React from 'react';
import ClientCountUp from './ClientCountUp';
import { getStatistic } from '@/service';

const Statistics: React.FC<StatisticsDto> = async ({ slug, page, model }) => {
    const data = await getStatistic(slug);


    return (
        <div className={`${page === 'corporate' || page === 'studyArea' ? 'bg-transparent border-none' : 'bg-white border-[#DDD] p-6 md:px-20 md:py-14'} w-full ${data && data.length == 0 ? 'hidden' : "block pt-10 pb-15"}  rounded-[20px] border`}>
            <div className={`flex ${page === 'corporate' || page === 'studyArea' ? 'flex-col-reverse md:justify-between' : 'flex-col-reverse lg:flex-row md:gap-20'} w-full justify-between ${page === 'studyArea' ? 'gap-6' : 'gap-10'} items-center`}>
                <div className={`grid ${page === 'corporate' || page === 'studyArea' ? 'base:grid-cols-4' : ' md:grid-cols-2'} grid-cols-2 ${page === 'studyArea' ? 'gap-6' : 'gap-10 w-full md:gap-20'}`}>
                    {data?.map((item: any, i: number) => {

                        const prefix = i % 2 ? '+' : '';
                        return (
                            <div key={i} className={`${page === 'home' && 'max-w-54'} ${page === 'studyArea' && `${model ? 'bg-[#2B2B2B]' : 'bg-white'} rounded-[20px] box-shadow flex-col-reverse px-4 py-10`} text-center flex flex-col`}>
                                <div className={`${page === 'corporate' ? 'bg-gradient-to-r from-[#F4F5F5] to-[#666] text-transparent bg-clip-text' : model ? 'text-white' : 'text-[#141414]'} font-bold text-3xl md:text-[5rem] pb-2`}>
                                    <ClientCountUp end={item.count} prefix={prefix} />
                                </div>
                                <p className={page === 'corporate' ? 'text-white/45 ' : page === 'studyArea' ? 'text-[#909090]' : 'text-[#595959] text-xs md:text-base'}>{item.text}</p>
                            </div>
                        );
                    })}
                </div>
                <div className={page === 'corporate' || page === 'studyArea' ? 'w-auto' : ' lg:max-w-120'}>
                    <p className={`${page === 'corporate' ? 'text-3xl bg-gradient-to-r from-[#F4F5F5] to-[#666] text-transparent bg-clip-text' : page === 'studyArea' ? 'text-[#181818] text-[38px] hidden' : 'text-2xl md:text-3xl xl:text-5xl'} font-bold text-center md:text-start leading-8 md:leading-14`}>
                        Statistika sübut edir: Uğur təsadüf deyil, doğru qərarların nəticəsidir!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
