"use client";
import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';
import { useTranslations } from 'next-intl';
import Modal from '../Modal';

const HeroModal = ({ page, study }: any) => {
    const t = useTranslations('home');
    const [flag, setFlag] = useState<boolean>(false);
    return (
        <>
            <div className='h-12' onClick={() => setFlag(!flag)}>
                <Button theme={page === 'corporate' ? true : false} flag={true} link='' >
                    <div className='flex items-center justify-center mt-3 h-full'>
                        {t("headSection.button")}
                    </div>
                </Button>
            </div>
            <Modal flag={flag} setFlag={setFlag} study={study} page={page} />
        </>
    );
};

export default HeroModal;