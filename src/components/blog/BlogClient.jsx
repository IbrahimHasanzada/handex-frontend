"use client";
import BlogCard from '@/components/blog/BlogCard';
import { getAllBlogs } from '@/service';
import { useLocale, useTranslations } from 'next-intl';
import { getLocale } from 'next-intl/server';
import React, { useEffect, useState } from 'react';

const page = () => {
  const lang = useLocale();
  let t = useTranslations();
  const local = useLocale();

  let [blog, setBlog] = useState();
  

  let [count, setCount] = useState(0);

  let [total, setTotal] = useState(0);
  console.log(total);
  
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      let data = await getAllBlogs(local);

      setBlog(data.data);
      setTotal(data.totalItems);
    }
    getData();
  }, []);

  const handlePagination = async () => {
    setLoading(true);
    let nextPage = count + 1;
    let extraBlog = await getAllBlogs(lang, nextPage);
    setBlog(prev => [...prev, ...extraBlog.data]);
    setCount(nextPage);
    setLoading(false);
  };

  const handleChange = async (e) => {
    let data = await getAllBlogs(local, count, e);

    setBlog(data.data);
  };

  return (
    <div className='wrapper pt-30'>
      <div className='md:py-13 md:px-9 md:bg-white mb-30 md:mt-20 mt-6 rounded-2xl md:flex items-center justify-between'>
        <p className='lg:w-1/5 md:w-1/3 w-full text-[#212121] text-2xl md:text-[38px] md:mb-0 mb-7 font-bold'>{t('blog.search.title')}</p>
        <div className='lg:w-2/5 md:w-1/2 w-full h-12 px-4 border border-[#909090] rounded-[20px] md:rounded-[30px] relative'>
          <input onChange={(e) => handleChange(e.target.value)} type="text" placeholder={t('blog.search.placeholder')} className='text-[#909090] outline-none h-full w-full rounded-[20px]' />
          <img className='absolute top-1/2 -translate-y-1/2 right-6' src='/assets/img/search.svg' alt="Blog search icon" />
        </div>
        <img className='lg:block hidden' src="/assets/img/blog-search.svg" alt="Blog search icon" />
      </div>
      <div className='w-full grid gap-6 md:grid-cols-3 lg:grid-cols-4'>
        {blog?.map((item, i) => (
          <BlogCard item={item} key={i} />
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