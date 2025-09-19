"use client";
import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';
import Modal from '../Modal';

const HeroModal = ({ page, study }: any) => {

    // const t = useTranslations('home');
    const [flag, setFlag] = useState<boolean>(false);
    return (
        <>
            <div className='h-12' onClick={() => setFlag(!flag)}>
                <Button id="hero-modal" theme={page === 'corporate' ? true : false} flag={true} link='' >
                        Keçid et
                </Button>
            </div>
            <Modal flag={flag} setFlag={setFlag} study={study} page={page} />
        </>
    );
};

export default HeroModal;