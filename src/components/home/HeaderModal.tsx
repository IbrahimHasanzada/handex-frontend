"use client";
import { getTranslations } from 'next-intl/server';
import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';
import { useTranslations } from 'next-intl';
import toast from 'react-hot-toast';
import { addConsultation } from '@/service';

interface HeaderModalProps {
    theme?: string;
}

const HeaderModal: React.FC<HeaderModalProps> = ({ theme }) => {
    const t = useTranslations('header');
    const form: { name: string, placeholder: string; }[] = t.raw('modal.form');
    const [flag, setFlag] = useState<boolean>(false);
    const [messages, setMessages] = useState({
        name: '',
        surname: '',
        phone: '',
        course: ''
    });

    const handleClick = async () => {
        let data = await addConsultation(messages);

        if (data.error) toast.error(data.message);
        else toast.success(t('modal.success'));
        setMessages({
            name: '',
            surname: '',
            phone: '',
            course: ''
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
            <div onClick={() => setFlag(!flag)} className='h-full'>
                <Button theme={theme === 'dark'} flag={false} link=''>
                    {t('consultation')}
                </Button>
            </div>
            <div onClick={() => setFlag(!flag)} className={`${flag ? 'block' : 'hidden'} z-40 top-0 left-0 opacity-50 fixed w-screen h-screen bg-black`}></div>
            <div className={`bg-white z-50 px-17 w-158 ${flag ? 'block' : 'hidden'} rounded-[20px] py-8 text-center fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}>
                <div onClick={() => setFlag(!flag)}>
                    <svg className='absolute top-8 right-8 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M1 18.9985L19 0.998474" stroke="#DDDDDD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19 18.9985L1 0.998474" stroke="#DDDDDD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <h2 className='mb-6 text-[34px] font-bold'>{t('modal.title')}</h2>
                <img className='mb-10 mx-auto' src="/assets/img/modal-icon.svg" alt="Modal icon" />
                {form.map((item, i) => (
                    <input value={messages[item.name as keyof typeof messages] || ''} onChange={(e) => handleChange(e.target.value, item.name)} key={i} className='w-full my-3 px-4 text-base text-[#909090] h-12 outline-none rounded-[20px] border border-[#909090]' placeholder={item.placeholder} type='text' />
                ))}
                <button onClick={() => handleClick()} className='mt-10 w-51 h-12 rounded-full bg-[#323232] text-white'>{t('modal.button')}</button>
            </div>
        </>
    );
};

export default HeaderModal;