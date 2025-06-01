"use client"
import { addConsultation, getStudyAreas } from '@/service';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Modal = ({ flag, setFlag, study }: any) => {
    const t = useTranslations('header');

    const form: { name: string, placeholder: string; }[] = t.raw('modal.form');
    const [messages, setMessages] = useState({
        name: '',
        surname: '',
        phone: '',
        course: 0
    });

    const handleClick = async () => {
        let data = await addConsultation(messages);

        if (data.error) toast.error(data.message);
        else toast.success(t('modal.success'));
        setMessages({
            name: '',
            surname: '',
            phone: '',
            course: 0
        });
    };

    const handleChange = (e: string, name: string) => {
        setMessages({
            ...messages,
            [name]: e
        });
    };

    useEffect(() => {
        if (flag) {
            const originalStyle = document.body.style.overflow;

            document.body.style.overflow = 'hidden';

            return () => {
                document.body.style.overflow = originalStyle;
            };
        }
    }, [flag]);
    return (
        <>
            <div onClick={() => setFlag(!flag)} className={`${flag ? 'block' : 'hidden'} z-105 top-0 left-0 opacity-50 fixed w-screen h-screen bg-black`}></div>
            <div className={`bg-white z-106 px-4 overflow-y-auto md:px-17 w-[90%] md:w-158 ${flag ? 'block' : 'hidden'} rounded-[20px] py-8 text-center fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}>
                <div onClick={() => setFlag(!flag)}>
                    <svg className='absolute top-8 right-8 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M1 18.9985L19 0.998474" stroke="#DDDDDD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19 18.9985L1 0.998474" stroke="#DDDDDD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <h2 className='mb-6 text-[34px] font-bold'>{t('modal.title')}</h2>
                <img className='mb-10 mx-auto md:block hidden' src="/assets/img/modal-icon.svg" alt="Modal icon" />
                {form.map((item, i) => (
                    i + 1 !== form.length && <input value={messages[item.name as keyof typeof messages] || ''} onChange={(e) => handleChange(e.target.value, item.name)} key={i} className='w-full my-3 px-4 text-base text-[#909090] h-12 outline-none rounded-[20px] border border-[#909090]' placeholder={item.placeholder} type='text' />
                ))}
                <select className='w-full my-3 px-4 text-base text-[#909090] h-12 outline-none rounded-[20px] border border-[#909090]' onChange={(e) => handleChange(e.target.value, form[form.length - 1].name)}>
                    <option value={0}>{t('study-area')}</option>
                    {study?.map((item: any, i: number) => (
                        <option value={item.id} key={i}>{item.name}</option>
                    ))}
                </select>
                <button onClick={() => handleClick()} className='mt-10 w-full md:w-51 h-12 rounded-full bg-[#323232] text-white'>{t('modal.button')}</button>
            </div>
        </>
    );
};

export default Modal;