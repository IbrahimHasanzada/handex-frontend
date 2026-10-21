export const dynamic = 'force-dynamic';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import { getGeneral, getStudyAreas } from '@/service';
import { baseUrl } from '@/utils/url';
import React from 'react';

export async function generateMetadata() {
    return {
        title: 'Korporativ təlimlər üçün əlaqə – Handex',
        description: 'Şirkətiniz üçün korporativ təlim təklifi almaq istəyirsiniz? Formu doldurun, Handex komandası sizinlə əlaqə saxlasın.',
        alternates: {
            canonical: `${baseUrl}/korporativ/elaqe`,
        },
    };
}

const page = async () => {
    const [data, study] = await Promise.all([getGeneral(), getStudyAreas('corporate')]);
    return (
        <div className='wrapper pt-45'>
            <h1 className='text-[40px] font-bold text-white'>Bizimlə əlaqə</h1>
            <p className='mt-3 text-[#909090] max-w-150'>Komandanızın inkişafına ilk addımı atın. Formu doldurun, ehtiyaclarınıza uyğun korporativ təlim proqramlarını müzakirə etmək üçün sizinlə əlaqə saxlayaq.</p>
            <ContactInfo data={data} dark />
            <ContactForm corporate study={Array.isArray(study) ? study : []} />
        </div>
    );
};

export default page;
