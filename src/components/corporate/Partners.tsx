import React from 'react';
import PartnersClient from './PartnersClient';
import { getContent } from '@/service';
import { getTranslations } from 'next-intl/server';

const Partners: React.FC<{ page: string }> = async ({ page }) => {
    const data = await getContent('partners');
    const t = await getTranslations('corporate');

    const title = t('corporatePartnersTitle');
    const description = t('corporatePartnersDescription');

    return (
        <PartnersClient
            data={data}
            title={title} 
            description={description} 
            page={page}
        />
    );
};

export default Partners;
