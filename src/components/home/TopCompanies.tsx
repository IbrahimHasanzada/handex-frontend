"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const shuffle = <T,>(arr: T[]): T[] => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

const TopCompanies: React.FC<{ page: string, index: number, data: any, sliderIndex: number, initialSlide: number }> = ({ page, index, data, sliderIndex, initialSlide }) => {
    const [items, setItems] = useState<any[]>(() => (Array.isArray(data) ? data : []));

    useEffect(() => {
        if (Array.isArray(data) && data.length > 0) {
            setItems(shuffle(data));
        } else if (Array.isArray(data)) {
            setItems(data);
        }
    }, [data]);

    const createSlides = (data: any[]) => {
        if (!data) return [];
        return data;
    };
    return (
        <div className={`linear-slider ${page === 'corporate' && 'mt-6'}`} style={{ WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)' }}>
            <Swiper
                breakpoints={{
                    520: { slidesPerView: 4 },
                    992: { slidesPerView: 5 },
                    1280: { slidesPerView: 7 }

                }}
                spaceBetween={page === 'corporate' ? 24 : 62}
                initialSlide={initialSlide}
                key={index}
                freeMode={true}
                loop={true}
                slidesPerView={3}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false
                }}
                allowTouchMove={false}
                dir={sliderIndex % 2 ? "rtl" : 'ltr'}
                centerInsufficientSlides={true}
                observer={true}
                observeParents={true}
                loopAdditionalSlides={page === 'corporate' && items.length > 0 ? 7 : undefined}
                speed={sliderIndex % 2 ? 3000 : 4000}
                modules={[Autoplay]}
                watchSlidesProgress={true}>
                {items && items.length && createSlides(items).map((item: any, index: number) => (
                    <SwiperSlide className={page === 'corporate' ? 'bg-white !w-auto rounded-[20px] !h-15 md:!h-19 px-4' : 'bg-transparent h-36 w-36'} key={`slide-${index}`}>
                        <div className='flex items-center justify-center gap-3 w-full h-full'>
                            <img loading='lazy' src={page === 'home' ? item.url : item?.images[0]?.url} alt={page === 'home' ? 'Company Logos' : item?.images[0]?.alt} className={page === 'corporate' ? 'w-15 md:!w-22 object-cover' : ''} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TopCompanies;