"use client";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, FreeMode } from 'swiper/modules';
import { TestimonialsDto } from '@/types/Testimonials.dto';

const TestimonialsAccordion: React.FC<TestimonialsDto> = ({ page, data }) => {
    const [swiperReady, setSwiperReady] = useState(false);


    if (!data.length) return <div>Loading...</div>;

    return (
        <div className='linear-slider relative'>

            <Swiper
                key={swiperReady ? 'ready' : 'loading'}
                onAfterInit={() => setSwiperReady(true)}
                spaceBetween={32}
                freeMode={true}
                initialSlide={0}
                direction={page === "corporate" ? "vertical" : "horizontal"}
                loop={true}
                slidesPerView={1}
                breakpoints={
                    page == 'corporate' ? undefined :
                        {
                            520: { slidesPerView: 2, spaceBetween: 20 },
                            992: { slidesPerView: 3, spaceBetween: 20 },
                            1280: { slidesPerView: 4, spaceBetween: 24 }
                        }
                }
                effect={page === 'corporate' ? "fade" : undefined}
                fadeEffect={{ crossFade: true }}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    waitForTransition: true,
                }}
                centerInsufficientSlides={true}
                speed={page === 'corporate' ? 2500 : 3000}
                modules={[Autoplay, FreeMode]}
                className={`${page === 'corporate' ? 'h-67' : 'h-75'} transition ease-linear duration-300 `}
            >
                {data.map((item: any, index: number) => (
                    <SwiperSlide
                        className={`!flex justify-center items-center ${page !== 'corporate' ? (index % 2 ? 'rotate-5' : '-rotate-5') : '!h-[308px]'}`}
                        key={item.id || index}
                    >
                        <div className={`${page === 'corporate' && '!h-full'} border-1  bg-white border-[#DDD] rounded-[20px] p-6`}>
                            <div className='flex justify-between pb-4 border-b border-b-[#DDD]'>
                                <div className='flex items-center gap-4.5'>
                                    <img
                                        src={item.customer_profile?.url}
                                        alt={item.name}
                                        className='rounded-full size-17'
                                        loading='lazy'
                                    />
                                    <div>
                                        <p className='text-sm font-semibold'>{item.name}</p>
                                        <p className='text-xs'>{item.bank_name}</p>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src={item.bank_logo?.url}
                                        className='md:size-12 !size-10 object-contain'
                                        alt={`${item.bank_name} logo`}
                                        loading='lazy'
                                    />
                                </div>
                            </div>
                            <div className='mt-2.5'>
                                <p className='text-sm'>{item.comment}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    );
};

export default TestimonialsAccordion;