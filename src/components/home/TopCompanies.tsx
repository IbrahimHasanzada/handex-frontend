"use client";
import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const TopCompanies: React.FC<{ page: string, index: number, data: any, sliderIndex: number }> = ({ page, index, data, sliderIndex }) => {

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
                key={index}
                freeMode={true}
                loop={true}
                slidesPerView={3}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    waitForTransition: true,
                }}
                allowTouchMove={false}
                dir={sliderIndex % 2 ? "rtl" : 'ltr'}
                centerInsufficientSlides={true}
                observer={true}
                loopAdditionalSlides={page === 'corporate' && data && 7}
                speed={sliderIndex % 2 ? 3000 : 4000}
                modules={[Autoplay]}>
                {data && data.length && createSlides(data).map((item: any, index: number) => (
                    <SwiperSlide className={page === 'corporate' ? 'bg-white !w-auto rounded-[20px] !h-19 px-4' : 'bg-transparent h-38 w-38'} key={index}>
                        <div className='flex items-center justify-center gap-3 w-full h-full'>
                            <img src={page === 'home' ? item.url : item?.images[0]?.url} alt={page === 'home' ? 'Company Logos' : item?.images[0]?.alt} className={page === 'corporate' ? '!w-22 object-cover' : 'object-cover'} />
                        </div>
                    </SwiperSlide>
                ))}
                {data && data.length && createSlides(data).map((item: any, index: number) => (
                    <SwiperSlide className={page === 'corporate' ? 'bg-white !w-auto rounded-[20px] !h-19 px-4' : 'bg-transparent h-38 w-38'} key={index}>
                        <div className='flex items-center justify-center gap-3 w-full h-full'>
                            <img src={page === 'home' ? item.url : item?.images[0]?.url} alt={page === 'home' ? 'Company Logos' : item?.images[0]?.alt} className={page === 'corporate' ? 'w-22 object-cover' : 'object-cover'} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TopCompanies;
