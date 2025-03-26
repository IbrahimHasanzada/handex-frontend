"use client"
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const UserSlider = () => {
  const userSlider = [
    { img: "leyla.png", name: "Leyla Əfəndiyeva", course: "Oracle  SQL" },
    { img: "leyla.png", name: "Leyla Əfəndiyeva", course: "Oracle  SQL" },
    { img: "leyla.png", name: "Leyla Əfəndiyeva", course: "Oracle  SQL" },
    { img: "leyla.png", name: "Leyla Əfəndiyeva", course: "Oracle  SQL" },
    { img: "leyla.png", name: "Leyla Əfəndiyeva", course: "Oracle  SQL" },
    { img: "leyla.png", name: "Leyla Əfəndiyeva", course: "Oracle  SQL" },
    { img: "leyla.png", name: "Leyla Əfəndiyeva", course: "Oracle  SQL" },
    { img: "leyla.png", name: "Leyla Əfəndiyeva", course: "Oracle  SQL" },
    { img: "leyla.png", name: "Leyla Əfəndiyeva", course: "Oracle  SQL" }
  ]
  const [isBeginning, setIsBeginning] = useState(false)
  return (
    <div className='relative'>
      <div className="navigation-buttons absolute left-0 right-0 flex justify-center space-x-2 z-10 -bottom-30">
        <button className={`overflow-hidden group swiper-button-prev-custom rounded-full w-20 h-20 flex items-center justify-center  ${!isBeginning ? 'bg-gradient-to-r from-[rgba(24,24,24,0.1)] to-[rgba(24,24,24,0.1)]' : 'bg-black rounded-full'}`}>
          <svg className='group-hover:translate-x-4.5 duration-300 translate-x-24 rotate-90' width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 10L12 14L16 10" stroke={`${!isBeginning ? 'black' : 'white'}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg className='-translate-x-5 group-hover:-translate-x-24 duration-300 rotate-90' width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 10L12 14L16 10" stroke={`${!isBeginning ? 'black' : 'white'}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className={`overflow-hidden group swiper-button-next-custom rounded-full w-20 h-20 flex items-center justify-center ${isBeginning ? 'bg-gradient-to-r from-[rgba(24,24,24,0.1)] to-[rgba(24,24,24,0.1)] ' : 'bg-black rounded-full'}`}>
          <svg className='group-hover:translate-x-24 duration-300 translate-x-5 -rotate-90' width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 10L12 14L16 10" stroke={`${isBeginning ? 'black' : 'white'}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg className='-translate-x-24 group-hover:-translate-x-5 duration-300 -rotate-90' width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 10L12 14L16 10" stroke={`${isBeginning ? 'black' : 'white'}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <Swiper
        breakpoints={{
          520: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 24
          }

        }}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        modules={[Navigation]}
        onReachBeginning={() => setIsBeginning(false)}
        onReachEnd={() => setIsBeginning(true)}
        className='h-90 transition ease-linear duration-300 relative'
      >
        {userSlider.map((item, index) => (
          <SwiperSlide key={index} className='group relative !h-90 rounded-[20px] overflow-hidden'>
            <div className=' w-full h-full relative'>
              <Image src={`/assets/img/${item.img}`} alt='Handex education slider images' fill className='object-cover group-hover:scale-120 duration-500' />
            </div>
            <div style={{
              background: 'linear-gradient(rgba(232, 232, 232, 0.2), rgba(231, 231, 231, 0.2))',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(50px)'
            }} className='h-14 px-6 pt-1 rounded-[50px] absolute left-6 bottom-6  w-[80%] text-white'>
              <p className='font-bold'>{item.name}</p>
              <p className='text-sm'>{item.course}</p>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  )
}

export default UserSlider
