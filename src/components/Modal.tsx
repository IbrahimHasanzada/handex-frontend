"use client";
import { addConsultation, getStudyAreas } from '@/service';
import { useWindowSize } from '@/utils/useWindowSize';
import { useLocale, useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Modal = ({ flag, setFlag, study, page = 'home' }: any) => {
        const { width } = useWindowSize();
    const t = useTranslations('header');
    const locale = useLocale();

    const regEx = /^[\d+]*$/;

    let form: { name: string, placeholder: string; }[] = t.raw('modal.form');
    form = page === 'home' 
    ? form.filter((_, index) => index !== 3 && index !== 4)
    : form;
    const [messages, setMessages] = useState({
        name: '',
        surname: '',
        phone: '',
        company: '',
        email: '',
        course: 0
    });

    const handleClick = async () => {
        if(page !== 'home' && !messages.company) return toast.error('Şirkət adı boş ola bilməz');
        if(page !== 'home' && !messages.email) return  toast.error('Email boş ola bilməz');
        if(!messages.phone) return toast.error('Telefon boş ola bilməz');

        const message = page === 'home' ? { ...messages, email: undefined, company: undefined } : messages;
        let data = await addConsultation(message, locale);
        if (data.error) toast.error(Array.isArray(data.message) ? data.message[0] : data.message);
        else toast.success(t('modal.success'));
        if (!data.error) {
            setMessages({
                name: '',
                surname: '',
                company: '',
                email: '',
                phone: '',
                course: 0
            });
        }
    };

    const handleChange = (e: string, name: string) => {
        if (name === 'phone') {
            regEx.test(e) && setMessages({
                ...messages,
                phone: e
            });
        } else {
            setMessages({
                ...messages,
                [name]: e
            });
        }

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
            <div className={`${page === 'home' ? 'bg-white' : 'bg-[#181818]'} z-106 px-7 overflow-y-auto md:px-14 w-[90%] md:w-140 ${flag ? 'block' : 'hidden'} rounded-[20px] py-14 text-center fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}>
            { width > 768 && <img className='mb-6 mx-auto' src="/assets/img/contact (1).webp" alt="Modal icon" /> }
                <div onClick={() => setFlag(!flag)}>
                    <svg className='absolute top-8 right-8 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M1 18.9985L19 0.998474" stroke="#DDDDDD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19 18.9985L1 0.998474" stroke="#DDDDDD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <p className={`${page === 'home' ? 'text-[#141414]' : 'text-white'} mb-4 text-[34px] font-bold`}>{ page === 'home' ? t('modal.title') : 'Təklif al'}</p>
                {form.map((item, i) => (
                    i + 1 !== form.length && <input value={messages[item.name as keyof typeof messages] || ''} onChange={(e) => handleChange(e.target.value, item.name)} key={i} className={`w-full ${page === 'home' ? 'text-[#909090] border-[#909090]' : 'text-white border-white'} my-3 px-4 text-base h-12 outline-none rounded-[20px] border`} placeholder={item.placeholder} type='text' />
                ))}
                <div className='relative'>
                    <svg className='absolute top-1/2 -translate-y-1/2 right-3' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path className={`${page === 'home' ? 'stroke-[#141414]' : 'stroke-white'}`} d="M8 9.99997L12 14L16 9.99997" stroke="#141414" strokeWidth="1.24435" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <select className={`w-full ${page === 'home' ? 'text-[#909090] border-[#909090]' : 'text-white border-white'} appearance-none my-3 px-4 text-base h-12 outline-none rounded-[20px] border`} onChange={(e) => handleChange(e.target.value, form[form.length - 1].name)}>
                        <option className='text-[#141414]' value={0}>{t('study-area')}</option>
                        {study?.map((item: any, i: number) => (
                            <option className='text-[#141414]' value={item.id} key={i}>{item.name}</option>
                        ))}
                    </select>
                </div>
                <button onClick={() => handleClick()} className='mt-8 w-full md:w-51 h-12 rounded-full bg-[#323232] text-white'>{t('modal.button')}</button>
            </div>
        </>
    );
};

export default Modal;