"use client";
import { addContact } from '@/service';
import { ContactInputsDto } from '@/types/contact.dto';
import { useRef, useState } from 'react';
import { isSuccessResponse, splitFullName, trackLead } from '@/utils/track-lead';
import toast from 'react-hot-toast';

const emptyForm = {
    name: '',
    company: '',
    email: '',
    phone: '',
    title: '',
    message: ''
};

const ContactForm = ({ corporate = false, study = [] }: { corporate?: boolean; study?: any[] }) => {
    const inputs: ContactInputsDto[] = corporate ? [
        {
            "label": "Ad və Soyad",
            "placeholder": "Ad və Soyadınızı daxil edin",
            "name": "name",
            "type": "text"
        },
        {
            "label": "Şirkət adı",
            "placeholder": "Şirkətin adını daxil edin",
            "name": "company",
            "type": "text"
        },
        {
            "label": "Email",
            "name": "email",
            "placeholder": "Korporativ emailinizi daxil edin",
            "type": "email"
        },
        {
            "label": "Telefon nömrəsi",
            "name": "phone",
            "placeholder": "Telefon nömrənizi daxil edin",
            "type": "text"
        }
    ] : [
        {
            "label": "Ad və Soyad",
            "placeholder": "Ad və Soyadınızı daxil edin",
            "name": "name",
            "type": "text"
        },
        {
            "label": "Email",
            "name": "email",
            "placeholder": "Emailinizi daxil edin",
            "type": "email"
        },
        {
            "label": "Telefon nömrəsi",
            "name": "phone",
            "placeholder": "Telefon nömrənizi daxil edin",
            "type": "text"
        },
        {
            "label": "Başlıq",
            "name": "title",
            "placeholder": "Başlıq daxil edin",
            "type": "text"
        }
    ]

    const textarea: ContactInputsDto = {
        "label": "Mesaj",
        "name": "message",
        "placeholder": corporate ? "Komandanızın ehtiyaclarını, iştirakçı sayını və s. qeyd edin" : "Mesaj daxil edin",
        "type": "textarea"
    }
    const regEx = /^[\d+]*$/;

    const [form, setForm] = useState<any>(emptyForm);


    const handleChange = (e: any, name: string) => {
        if (name === 'phone') {
            regEx.test(e) && setForm({
                ...form,
                phone: e
            });
        } else setForm({ ...form, [name]: e });
    };

    const [submitting, setSubmitting] = useState(false);
    const submittingRef = useRef(false);

    const handleClick = async () => {
        if (submittingRef.current) return;
        if (corporate && !form.company.trim()) return toast.error('Şirkət adı boş ola bilməz');
        if (corporate && !form.title) return toast.error('Təklif almaq istədiyiniz təlimi seçin');

        submittingRef.current = true;
        setSubmitting(true);
        let result = await addContact({
            full_name: form.name,
            email: form.email,
            phone: form.phone,
            title: form.title,
            message: form.message,
            ...(corporate && { company: form.company.trim(), type: 'corporate' })
        }, 'az');
        submittingRef.current = false;
        setSubmitting(false);

        if (isSuccessResponse(result)) {
            const { firstName, lastName } = splitFullName(form.name);
            trackLead({
                formName: corporate ? 'korporativ' : 'elaqe',
                course: corporate ? form.title : '',
                email: form.email,
                phone: form.phone,
                firstName,
                lastName,
            });
            toast.success("Mesaj uğurla göndərildi");
            setForm(emptyForm);
        }
        else toast.error(Array.isArray(result?.message) ? result.message[0] : (result?.message || 'Xəta baş verdi'));
    };

    const fieldClass = `py-2.5 px-4 w-full rounded-[20px] border outline-none ${corporate ? 'border-white/40 bg-transparent text-white placeholder:text-[#909090]' : 'border-[#909090]'}`;
    const labelClass = `block mb-1 ${corporate ? 'text-white' : ''}`;

    return (
        <div className={`${corporate ? 'bg-[#282828]' : 'bg-white box-shadow'} rounded-[20px] py-16 px-9 mt-9 grid md:grid-cols-2`} >
            <div>
                <div className='grid md:grid-cols-2 gap-4 w-full'>
                    {inputs?.map((item, i) => (
                        <div key={i} className='w-full'>
                            <label className={labelClass}>{item.label}</label>
                            {item.type !== 'textarea' && (
                                <input value={form[item.name as keyof typeof form] || ''} onChange={(e: any) => handleChange(e.target.value, item.name)} className={fieldClass} type={item.type} placeholder={item.placeholder} />
                            )}
                        </div>
                    ))}
                </div>
                {corporate && (
                    <div className='mt-4'>
                        <label className={labelClass}>Təklif almaq istədiyiniz təlim</label>
                        <div className='relative'>
                            <select
                                id='contact-corporate-training'
                                value={form.title}
                                onChange={(e) => handleChange(e.target.value, 'title')}
                                className={`${fieldClass} appearance-none pr-10 ${form.title ? '' : '!text-[#909090]'}`}
                            >
                                <option className='text-[#141414]' value=''>Təlimi seçin</option>
                                {study?.map((item: any) => (
                                    <option className='text-[#141414]' value={item.name} key={item.id}>{item.name}</option>
                                ))}
                                <option className='text-[#141414]' value='Digər'>Digər</option>
                            </select>
                            <svg className='absolute top-1/2 -translate-y-1/2 right-3 pointer-events-none' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M8 9.99997L12 14L16 9.99997" stroke="white" strokeWidth="1.24435" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                )}
                <div className='mt-6'>
                    <label className={labelClass}>{textarea.label}</label>
                    <textarea value={form[textarea.name as keyof typeof form] || ''} onChange={(e) => handleChange(e.target.value, 'message')} className={`${fieldClass} h-40`} placeholder={textarea.placeholder}></textarea>
                </div>
                <button id='handle-contact-form' disabled={submitting} onClick={() => handleClick()} className={`disabled:opacity-60 disabled:cursor-not-allowed mt-19 md:w-auto w-full px-8 rounded-full py-3 ${corporate ? 'bg-white text-black' : 'bg-[#1818181A]'}`}>Mesaj göndər</button>
            </div>
            <div className='md:ml-30 md:mt-0 mt-8'>
                <iframe className='rounded-[20px] w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.41787074395!2d49.851465412187444!3d40.37743037132686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307df1224c72af%3A0xe8a74dd0d6a8cf13!2sHandex!5e0!3m2!1saz!2saz!4v1747217743032!5m2!1saz!2saz" loading="lazy"></iframe>
            </div>
        </ div>
    );
};

export default ContactForm;
