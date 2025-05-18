import ImageCollage from '@/components/about/ImageCollage';
import { getAbout } from '@/service';
import React from 'react';

const AboutPage = async () => {
    const about: any = await getAbout();
    console.log(about);

    return (
        <div className="wrapper w-full pt-30">
            <div className='relative'>
                <ImageCollage images={about.images} />
            </div>
            <div className='base:mt-30'>
                {about.sections.map((item: any, index: number) => (
                    <div key={index} className={`mt-30 grid md:grid-cols-2 justify-between gap-7 base:gap-33 flex-col  ${index % 2 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                        <div className='flex-1/2 rounded-[20px]'>
                            {item?.left_side?.type === 'image' ? (
                                <img src={item?.left_side?.url} alt='' className='object-cover h-full w-full rounded-[20px]' />
                            ) : (
                                <div dangerouslySetInnerHTML={{__html: item?.left_side?.translations[0]?.value}}></div>
                            )}
                        </div>
                        <div className='flex-1/2 rounded-[20px]'>
                            {item?.right_side?.type === 'image' ? (
                                <img src={item?.right_side?.url} alt='' className='object-cover h-full w-full rounded-[20px]' />
                            ) : (
                                <div dangerouslySetInnerHTML={{__html: item?.right_side?.translations[0]?.value}}></div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default AboutPage;