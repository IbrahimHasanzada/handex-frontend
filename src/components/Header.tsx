"use client"
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import Button from './ui/Button'

const Header = () => {
  const headerLists = [
    { title: 'Haqqımızda', subItems: ['Haqqımızda', 'Xidmətlərimiz', 'Layihələrimiz', 'Xəbərlər', 'Bloqlar'] },
    { title: 'Tədris sahələri', subItems: ['Proqramlaşdırma', 'UX/UI Dizayn', 'Marketinq', 'Data Analitika', 'Süni İntellekt'] }
  ]
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const t = useTranslations();

  return (
    <header className="relative">
      <div className='wrapper base:bg-transparent bg-white  fixed left-0 right-0 z-50'>
        <div className='base:px-6 w-full  rounded-b-[20px] base:border border-[#DDD] base:bg-white h-25 flex items-center justify-between base:shadow-md'>
          <div className='relative flex items-center'>
            <Image src='/assets/img/handex_logo.png' alt='Handex Logo' quality={100} sizes='100%' width={128} height={40} className='w-32 h-10' />
          </div>
          <div className='hidden base:block'>
            <div className='flex items-center gap-18'>
              <ul className='flex gap-6'>
                {headerLists.map(({ title, subItems }, index) => (
                  <li
                    key={index}
                    className={`group relative cursor-pointer flex z-50 py-3`}
                    onMouseEnter={() => setActiveMenu(`menu${index}`)}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <p className='  group-hover:border-b border-b-primary-corporate text-sm lg:text-base'>{title}</p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 10L12 14L16 10" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <div className={`absolute z-50 top-13 ${activeMenu === `menu${index}` ? 'block' : 'hidden'} pt-5`}>
                      <ul className='flex flex-col gap-4 py-6 px-8 bg-primary-bg rounded-[20px]'>
                        {subItems.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}

                <li className='group cursor-pointer py-3'>
                  <p className=' group-hover:border-b border-b-primary-corporate'>Korporativ</p>
                </li>
                <li className='group cursor-pointer py-3'>
                  <p className=' group-hover:border-b border-b-primary-corporate'>Əlaqə</p>
                </li>
              </ul>
              <div className='flex gap-4'>
                <select name="" id="" className='py-1'>
                  <option value="az">AZ</option>
                </select>
                <div className='h-12 w-40 text-sm lg:text-base lg:w-60'>
                  <Button link=''>
                    Ödənişsiz konsultasiya
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-8 h-8 block base:hidden'>
            <button>
              <Image src='/assets/img/menu-burger-square.svg' alt='Handex burger menu icon' width={32} height={32} sizes='100%' quality={100} />
            </button>
          </div>
        </div>
        <div
          className={`fixed inset-0 bg-black/50 z-20 pointer-events-none transition-opacity duration-200 ${activeMenu ? 'opacity-100' : 'opacity-0'}`}
        ></div>
      </div>
    </header>
  )
}

export default Header
