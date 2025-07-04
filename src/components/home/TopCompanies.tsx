"use client";
import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const TopCompanies: React.FC<{ page: string, index: number, data: any; }> = ({ page, index, data }) => {

    const createSlides = (data: any[]) => {
        if (!data) return [];
        return [...data, ...data];
    };
    return (
        <div className={`linear-slider ${page === 'corporate' && 'mt-6'}`}>
            <Swiper
                breakpoints={{
                    520: { slidesPerView: 4 },
                    992: { slidesPerView: 5 },
                    1280: { slidesPerView: 7 }

                }}
                spaceBetween={page === 'corporate' ? 24 : 62}
                initialSlide={0}
                key={data ? 'loaded' : 'loading'}
                freeMode={true}
                loop={true}
                slidesPerView={3}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    waitForTransition: true,
                }}
                dir={index % 2 ? "rtl" : 'ltr'}
                centerInsufficientSlides={true}
                speed={index % 2 ? 3000 : 4000}
                modules={[Autoplay]}>
                {data && data.length && createSlides(data).map((item: any, index: number) => (
                    <SwiperSlide className={page === 'corporate' ? 'bg-white !w-auto rounded-[20px] !h-19 px-4' : 'bg-transparent h-38 w-38'} key={index}>
                        <div className='flex items-center justify-center gap-3 w-full h-full'>
                            <img src={page === 'home' ? item.url : item?.images[0]?.url} alt={page === 'home' ? 'Company Logos' : item?.images[0]?.alt} className={page === 'corporate' ? 'h-13 w-13' : 'object-cover'} />
                        </div>
                    </SwiperSlide>
                ))}
                {data && data.length && createSlides(data).map((item: any, index: number) => (
                    <SwiperSlide className={page === 'corporate' ? 'bg-white !w-auto rounded-[20px] !h-19 px-4' : 'bg-transparent h-38 w-38'} key={index}>
                        <div className='flex items-center justify-center gap-3 w-full h-full'>
                            <img src={page === 'home' ? item.url : item?.images[0]?.url} alt={page === 'home' ? 'Company Logos' : item?.images[0]?.alt} className={page === 'corporate' ? 'h-13 w-13' : 'object-cover'} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TopCompanies;
