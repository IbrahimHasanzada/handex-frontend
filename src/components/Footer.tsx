import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  const studyArea = ['Microsoft Excel', 'Data Analitika', 'Power BI', 'Oracle SQL', 'Mose (MO-211)', 'PL-300 (PBDAA)', 'Satış strategiyası (Data Əsaslı)', '1Z0 - 071']
  const about = [
    { "name": "Haqqımızda", "link": "#" },
    { "name": "Xidmətlərimiz", "link": "#" },
    { "name": "Layihələrimiz", "link": "#" },
    { "name": "Bloq", "link": "#" },
    { "name": "Xəbərlər", "link": "#" },
  ]
  return (
    <footer className='wrapper py-16'>
      <div className='bg-white rounded-[20px] border border-[#DDD] overflow-hidden'>
        <div className='flex flex-col md:flex-row px-6 py-6 md:py-13'>
          <div className='flex-1/3 flex justify-center md:justify-baseline pb-7 md:pb-0'>
            <Image src='/assets/img/handex_logo.png' alt='Handex Logo' quality={100} sizes='100%' width={128} height={40} className='w-32 h-10' />
            <div></div>
          </div>
          <div className=' flex-2/3  '>
            <div className='flex justify-between md:justify-baseline pb-12'>
              <div className='md:flex-2/4 md:order-3'>
                <h2 className='text-[#909090] text-xs font-medium md:font-bold md:border-b border-b-[#DDD] md:pb-4'>Tedris saheleri</h2>
                <ul className='flex flex-col gap-1 pt-5 md:pt-8'>
                  {studyArea.map((item, index) =>
                    <li className='text-sm md:text-base'>{item}</li>
                  )}
                </ul>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 md:flex-row md:flex-2/4'>
                <div className='md:order-1'>
                  <h2 className='text-[#909090] text-xs font-medium md:font-bold md:border-b border-b-[#DDD] md:pb-4'>Haqqimizda</h2>
                  <ul className='flex flex-col gap-1 pt-5 md:pt-8'>
                    {about.map((item, index) => (
                      <li className='text-sm md:text-base' key={index}>{item.name}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className='text-[#909090] text-xs font-medium md:font-bold md:border-b border-b-[#DDD] md:pb-4'>Sayt</h2>
                  <ul className='flex flex-col gap-1 pt-5 md:pt-8'>
                    <li className='text-sm md:text-base'>Haqqımızda</li>
                    <li className='text-sm md:text-base'>Korporativ</li>
                    <li className='text-sm md:text-base'>Əlaqə</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-2'>
              <div>
                <div className='flex gap-11'>
                  <div>
                    <p className='text-[#909090] text-xs font-bold'>ƏLAQƏ NÖMRƏSİ</p>
                    <p className='text-sm md:text-base'>+994 50 604 58 54</p>
                  </div>
                  <div>
                    <p className='text-[#909090] text-xs font-bold'>E-POÇT</p>
                    <p className='text-sm md:text-base'>contact@handex.az</p>
                  </div>
                </div>
                <div className='pt-4'>
                  <p className='text-[#909090] text-xs font-bold'>ÜNVAN</p>
                  <p className='text-sm md:text-base'>Nizami küç. 203b, AF Business House (4-cü mərtəbə)</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className='w-full bg-gray-900/10 flex justify-between py-4 px-6'>
          <p className='text-xs'>© 2025. Bütün hüquqlar qorunur.</p>
          <p className='text-xs'>Məxfilik</p>
        </div>
      </div>
    </footer >
  )
}

export default Footer
