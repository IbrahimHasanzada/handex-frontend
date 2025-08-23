"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, FreeMode, EffectFade } from 'swiper/modules';
import { TestimonialsDto } from '@/types/Testimonials.dto';
import { SwiperOptions } from 'swiper/types';
import ModalUsers from './ModalUsers';
import { useState } from 'react';
import Image from 'next/image';

const TestimonialsAccordion: React.FC<TestimonialsDto> = ({ page, data, start, index }) => {
    const [flag, setFlag] = useState(0)
    const [student, setStudent] = useState()
    let a: SwiperOptions
    if (!data.length) return <div>Loading...</div>

    const handleOpenModal = (item: any) => {
        setFlag(1)
        setStudent(item)
    }


    return (
        <div className={`relative ${page !== 'corporate' ? 'linear-slider' : ''}`}>
            <Swiper
                key={data.length}
                spaceBetween={page === 'corporate' ? 5 : 32}
                initialSlide={start}
                direction={page === "corporate" ? "vertical" : "horizontal"}
                loop={page !== 'corporate' && true}
                slidesPerView={page !== 'corporate' ? 1 : 'auto'}
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
                                slidesPerView: 5,
                            }
                        }
                }
                effect={page === 'corporate' ? "slide" : undefined}
                autoplay={{
                    delay: page === 'corporate' ? 1500 : 0,
                    disableOnInteraction: false,
                    waitForTransition: true,
                }}
                allowTouchMove={false}
                speed={page === 'corporate' ? 2000 : 4000}
                modules={[Autoplay, FreeMode, EffectFade]}
                className={`${page === 'corporate' ? 'h-120' : 'h-75'}  transition ease-linear duration-300 `}
            >
                {data.map((item: any, index: number) => (
                    <SwiperSlide
                        id={`${item.name}-testimonials`}
                        onClick={() => handleOpenModal(item)}
                        className={`relative !flex justify-center items-center py-5 ${page !== 'corporate' ? (index % 2 ? 'rotate-5 max-w-180 md:max-w-90' : '-rotate-5 max-w-180 md:max-w-90') : index % 2 ? '!h-auto' : '!h-[268px]'}`}
                        key={item.id || index}
                    >
                        <div className={`${page === 'corporate' ? 'bg-[#181818] border-[#2B2B2B] text-white' : 'bg-white border-[#DDD]'} border-1 w-full md:w-90   rounded-[20px] p-6 h-auto`}>
                            <div className={`flex flex-col !px-6`}>
                                <div className={`${page === 'corporate' ? 'border-b-[#2B2B2B]' : 'border-b-[#DDD]'} flex justify-between pb-4 border-b `}>
                                    <div className='flex items-center gap-4.5'>
                                        <Image
                                            src={item.customer_profile?.url}
                                            alt={item.name}
                                            className='rounded-full size-17 w-[68px] h-[68px] object-cover'
                                            loading='lazy'
                                            width={68}
                                            height={68}
                                        />
                                        <div>
                                            <p className='text-sm font-semibold'>{item.name}</p>
                                            {item.bank_name != 'HANDEX' && <p className='text-xs'>{item.bank_name}</p>}
                                        </div>
                                    </div>
                                    <div>
                                        {item.bank_name != 'HANDEX' && <Image
                                            src={item.bank_logo?.url}
                                            className='md:size-12 !size-10 object-contain w-[40px] h-[40px]'
                                            alt={`${item.bank_name} logo`}
                                            loading='lazy'
                                            width={40}
                                            height={40}
                                        />}
                                    </div>
                                </div>
                                <div className='mt-2.5 flex-grow overflow-y-auto' style={{ minHeight: '120px' }}>
                                    <p className='text-sm font-light line-clamp-5 break-words'>{item.comment}</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className={page === 'corporate' ? (index % 2 !== 1 ? 'absolute top-60 -left-5 -right-5 h-25 z-3 bg-[#282828] blur-[12px]' : '') : 'hidden'}></div> */}
                    </SwiperSlide>
                ))}
            </Swiper>

            {flag ? <ModalUsers setFlag={setFlag} flag={flag} student={student} model={page === 'corporate' ? true : false} /> : undefined}
        </div>
    );
};

export default TestimonialsAccordion;