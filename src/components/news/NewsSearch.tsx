"use client";

import { useTranslations } from "use-intl";

const NewsSearch = () => {
    let search: string = ''
    const handleChange = (e: string) => {
        search = e
        console.log(search);
        
    }
    const t = useTranslations();
    return (
        <div className='md:py-13 md:px-9 md:bg-white mb-30 md:mt-20 mt-6 rounded-2xl md:flex items-center justify-between'>
            <p className='lg:w-1/4 md:w-1/3 w-full text-[#212121] text-2xl md:text-[38px] md:mb-0 mb-7 font-bold'>{t('news.search.title')}</p>
            <div className='lg:w-2/5 md:w-1/2 w-full h-12 px-4 border border-[#909090] rounded-[20px] md:rounded-[30px] relative'>
                <input onChange={(e) => handleChange(e.target.value)} type="text" placeholder={t('news.search.placeholder')} className='text-[#909090] outline-none h-full w-full rounded-[20px]' />
                <img className='absolute top-1/2 -translate-y-1/2 right-6' src='/assets/img/search.svg' alt="News search icon" />
            </div>
            <img className='lg:block hidden' src="/assets/img/news-icon.svg" alt="News search icon" />
        </div>
    );
};

export default NewsSearch;