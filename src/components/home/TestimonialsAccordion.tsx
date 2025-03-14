"use client"
import Image from 'next/image'
import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const TestimonialsAccordion = () => {
    const testAcc = [
        { costumerImg: "/assets/img/testimon.jpg", compImg: "/assets/img/pasha.png", name: "Asya Memmedova", compName: "Pasha Bank", description: "This is a difficult, vivid, heartbreaking, beautiful read. So worth investing some time to go through slowly. Footman is one to watch." },
        { costumerImg: "/assets/img/testimon.jpg", compImg: "/assets/img/pasha.png", name: "Asya Memmedova", compName: "Pasha Bank", description: "This is a difficult, vivid, heartbreaking, beautiful read. So worth investing some time to go through slowly. Footman is one to watch." },
        { costumerImg: "/assets/img/testimon.jpg", compImg: "/assets/img/pasha.png", name: "Asya Memmedova", compName: "Pasha Bank", description: "This is a difficult, vivid, heartbreaking, beautiful read. So worth investing some time to go through slowly. Footman is one to watch." },
        { costumerImg: "/assets/img/testimon.jpg", compImg: "/assets/img/pasha.png", name: "Asya Memmedova", compName: "Pasha Bank", description: "This is a difficult, vivid, heartbreaking, beautiful read. So worth investing some time to go through slowly. Footman is one to watch." },
        { costumerImg: "/assets/img/testimon.jpg", compImg: "/assets/img/pasha.png", name: "Asya Memmedova", compName: "Pasha Bank", description: "This is a difficult, vivid, heartbreaking, beautiful read. So worth investing some time to go through slowly. Footman is one to watch." },
        { costumerImg: "/assets/img/testimon.jpg", compImg: "/assets/img/pasha.png", name: "Asya Memmedova", compName: "Pasha Bank", description: "This is a difficult, vivid, heartbreaking, beautiful read. So worth investing some time to go through slowly. Footman is one to watch." },
    ]
    return (
        <div className='linear-slider'>
            <Swiper
                spaceBetween={32}
                freeMode={true}
                loop={true}
                slidesPerView={4}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                centerInsufficientSlides={true}
                speed={3000}
                modules={[Autoplay]}
                className='h-75 transition ease-linear duration-300'
            >
                {testAcc.map((item, index) => (

                    <SwiperSlide className={`!flex justify-center items-center ${index % 2 ? 'rotate-5' : '-rotate-5'}`} key={index}>
                        <div className=' border-1 bg-white border-[#DDD] rounded-[20px] p-6'>
                            <div className='flex justify-between pb-4 border-b border-b-[#DDD]'>
                                <div className='flex items-center gap-4.5'>
                                    <Image src={item.costumerImg} alt='' width={80} height={80} className='rounded-full' />
                                    <div>
                                        <p className='text-sm font-semibold'>{item.name}</p>
                                        <p className='text-xs'>{item.compName}</p>
                                    </div>
                                </div>
                                <div>
                                    <Image src={item.compImg} alt='' width={48} height={48} />
                                </div>
                            </div>
                            <div className='mt-2.5'>
                                <p className='text-sm'>{item.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    )
}

export default TestimonialsAccordion
