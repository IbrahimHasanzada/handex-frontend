"use client";
import React from 'react';

const Top = ({ theme }: any) => {
    const handleClick = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    return (
        <div onClick={() => handleClick()} className={`${theme ? 'bg-[#e7e7e733]' : 'bg-[#E8E8E8]'} size-22 cursor-pointer rounded-full  ml-2 flex justify-center items-center`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M24 10V38" stroke={theme ? '#fff' : '#141414'} strokeWidth="2.125" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.998 20L24 9.99805L34.002 20" stroke={theme ? '#fff' : '#141414'} strokeWidth="2.125" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
};

export default Top;