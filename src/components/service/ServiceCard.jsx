import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

const ServiceCard = (params) => {
    const locale = useLocale();
    const { item } = params;
    const t = useTranslations();
    return (
        <Link
            href={`/${locale}/service/${item.slug}`}
            className='flex md:flex-row flex-col bg-white box-shadow rounded-[20px] w-full overflow-hidden'
        >
            <div className='md:w-1/2 w-full md:h-[316px] h-[200px]'>
                <img
                    className='w-full h-full object-cover'
                    src={item?.image?.url}
                    alt={item?.image?.alt}
                />
            </div>
            <div className='p-4 md:w-1/2 w-full flex flex-col justify-between'>
                <div>
                    <h2 className='md:text-2xl text-sm font-bold line-clamp-2 mb-3'>{item.title}</h2>
                    <div
                        className='
                         text-[#666] text-xs font-normal line-clamp-2 mb-3
                         [&_p]:inline
                         [&_a]:inline [&_a]:text-xs [&_a]:font-normal [&_a]:text-[#0070f3]
                         [&_h1]:inline [&_h1]:text-xs [&_h1]:font-normal [&_h1]:mb-0
                         [&_h2]:inline [&_h2]:text-xs [&_h2]:font-normal [&_h2]:mb-0
                         [&_h3]:inline [&_h3]:text-xs [&_h3]:font-normal [&_h3]:mb-0
                         [&_h4]:inline [&_h4]:text-xs [&_h4]:font-normal [&_h4]:mb-0
                         [&_h5]:inline [&_h5]:text-xs [&_h5]:font-normal [&_h5]:mb-0
                         [&_h6]:inline [&_h6]:text-xs [&_h6]:font-normal [&_h6]:mb-0'
                        dangerouslySetInnerHTML={{ __html: item.description || '' }}
                    />
                </div>
                <div className='mt-6 flex items-center gap-2 cursor-pointer'>
                    <p className='text-[#141414] font-bold text-base leading-[30px]'>
                        {t('news.card.more')}
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path d="M10.9004 16.1L14.9004 12.1L10.9004 8.09998" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </Link>
    );
};

export default ServiceCard;