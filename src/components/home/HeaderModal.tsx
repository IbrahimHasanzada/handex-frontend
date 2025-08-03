"use client";
import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';
import { useTranslations } from 'next-intl';
import toast from 'react-hot-toast';
import { addConsultation } from '@/service';
import Modal from '../Modal';
import { useWindowSize } from '@/utils/useWindowSize';

interface HeaderModalProps {
    theme?: string;
    study: any;
}

const HeaderModal: React.FC<HeaderModalProps> = ({ theme = 'home', study }) => {
    const t = useTranslations('header');
    const [flag, setFlag] = useState<boolean>(false);
    const { width } = useWindowSize()
    return (
        <>
            <div onClick={() => setFlag(!flag)} className='h-full'>
                <Button className='!rounded-full' theme={theme === 'dark'} flag={false} link=''>
                    {theme === 'dark' ? 'Müraciət et' : (width > 768 ? 'Ödənişsiz konsultasiya' : "Müraciət et")}
                </Button>
            </div>
            <Modal page={theme} study={study} flag={flag} setFlag={setFlag} />
        </>
    );
};

export default HeaderModal;