export const dynamic = 'force-dynamic';
import ContactForm from '@/components/contact/ContactForm';
import { getGeneral, getMeta } from '@/service';
import ContactInfo from '@/components/contact/ContactInfo';
import { baseUrl } from '@/utils/url';
import React from 'react';

export async function generateMetadata({ params }: any) {

    const canonicalUrl = `${baseUrl}/elaqe`;
    let meta: any = {};


    return {
        title: 'Handex ilə əlaqə – Suallarınız üçün bizimlə əlaqə saxlayın.',
        description: 'Handex təlim mərkəzi ilə əlaqə qurmaq üçün formu doldurun və ya bizə birbaşa yazın. Sual və müraciətlərinizi cavablandırmaq üçün buradayıq. Əlaqə saxla!',
        alternates: {
            canonical: canonicalUrl,
        },
    };

}



const page = async () => {
    const data = await getGeneral();
    return (
        <div className='wrapper pt-45'>
            <h1 className='text-[40px] font-bold'>Bizimlə əlaqə</h1>
            <ContactInfo data={data} />
            <ContactForm />
        </div>
    );
};

export default page;