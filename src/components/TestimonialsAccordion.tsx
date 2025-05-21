"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, FreeMode, EffectFade } from 'swiper/modules';
import { TestimonialsDto } from '@/types/Testimonials.dto';
import { SwiperOptions } from 'swiper/types';

const TestimonialsAccordion: React.FC<TestimonialsDto> = ({ page, data, start }) => {
    let a: SwiperOptions
    if (!data.length) return <div>Loading...</div>

    return (
        <div className={`relative ${page !== 'corporate' ? 'linear-slider' : ''}`}>
            <Swiper
                key={data.length}
                spaceBetween={32}
                initialSlide={start}
                direction={page === "corporate" ? "vertical" : "horizontal"}
                loop={page !== 'corporate' && true}
                slidesPerView={page !== 'corporate' ? 1 : 2}
                breakpoints={
                    page == 'corporate' ? undefined :
                        {
                            520: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                            1280: {
                                slidesPerView: 4,
                            }
                        }
                }
                effect={page === 'corporate' ? "slide" : undefined}
                autoplay={{
                    delay: page === 'corporate' ? 1500 : 0,
                    disableOnInteraction: false,
                    waitForTransition: true,
                    pauseOnMouseEnter: true
                }}
                speed={page === 'corporate' ? 2000 : 4000}
                modules={[Autoplay, FreeMode, EffectFade]}
                className={`${page === 'corporate' ? 'h-100' : 'h-75'} transition ease-linear duration-300 `}
            >
                {data.map((item: any, index: number) => (
                    <SwiperSlide
                        className={`relative !flex justify-center items-center ${page !== 'corporate' ? (index % 2 ? 'rotate-5 max-w-90' : '-rotate-5 max-w-90') : index % 2 ? '' : '!h-[268px]'}`}
                        key={item.id || index}
                    >
                        <div className={`${page === 'corporate' && '!h-full'} border-1 w-90 bg-white border-[#DDD] rounded-[20px] p-6 h-auto`}>
                            <div className={`flex flex-col !px-6`}>
                                <div className='flex justify-between pb-4 border-b border-b-[#DDD]'>
                                    <div className='flex items-center gap-4.5'>
                                        <img
                                            src={item.customer_profile?.url}
                                            alt={item.name}
                                            className='rounded-full size-17 w-[68px] h-[68px] object-cover'
                                            loading='lazy'
                                            width={68}
                                            height={68}
                                        />
                                        <div>
                                            <p className='text-sm font-semibold'>{item.name}</p>
                                            <p className='text-xs'>{item.bank_name}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img
                                            src={item.bank_logo?.url}
                                            className='md:size-12 !size-10 object-contain w-[40px] h-[40px]'
                                            alt={`${item.bank_name} logo`}
                                            loading='lazy'
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                </div>
                                <div className='mt-2.5 flex-grow overflow-y-auto' style={{ minHeight: '120px' }}>
                                    <p className='text-sm line-clamp-5 break-words'>{item.comment}</p>
                                </div>
                            </div>
                        </div>
                        <div className={page === 'corporate' ? (index % 2 ? 'absolute -bottom-10 -left-3 -right-3 h-15 z-3 bg-[#282828] blur-[12px]' : 'hidden') : 'hidden'}></div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonialsAccordion;