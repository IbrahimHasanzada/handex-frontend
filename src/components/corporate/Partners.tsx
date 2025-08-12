import React from 'react';
import PartnersClient from './PartnersClient';
import { getContent } from '@/service';
import { getTranslations } from 'next-intl/server';

const Partners: React.FC<{ page: string }> = async ({ page }) => {
    const data = await getContent('partners');
    // const t = await getTranslations('corporate');

    const title = "Korporativ Tərəfdaşlar"
    const description = "Güvənə əsaslanan korporativ tərəfdaşlıqlarımızla, dəyərləri birləşdirərək gələcəyin həllərini formalaşdırırıq."

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
