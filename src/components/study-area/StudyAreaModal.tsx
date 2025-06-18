"use client";
import React, { useState } from 'react';
import Modal from '../Modal';
import { useTranslations } from 'next-intl';

const StudyAreaModal = ({ study, model }: any) => {
    const t = useTranslations('study-area')
    const [flag, setFlag] = useState<boolean>(false);
    return (
        <>
            <button onClick={() => setFlag(!flag)} className={`px-8 cursor-pointer font-semibold  py-2.5 rounded-full ${model ? 'text-black bg-white' : 'text-[#141414] bg-[#1818181A]'}`}>{t('apply')}</button>
            <Modal flag={flag} setFlag={setFlag} study={study} />
        </>
    );
};

export default StudyAreaModal;