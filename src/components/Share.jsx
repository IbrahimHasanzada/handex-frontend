"use client";
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import { FacebookShareButton, InstapaperShareButton, LinkedinShareButton, TelegramShareButton } from 'react-share';

const Share = () => {
    const [shareUrl, setShareUrl] = useState('');
    useEffect(() => {
        setShareUrl(window.location.href);
    }, []);

    const t = useTranslations();

    return (
        <div className='w-max rounded-[48px] flex gap-4 items-center justify-center bg-white py-2 px-6'>
            <p className='text-lg text-[#141414]'>{t('news.details.share')}</p>
            <div className='flex gap-2'>
                <InstapaperShareButton url={shareUrl}>
                    <div className='size-10 cursor-pointer rounded-full bg-[#E8E8E8] flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.996 3H17.005C19.487 3 21.5 5.012 21.5 7.496V16.505C21.5 18.987 19.488 21 17.004 21H7.996C5.513 21 3.5 18.988 3.5 16.504V7.496C3.5 5.013 5.512 3 7.996 3V3Z" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17.449 6.71304C17.263 6.71404 17.112 6.86504 17.112 7.05104C17.112 7.23704 17.264 7.38804 17.45 7.38804C17.636 7.38804 17.787 7.23704 17.787 7.05104C17.788 6.86404 17.636 6.71304 17.449 6.71304" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15.0455 9.45444C16.4514 10.8603 16.4514 13.1397 15.0455 14.5456C13.6396 15.9515 11.3602 15.9515 9.95432 14.5456C8.54843 13.1397 8.54843 10.8603 9.95432 9.45444C11.3602 8.04855 13.6396 8.04855 15.0455 9.45444" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </InstapaperShareButton>
                <FacebookShareButton url={shareUrl}>
                    <div className='size-10 cursor-pointer rounded-full bg-[#E8E8E8] flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="20" viewBox="0 0 13 20" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8 12H10.7498C10.9792 12 11.1792 11.8439 11.2348 11.6213L11.9848 8.62127C12.0222 8.4719 11.9886 8.31365 11.8939 8.1923C11.7991 8.07094 11.6537 8 11.4998 8H8V6C8 5.44772 8.44772 5 9 5H11.5C11.7761 5 12 4.77614 12 4.5V1.5C12 1.22386 11.7761 1 11.5 1H9C6.23858 1 4 3.23858 4 6V8H1.5C1.22386 8 1 8.22386 1 8.5V11.5C1 11.7761 1.22386 12 1.5 12H4V18.5C4 18.7761 4.22386 19 4.5 19H7.5C7.77614 19 8 18.7761 8 18.5V12Z" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </FacebookShareButton>

                <LinkedinShareButton url={shareUrl}>
                    <div className='size-10 cursor-pointer rounded-full bg-[#E8E8E8] flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8 3H17.004C19.487 3 21.5 5.013 21.5 7.496V16.505C21.5 18.987 19.487 21 17.004 21H7.996C5.513 21 3.5 18.987 3.5 16.504V7.5C3.5 5.015 5.515 3 8 3V3Z" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.62012 11.1V16.5" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.219 16.5V13.35C12.219 12.107 13.226 11.1 14.469 11.1V11.1C15.712 11.1 16.719 12.107 16.719 13.35V16.5" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.6179 7.83799C8.4939 7.83799 8.3929 7.93899 8.3939 8.06299C8.3939 8.18699 8.4949 8.28799 8.6189 8.28799C8.7429 8.28799 8.8439 8.18699 8.8439 8.06299C8.8439 7.93799 8.7429 7.83799 8.6179 7.83799" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </LinkedinShareButton>
                <TelegramShareButton url={shareUrl}>
                    <div className='size-10 cursor-pointer rounded-full bg-[#E8E8E8] flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M22.083 6.37299C21.854 5.36899 21.176 4.57699 20.314 4.30499C18.755 3.81799 12.5 3.81799 12.5 3.81799C12.5 3.81799 6.248 3.81799 4.686 4.30499C3.827 4.57299 3.149 5.36499 2.917 6.37299C2.5 8.19499 2.5 12 2.5 12C2.5 12 2.5 15.805 2.917 17.627C3.146 18.631 3.824 19.423 4.686 19.695C6.248 20.182 12.5 20.182 12.5 20.182C12.5 20.182 18.755 20.182 20.314 19.695C21.173 19.427 21.851 18.635 22.083 17.627C22.5 15.805 22.5 12 22.5 12C22.5 12 22.5 8.19499 22.083 6.37299Z" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.502 15L15.698 12L10.502 9V15Z" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </TelegramShareButton>
            </div>
        </div>
    );
};

export default Share;