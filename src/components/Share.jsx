"use client";
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { FacebookShareButton, LinkedinShareButton, TelegramShareButton, WhatsappShareButton } from 'react-share';

const Share = () => {
    const [shareUrl, setShareUrl] = useState();

    useEffect(() => {
        setShareUrl(location.href);
    }, []);

    const t = useTranslations();

    return (
        <div className='w-max rounded-[48px] flex gap-4 items-center justify-center bg-white py-2 px-6'>
            <p className='text-lg text-[#141414]'>{t('news.details.share')}</p>
            <div className='flex gap-2'>
                <WhatsappShareButton url={shareUrl}>
                    <div className='size-10 cursor-pointer rounded-full bg-[#E8E8E8] flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path fillRule="evenodd" clipRrule="evenodd" d="M18.7041 5.76205C17.0581 4.11505 14.8691 3.20705 12.5371 3.20605C7.73014 3.20605 3.81914 7.11505 3.81814 11.9201C3.81614 13.4491 4.21714 14.9521 4.98114 16.2771L3.74414 20.7931L8.36614 19.5811C9.64514 20.2771 11.0771 20.6421 12.5331 20.6421H12.5371C17.3421 20.6421 21.2531 16.7321 21.2551 11.9271C21.2561 9.59905 20.3501 7.41005 18.7041 5.76205Z" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.5947 13.56L14.0007 13.157C14.3737 12.787 14.9637 12.74 15.3937 13.042C15.8097 13.334 16.1857 13.596 16.5357 13.84C17.0917 14.226 17.1587 15.018 16.6797 15.496L16.3207 15.855" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.64551 8.17902L9.00451 7.82002C9.48251 7.34202 10.2745 7.40902 10.6605 7.96402C10.9035 8.31402 11.1655 8.69002 11.4585 9.10602C11.7605 9.53602 11.7145 10.126 11.3435 10.499L10.9405 10.905" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16.3207 15.855C14.8397 17.329 12.3507 16.077 10.3857 14.111" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.3881 14.1141C8.42307 12.1481 7.17107 9.66008 8.64507 8.17908" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.9404 10.905C11.2594 11.408 11.6684 11.906 12.1304 12.368L12.1324 12.37C12.5944 12.832 13.0924 13.241 13.5954 13.56" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </WhatsappShareButton>
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
                            <path d="M12.295 16.906L10.23 18.915C9.87195 19.263 9.27295 19.109 9.12795 18.631L7.75195 14.101" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.6043 10.927C14.6043 10.927 12.0153 13.263 10.6873 14.462C10.2903 14.82 10.3233 15.45 10.7533 15.767L16.1313 19.74C16.6603 20.131 17.4163 19.844 17.5533 19.2L20.1943 6.75299C20.3223 6.15099 19.7313 5.64799 19.1573 5.86899L3.64232 11.853C3.18532 12.029 3.20732 12.682 3.67432 12.828L7.75132 14.1" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </TelegramShareButton>
            </div>
        </div>
    );
};

export default Share;