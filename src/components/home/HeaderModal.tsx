"use client";
import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';
import { useTranslations } from 'next-intl';
import toast from 'react-hot-toast';
import { addConsultation } from '@/service';
import Modal from '../Modal';

interface HeaderModalProps {
    theme?: string;
    study: any
}

const HeaderModal: React.FC<HeaderModalProps> = ({ theme, study }) => {
    const t = useTranslations('header');
    const [flag, setFlag] = useState<boolean>(false);
    return (
        <>
            <div onClick={() => setFlag(!flag)} className='h-full'>
                <Button theme={theme === 'dark'} flag={false} link=''>
                    {t('consultation')}
                </Button>
            </div>
            <Modal study={study} flag={flag} setFlag={setFlag} />
        </>
    );
};

export default HeaderModal;