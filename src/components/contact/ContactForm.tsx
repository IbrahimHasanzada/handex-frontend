"use client";
import { addContact } from '@/service';
import { ContactInputsDto } from '@/types/contact.dto';
import { useLocale, useTranslations } from 'next-intl';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const ContactForm = () => {
    const t = useTranslations();
    const inputs: ContactInputsDto[] = t.raw('contact.inputs');
    const textarea: ContactInputsDto = t.raw('contact.textarea');
    const locale = useLocale();

    const regEx = /^[\d+]*$/;

    const [form, setForm] = useState<any>({
        name: '',
        email: '',
        phone: '',
        title: '',
        message: ''
    });


    const handleChange = (e: any, name: string) => {
        if (name === 'phone') {
            regEx.test(e) && setForm({
                ...form,
                phone: e
            });
        } else setForm({ ...form, [name]: e });
    };

    const handleClick = async () => {
        let result = await addContact({
            full_name: form.name,
            email: form.email,
            phone: form.phone,
            title: form.title,
            message: form.message
        }, locale);

        if (!result.error) toast.success(t('header.modal.success'));
        else toast.error(Array.isArray(result.message) ? result.message[0] : result.message);
    };
    return (
        <div className='bg-white rounded-[20px] py-16 px-9 mt-9 box-shadow grid md:grid-cols-2' >
            <div>
                <div className='grid md:grid-cols-2 gap-4 w-full'>
                    {inputs?.map((item, i) => (
                        <div key={i} className='w-full'>
                            <label className='block mb-1'>{item.label}</label>
                            {item.type !== 'textarea' && (
                                <input value={form[item.name as keyof typeof form] || ''} onChange={(e: any) => handleChange(e.target.value, item.name)} className='py-2.5 px-4 w-full rounded-[20px] border border-[#909090] outline-none' type={item.type} placeholder={item.placeholder} />
                            )}
                        </div>
                    ))}
                </div>
                <div className='mt-6'>
                    <label className='block mb-1'>{textarea.label}</label>
                    <textarea onChange={(e) => handleChange(e.target.value, 'message')} className='py-2.5 px-4 h-40 w-full rounded-[20px] border border-[#909090] outline-none' placeholder={textarea.placeholder}></textarea>
                </div>
                <button onClick={() => handleClick()} className='mt-19 md:w-auto w-full px-8 rounded-full py-3 bg-[#1818181A]'>{t('contact.send')}</button>
            </div>
            <div className='md:ml-30 md:mt-0 mt-8'>
                <iframe className='rounded-[20px] w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.41787074395!2d49.851465412187444!3d40.37743037132686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307df1224c72af%3A0xe8a74dd0d6a8cf13!2sHandex!5e0!3m2!1saz!2saz!4v1747217743032!5m2!1saz!2saz" loading="lazy"></iframe>
            </div>
        </ div>
    );
};

export default ContactForm;