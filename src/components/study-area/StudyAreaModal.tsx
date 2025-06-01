"use client";
import React, { useState } from 'react';
import Modal from '../Modal';
import { useTranslations } from 'next-intl';

const StudyAreaModal = ({ study }: any) => {
    const t = useTranslations('study-area')
    const [flag, setFlag] = useState<boolean>(false);
    return (
        <>
            <button onClick={() => setFlag(!flag)} className='px-8 cursor-pointer font-semibold text-[#141414] py-2.5 bg-[#1818181A] rounded-full'>{t('apply')}</button>
            <Modal flag={flag} setFlag={setFlag} study={study} />
        </>
    );
};

export default StudyAreaModal;