"use client";
import NewsCard from '@/components/news/NewsCard';
import { getAllNews, getCustomers } from '@/service';
import { useLocale, useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

const page = () => {
  let t = useTranslations();
  const local = useLocale();

  let [news, setNews] = useState();

  let [count, setCount] = useState(0);
  let [total, setTotal] = useState(0);
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      let data = await getAllNews(local);
      
      setNews(data.data);
      setTotal(data.totalItems);
    }
    getData();
  }, []);

  const handlePagination = async () => {
    setLoading(true);
    let nextPage = count + 1;
    let extraNews = await getAllNews(local, nextPage);
    console.log(nextPage, extraNews);
    setNews(prev => [...prev, ...extraNews.data]);
    setCount(nextPage);
    setLoading(false);
  };

  const handleChange = async (e) => {
    let data = await getAllNews(local, count, e);

    setNews(data.data);
  };

  return (
    <div className='wrapper pt-30'>
      <div className='md:py-13 md:px-9 md:bg-white mb-30 md:mt-20 mt-6 rounded-2xl md:flex items-center justify-between'>
        <p className='lg:w-1/4 md:w-1/3 w-full text-[#212121] text-2xl md:text-[38px] md:mb-0 mb-7 font-bold'>{t('news.search.title')}</p>
        <div className='lg:w-2/5 md:w-1/2 w-full h-12 px-4 border border-[#909090] rounded-[20px] md:rounded-[30px] relative'>
          <input onChange={(e) => handleChange(e.target.value)} type="text" placeholder={t('news.search.placeholder')} className='text-[#909090] outline-none h-full w-full rounded-[20px]' />
          <img className='absolute top-1/2 -translate-y-1/2 right-6' src='/assets/img/search.svg' alt="News search icon" />
        </div>
        <img className='lg:block hidden' src="/assets/img/news-icon.svg" alt="News search icon" />
      </div>
      <div className='w-full grid gap-6 md:grid-cols-3 lg:grid-cols-4'>
        {news?.map((item, i) => (
          <NewsCard item={item} key={i} />
        ))}
      </div>
      {total > (count + 1) * 12 && (
        <button onClick={() => handlePagination()} className='flex bg-handle-gray mx-auto rounded-full items-center px-6 gap-2 h-12 my-15'>
          <p className='text-base'>{loading ? 'Loading' : 'Daha çox'}</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M8.5 10L12.5 14L16.5 10" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default page;