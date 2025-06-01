"use client";
import React from 'react';

const Top = () => {
    const handleClick = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    return (
        <div onClick={() => handleClick()} className='size-22 cursor-pointer rounded-full bg-[#E8E8E8] ml-2 flex justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M24 10V38" stroke="#141414" strokeWidth="2.125" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.998 20L24 9.99805L34.002 20" stroke="#141414" strokeWidth="2.125" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
};

export default Top;