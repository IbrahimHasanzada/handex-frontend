"use client";
import React, { useState } from 'react';
import Modal from '../Modal';

const StudyAreaModal = ({ study, model }: any) => {
    const [flag, setFlag] = useState<boolean>(false);
    return (
        <>
            <button id='study-area-modal' onClick={() => setFlag(!flag)} className={`px-8 cursor-pointer mt-8 font-semibold  py-2.5 rounded-full ${model ? 'text-black bg-white' : 'text-[#141414] bg-[#1818181A]'}`}>Müraciət et</button>
            <Modal flag={flag} setFlag={setFlag} study={study} />
        </>
    );
};

export default StudyAreaModal;