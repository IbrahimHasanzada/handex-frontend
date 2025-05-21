import Image from 'next/image'
import React from 'react'
const Footer = async ({ theme = '' }) => {
  const studyArea = ['Microsoft Excel', 'Data Analitika', 'Power BI', 'Oracle SQL', 'Mose (MO-211)', 'PL-300 (PBDAA)', 'Satış strategiyası (Data Əsaslı)', '1Z0 - 071']
  const about = [
    { "name": "Haqqımızda", "link": "#" },
    { "name": "Xidmətlərimiz", "link": "#" },
    { "name": "Layihələrimiz", "link": "#" },
    { "name": "Bloq", "link": "#" },
    { "name": "Xəbərlər", "link": "#" },
  ]


  const socialSection = [
    {
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M7.496 3H16.505C18.987 3 21 5.012 21 7.496V16.505C21 18.987 18.988 21 16.504 21H7.496C5.013 21 3 18.988 3 16.504V7.496C3 5.013 5.012 3 7.496 3V3Z" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16.9487 6.71279C16.7627 6.71379 16.6117 6.86479 16.6117 7.05079C16.6117 7.23679 16.7637 7.38779 16.9497 7.38779C17.1357 7.38779 17.2867 7.23679 17.2867 7.05079C17.2877 6.86379 17.1357 6.71279 16.9487 6.71279" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.546 9.45432C15.9519 10.8602 15.9519 13.1396 14.546 14.5455C13.1401 15.9514 10.8607 15.9514 9.45481 14.5455C8.04892 13.1396 8.04892 10.8602 9.45481 9.45432C10.8607 8.04843 13.1401 8.04843 14.546 9.45432" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>`, link: "#"
    },
    {
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 14 20" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M8.5 12H11.2498C11.4792 12 11.6792 11.8439 11.7348 11.6213L12.4848 8.62127C12.5222 8.4719 12.4886 8.31365 12.3939 8.1923C12.2991 8.07094 12.1537 8 11.9998 8H8.5V6C8.5 5.44772 8.94772 5 9.5 5H12C12.2761 5 12.5 4.77614 12.5 4.5V1.5C12.5 1.22386 12.2761 1 12 1H9.5C6.73858 1 4.5 3.23858 4.5 6V8H2C1.72386 8 1.5 8.22386 1.5 8.5V11.5C1.5 11.7761 1.72386 12 2 12H4.5V18.5C4.5 18.7761 4.72386 19 5 19H8C8.27614 19 8.5 18.7761 8.5 18.5V12Z" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>`, link: "#"
    },
    {
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M7.5 3H16.504C18.987 3 21 5.013 21 7.496V16.505C21 18.987 18.987 21 16.504 21H7.496C5.013 21 3 18.987 3 16.504V7.5C3 5.015 5.015 3 7.5 3V3Z" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.11914 11.1001V16.5001" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.7188 16.5001V13.3501C11.7188 12.1071 12.7257 11.1001 13.9688 11.1001V11.1001C15.2118 11.1001 16.2188 12.1071 16.2188 13.3501V16.5001" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.11814 7.83799C7.99414 7.83799 7.89314 7.93899 7.89414 8.06299C7.89414 8.18699 7.99514 8.28799 8.11914 8.28799C8.24314 8.28799 8.34414 8.18699 8.34414 8.06299C8.34414 7.93799 8.24314 7.83799 8.11814 7.83799" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>`, link: "#"
    },
    {
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M21.583 6.37287C21.354 5.36887 20.676 4.57687 19.814 4.30487C18.255 3.81787 12 3.81787 12 3.81787C12 3.81787 5.748 3.81787 4.186 4.30487C3.327 4.57287 2.649 5.36487 2.417 6.37287C2 8.19487 2 11.9999 2 11.9999C2 11.9999 2 15.8049 2.417 17.6269C2.646 18.6309 3.324 19.4229 4.186 19.6949C5.748 20.1819 12 20.1819 12 20.1819C12 20.1819 18.255 20.1819 19.814 19.6949C20.673 19.4269 21.351 18.6349 21.583 17.6269C22 15.8049 22 11.9999 22 11.9999C22 11.9999 22 8.19487 21.583 6.37287Z" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M10.002 15L15.198 12L10.002 9V15Z" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>`, link: "#"
    },
    {
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <path d="M24 10V38" stroke="#141414" strokeWidth="2.125" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13.998 20L24 9.99805L34.002 20" stroke="#141414" strokeWidth="2.125" strokeLinecap="round" strokeLinejoin="round"/>
</svg>`, link: "#"
    },
  ]
  // const phone = await getGeneral('phone');
  // const email = await getGeneral('email');
  // const location = await getGeneral('location');


  return (
    <footer className='wrapper py-16'>
      <div className={`${theme ? 'bg-[#2b2b2b]' : 'bg-white border border-[#DDD]'} box-shadow rounded-[20px] overflow-hidden`}>
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
                    <li key={index} className={`text-sm md:text-base ${theme ? 'text-white' : 'text-black'}`}>{item}</li>
                  )}
                </ul>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 md:flex-row md:flex-2/4'>
                <div className='md:order-1'>
                  <h2 className='text-[#909090] text-xs font-medium md:font-bold md:border-b border-b-[#DDD] md:pb-4'>Haqqimizda</h2>
                  <ul className='flex flex-col gap-1 pt-5 md:pt-8'>
                    {about.map((item, index) => (
                      <li className={`text-sm md:text-base ${theme ? 'text-white' : 'text-black'}`} key={index}>{item.name}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className='text-[#909090] text-xs font-medium md:font-bold md:border-b border-b-[#DDD] md:pb-4'>Sayt</h2>
                  <ul className='flex flex-col gap-1 pt-5 md:pt-8'>
                    <li className={`text-sm md:text-base ${theme ? 'text-white' : 'text-black'}`}>Haqqımızda</li>
                    <li className={`text-sm md:text-base ${theme ? 'text-white' : 'text-black'}`}>Korporativ</li>
                    <li className={`text-sm md:text-base ${theme ? 'text-white' : 'text-black'}`}>Əlaqə</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-2'>
              <div>
                <div className='flex gap-11'>
                  <div>
                    <p className='text-[#909090] text-xs font-bold'>ƏLAQƏ NÖMRƏSİ</p>
                    {/* <p className={`text-sm md:text-base ${theme ? 'text-white' : 'text-black'}`}>{phone[0]}</p> */}
                  </div>
                  <div>
                    <p className='text-[#909090] text-xs font-bold'>E-POÇT</p>
                    {/* <p className={`text-sm md:text-base ${theme ? 'text-white' : 'text-black'}`}>{email}</p> */}
                  </div>
                </div>
                <div className='pt-4'>
                  <p className='text-[#909090] text-xs font-bold'>ÜNVAN</p>
                  {/* <p className={`text-sm md:text-base ${theme ? 'text-white' : 'text-black'}`}>{location}</p> */}
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className='w-full bg-gray-900/10 flex justify-between py-4 px-6'>
          <p className={`text-xs ${theme ? 'text-white' : 'text-black'}`}>© 2025. Bütün hüquqlar qorunur.</p>
          <p className={`text-xs ${theme ? 'text-white' : 'text-black'}`}>Məxfilik</p>
        </div>
      </div>
    </footer >
  )
}

export default Footer
