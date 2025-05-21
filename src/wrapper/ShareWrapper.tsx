"use client"
import dynamic from 'next/dynamic';
import React from 'react';

const Share = dynamic(() => import('@/components/Share'), { ssr: false });

const ShareWrapper = () => {
    return (<Share />);
};

export default ShareWrapper;