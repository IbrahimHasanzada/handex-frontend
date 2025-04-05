"use client";
import { getGeneral } from '@/service';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const TopCompanies = () => {
    const [companies, setCompanies] = useState<any>();

    useEffect(() => {
        async function fetchData() {
            let result = await getGeneral('company');
            setCompanies(result);
        }
        fetchData();
    }, []);
    
    return (
        <div className='linear-slider'>
            <Swiper
                breakpoints={{
                    520: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    992: {
                        slidesPerView: 5,
                        spaceBetween: 20
                    },
                    1280: {
                        slidesPerView: 7,
                        spaceBetween: 24
                    }

                }}
                spaceBetween={16}
                initialSlide={0}
                key={companies ? 'loaded' : 'loading'}
                freeMode={true}
                loop={true}
                slidesPerView={2}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}

                centerInsufficientSlides={true}
                speed={3000}
                modules={[Autoplay]}>
                {companies && companies?.map((item: any, index: number) => (
                    <SwiperSlide key={index}>
                        <div className='relative h-38 w-38'>
                            <img src={item.url} alt='Handex mezunlar islediyi sirketler' className='object-cover size-38' />
                        </div>
                    </SwiperSlide>
                ))}
                {companies && companies?.map((item: any, index: number) => (
                    <SwiperSlide key={index}>
                        <div className='relative h-38 w-38'>
                            <img src={item.url} alt='Handex mezunlar islediyi sirketler' className='object-cover size-38' />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TopCompanies;
