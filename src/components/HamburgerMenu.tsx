"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [flag, setFlag] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setFlag(!flag)} className='cursor-pointer'>
        <Image
          src='/assets/img/menu-burger-square.svg'
          alt='Handex burger menu icon'
          width={32}
          height={32}
          sizes='100%'
          quality={100}
        />
      </button>
      <div onClick={() => setFlag(!flag)} className={`top-0 left-0 ${flag ? 'fixed' : 'hidden'} z-100 w-screen h-screen bg-black opacity-50`}></div>
      <div className={`fixed ${flag ? 'translate-x-0' : 'translate-x-full'} right-0 h-screen w-1/2 z-9000 bg-white`}>

      </div>
    </>
  );
};

export default HamburgerMenu;