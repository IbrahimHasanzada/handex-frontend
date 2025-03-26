"use client"
import Image from 'next/image'
import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const TopCompanies = () => {
    const companies = ['unibank.png', 'unibank.png', 'unibank.png', 'unibank.png', 'unibank.png', 'unibank.png', 'unibank.png', 'unibank.png']
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
                {companies.map((item: string, index: number) => (
                    <SwiperSlide>
                        <div className='relative h-38 w-38'>
                            <Image src={`/assets/img/${item}`} alt='Handex mezunlar islediyi sirketler' fill className='object-cover' />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default TopCompanies
