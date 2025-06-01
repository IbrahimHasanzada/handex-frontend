"use client";
import { getProfiles } from '@/service';
import React, { useEffect, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Instructors = () => {
    // const [students, setStudents] = useState<any>();
    // useEffect(() => {
    //     async function getData() {
    //         let result = await getProfiles('student');

    //         result && setStudents(result);
    //     }
    //     getData();
    // }, []);

    const students = [
        {
            name: 'Leyla Əfəndiyeva',
            id: 1,
            image: {
                url: '/assets/profile.svg'
            },
            speciality: 'Oracle  SQL',
            description: 'Lorem ipsum dolor sit amet consectetur. Elit a in ultricies enim magnis consectetur suspendisse. Nisl cursus imperdiet egestas sapien. Adipiscing gravida nisl mauris tellus tellus non risus sem. Egestas id vel ipsum luctus. At tincidunt suscipit iaculis sagittis lorem pellentesque non nulla. Eget morbi tellus euismod duis tellus consectetur eu praesent lorem. Pretium commodo diam libero odio tristique tellus. Nibh magna et faucibus turpis mollis. Venenatis bibendum leo lacus sit sit odio elementum urna. Lorem ipsum dolor sit amet consectetur. Eu lorem senectus massa molestie egestas lobortis sit. Sit vel sed quam in sagittis aliquam felis orci. Vel massa a purus eu id eget ut odio sem. Phasellus nibh eu tincidunt nunc tristique. At mattis faucibus quis etiam viverra pretium enim dictumst. Quam mauris praesent tortor congue ac pulvinar magna a nibh. Sit sed vel et lectus. Quis sed viverra nunc et morbi. Eget urna ut vel rhoncus turpis sit eleifend. Lorem ipsum dolor sit amet consectetur. Faucibus est gravida bibendum lorem lorem lacus tincidunt consectetur. Ut libero ac scelerisque enim pellentesque vel pretium varius massa. Posuere purus volutpat at lobortis duis. Molestie ut mauris sollicitudin at. Cras vel facilisi volutpat maecenas. Ac nibh egestas blandit scelerisque morbi. Laoreet vitae eu tortor eu. In risus donec quis eget ut non maecenas lorem. Purus quam accumsan neque faucibus sollicitudin semper.'
        },
        {
            name: 'Leyla Əfəndiyeva',
            id: 2,
            image: {
                url: '/assets/profile.svg'
            },
            speciality: 'Oracle  SQL',
            description: 'Lorem ipsum dolor sit amet consectetur. Elit a in ultricies enim magnis consectetur suspendisse. Nisl cursus imperdiet egestas sapien. Adipiscing gravida nisl mauris tellus tellus non risus sem. Egestas id vel ipsum luctus. At tincidunt suscipit iaculis sagittis lorem pellentesque non nulla. Eget morbi tellus euismod duis tellus consectetur eu praesent lorem. Pretium commodo diam libero odio tristique tellus. Nibh magna et faucibus turpis mollis. Venenatis bibendum leo lacus sit sit odio elementum urna. Lorem ipsum dolor sit amet consectetur. Eu lorem senectus massa molestie egestas lobortis sit. Sit vel sed quam in sagittis aliquam felis orci. Vel massa a purus eu id eget ut odio sem. Phasellus nibh eu tincidunt nunc tristique. At mattis faucibus quis etiam viverra pretium enim dictumst. Quam mauris praesent tortor congue ac pulvinar magna a nibh. Sit sed vel et lectus. Quis sed viverra nunc et morbi. Eget urna ut vel rhoncus turpis sit eleifend. Lorem ipsum dolor sit amet consectetur. Faucibus est gravida bibendum lorem lorem lacus tincidunt consectetur. Ut libero ac scelerisque enim pellentesque vel pretium varius massa. Posuere purus volutpat at lobortis duis. Molestie ut mauris sollicitudin at. Cras vel facilisi volutpat maecenas. Ac nibh egestas blandit scelerisque morbi. Laoreet vitae eu tortor eu. In risus donec quis eget ut non maecenas lorem. Purus quam accumsan neque faucibus sollicitudin semper.'
        },
        {
            name: 'Leyla Əfəndiyeva',
            id: 3,
            image: {
                url: '/assets/profile.svg'
            },
            speciality: 'Oracle  SQL',
            description: 'Lorem ipsum dolor sit amet consectetur. Elit a in ultricies enim magnis consectetur suspendisse. Nisl cursus imperdiet egestas sapien. Adipiscing gravida nisl mauris tellus tellus non risus sem. Egestas id vel ipsum luctus. At tincidunt suscipit iaculis sagittis lorem pellentesque non nulla. Eget morbi tellus euismod duis tellus consectetur eu praesent lorem. Pretium commodo diam libero odio tristique tellus. Nibh magna et faucibus turpis mollis. Venenatis bibendum leo lacus sit sit odio elementum urna. Lorem ipsum dolor sit amet consectetur. Eu lorem senectus massa molestie egestas lobortis sit. Sit vel sed quam in sagittis aliquam felis orci. Vel massa a purus eu id eget ut odio sem. Phasellus nibh eu tincidunt nunc tristique. At mattis faucibus quis etiam viverra pretium enim dictumst. Quam mauris praesent tortor congue ac pulvinar magna a nibh. Sit sed vel et lectus. Quis sed viverra nunc et morbi. Eget urna ut vel rhoncus turpis sit eleifend. Lorem ipsum dolor sit amet consectetur. Faucibus est gravida bibendum lorem lorem lacus tincidunt consectetur. Ut libero ac scelerisque enim pellentesque vel pretium varius massa. Posuere purus volutpat at lobortis duis. Molestie ut mauris sollicitudin at. Cras vel facilisi volutpat maecenas. Ac nibh egestas blandit scelerisque morbi. Laoreet vitae eu tortor eu. In risus donec quis eget ut non maecenas lorem. Purus quam accumsan neque faucibus sollicitudin semper.'
        },
        {
            name: 'Leyla Əfəndiyeva',
            id: 4,
            image: {
                url: '/assets/profile.svg'
            },
            speciality: 'Oracle  SQL',
            description: 'Lorem ipsum dolor sit amet consectetur. Elit a in ultricies enim magnis consectetur suspendisse. Nisl cursus imperdiet egestas sapien. Adipiscing gravida nisl mauris tellus tellus non risus sem. Egestas id vel ipsum luctus. At tincidunt suscipit iaculis sagittis lorem pellentesque non nulla. Eget morbi tellus euismod duis tellus consectetur eu praesent lorem. Pretium commodo diam libero odio tristique tellus. Nibh magna et faucibus turpis mollis. Venenatis bibendum leo lacus sit sit odio elementum urna. Lorem ipsum dolor sit amet consectetur. Eu lorem senectus massa molestie egestas lobortis sit. Sit vel sed quam in sagittis aliquam felis orci. Vel massa a purus eu id eget ut odio sem. Phasellus nibh eu tincidunt nunc tristique. At mattis faucibus quis etiam viverra pretium enim dictumst. Quam mauris praesent tortor congue ac pulvinar magna a nibh. Sit sed vel et lectus. Quis sed viverra nunc et morbi. Eget urna ut vel rhoncus turpis sit eleifend. Lorem ipsum dolor sit amet consectetur. Faucibus est gravida bibendum lorem lorem lacus tincidunt consectetur. Ut libero ac scelerisque enim pellentesque vel pretium varius massa. Posuere purus volutpat at lobortis duis. Molestie ut mauris sollicitudin at. Cras vel facilisi volutpat maecenas. Ac nibh egestas blandit scelerisque morbi. Laoreet vitae eu tortor eu. In risus donec quis eget ut non maecenas lorem. Purus quam accumsan neque faucibus sollicitudin semper.'
        },
        {
            name: 'Leyla Əfəndiyeva',
            id: 5,
            image: {
                url: '/assets/profile.svg'
            },
            speciality: 'Oracle  SQL',
            description: 'Lorem ipsum dolor sit amet consectetur. Elit a in ultricies enim magnis consectetur suspendisse. Nisl cursus imperdiet egestas sapien. Adipiscing gravida nisl mauris tellus tellus non risus sem. Egestas id vel ipsum luctus. At tincidunt suscipit iaculis sagittis lorem pellentesque non nulla. Eget morbi tellus euismod duis tellus consectetur eu praesent lorem. Pretium commodo diam libero odio tristique tellus. Nibh magna et faucibus turpis mollis. Venenatis bibendum leo lacus sit sit odio elementum urna. Lorem ipsum dolor sit amet consectetur. Eu lorem senectus massa molestie egestas lobortis sit. Sit vel sed quam in sagittis aliquam felis orci. Vel massa a purus eu id eget ut odio sem. Phasellus nibh eu tincidunt nunc tristique. At mattis faucibus quis etiam viverra pretium enim dictumst. Quam mauris praesent tortor congue ac pulvinar magna a nibh. Sit sed vel et lectus. Quis sed viverra nunc et morbi. Eget urna ut vel rhoncus turpis sit eleifend. Lorem ipsum dolor sit amet consectetur. Faucibus est gravida bibendum lorem lorem lacus tincidunt consectetur. Ut libero ac scelerisque enim pellentesque vel pretium varius massa. Posuere purus volutpat at lobortis duis. Molestie ut mauris sollicitudin at. Cras vel facilisi volutpat maecenas. Ac nibh egestas blandit scelerisque morbi. Laoreet vitae eu tortor eu. In risus donec quis eget ut non maecenas lorem. Purus quam accumsan neque faucibus sollicitudin semper.'
        },
        {
            name: 'Leyla Əfəndiyeva',
            id: 6,
            image: {
                url: '/assets/profile.svg'
            },
            speciality: 'Oracle  SQL',
            description: 'Lorem ipsum dolor sit amet consectetur. Elit a in ultricies enim magnis consectetur suspendisse. Nisl cursus imperdiet egestas sapien. Adipiscing gravida nisl mauris tellus tellus non risus sem. Egestas id vel ipsum luctus. At tincidunt suscipit iaculis sagittis lorem pellentesque non nulla. Eget morbi tellus euismod duis tellus consectetur eu praesent lorem. Pretium commodo diam libero odio tristique tellus. Nibh magna et faucibus turpis mollis. Venenatis bibendum leo lacus sit sit odio elementum urna. Lorem ipsum dolor sit amet consectetur. Eu lorem senectus massa molestie egestas lobortis sit. Sit vel sed quam in sagittis aliquam felis orci. Vel massa a purus eu id eget ut odio sem. Phasellus nibh eu tincidunt nunc tristique. At mattis faucibus quis etiam viverra pretium enim dictumst. Quam mauris praesent tortor congue ac pulvinar magna a nibh. Sit sed vel et lectus. Quis sed viverra nunc et morbi. Eget urna ut vel rhoncus turpis sit eleifend. Lorem ipsum dolor sit amet consectetur. Faucibus est gravida bibendum lorem lorem lacus tincidunt consectetur. Ut libero ac scelerisque enim pellentesque vel pretium varius massa. Posuere purus volutpat at lobortis duis. Molestie ut mauris sollicitudin at. Cras vel facilisi volutpat maecenas. Ac nibh egestas blandit scelerisque morbi. Laoreet vitae eu tortor eu. In risus donec quis eget ut non maecenas lorem. Purus quam accumsan neque faucibus sollicitudin semper.'
        },
        {
            name: 'Leyla Əfəndiyeva',
            id: 7,
            image: {
                url: '/assets/profile.svg'
            },
            speciality: 'Oracle  SQL',
            description: 'Lorem ipsum dolor sit amet consectetur. Elit a in ultricies enim magnis consectetur suspendisse. Nisl cursus imperdiet egestas sapien. Adipiscing gravida nisl mauris tellus tellus non risus sem. Egestas id vel ipsum luctus. At tincidunt suscipit iaculis sagittis lorem pellentesque non nulla. Eget morbi tellus euismod duis tellus consectetur eu praesent lorem. Pretium commodo diam libero odio tristique tellus. Nibh magna et faucibus turpis mollis. Venenatis bibendum leo lacus sit sit odio elementum urna. Lorem ipsum dolor sit amet consectetur. Eu lorem senectus massa molestie egestas lobortis sit. Sit vel sed quam in sagittis aliquam felis orci. Vel massa a purus eu id eget ut odio sem. Phasellus nibh eu tincidunt nunc tristique. At mattis faucibus quis etiam viverra pretium enim dictumst. Quam mauris praesent tortor congue ac pulvinar magna a nibh. Sit sed vel et lectus. Quis sed viverra nunc et morbi. Eget urna ut vel rhoncus turpis sit eleifend. Lorem ipsum dolor sit amet consectetur. Faucibus est gravida bibendum lorem lorem lacus tincidunt consectetur. Ut libero ac scelerisque enim pellentesque vel pretium varius massa. Posuere purus volutpat at lobortis duis. Molestie ut mauris sollicitudin at. Cras vel facilisi volutpat maecenas. Ac nibh egestas blandit scelerisque morbi. Laoreet vitae eu tortor eu. In risus donec quis eget ut non maecenas lorem. Purus quam accumsan neque faucibus sollicitudin semper.'
        },
        {
            name: 'Leyla Əfəndiyeva',
            id: 8,
            image: {
                url: '/assets/profile.svg'
            },
            speciality: 'Oracle  SQL',
            description: 'Lorem ipsum dolor sit amet consectetur. Elit a in ultricies enim magnis consectetur suspendisse. Nisl cursus imperdiet egestas sapien. Adipiscing gravida nisl mauris tellus tellus non risus sem. Egestas id vel ipsum luctus. At tincidunt suscipit iaculis sagittis lorem pellentesque non nulla. Eget morbi tellus euismod duis tellus consectetur eu praesent lorem. Pretium commodo diam libero odio tristique tellus. Nibh magna et faucibus turpis mollis. Venenatis bibendum leo lacus sit sit odio elementum urna. Lorem ipsum dolor sit amet consectetur. Eu lorem senectus massa molestie egestas lobortis sit. Sit vel sed quam in sagittis aliquam felis orci. Vel massa a purus eu id eget ut odio sem. Phasellus nibh eu tincidunt nunc tristique. At mattis faucibus quis etiam viverra pretium enim dictumst. Quam mauris praesent tortor congue ac pulvinar magna a nibh. Sit sed vel et lectus. Quis sed viverra nunc et morbi. Eget urna ut vel rhoncus turpis sit eleifend. Lorem ipsum dolor sit amet consectetur. Faucibus est gravida bibendum lorem lorem lacus tincidunt consectetur. Ut libero ac scelerisque enim pellentesque vel pretium varius massa. Posuere purus volutpat at lobortis duis. Molestie ut mauris sollicitudin at. Cras vel facilisi volutpat maecenas. Ac nibh egestas blandit scelerisque morbi. Laoreet vitae eu tortor eu. In risus donec quis eget ut non maecenas lorem. Purus quam accumsan neque faucibus sollicitudin semper.'
        }
    ];



    const [isBeginning, setIsBeginning] = useState(true);

    const [flag, setFlag] = useState<number>(0);
    
    const [student, setStudent] = useState<any>();

    useEffect(() => {
        if (flag) {
            let item = students.find(t => t.id === flag);
            item && setStudent(item);
        }
    }, [flag]);

    return (
        <div className='relative'>
            <div className="navigation-buttons absolute left-0 right-0 flex justify-center space-x-2 z-10 -bottom-30">
                <button aria-label="prev button" className={`overflow-hidden group swiper-button-prev-custom rounded-full w-20 h-20 flex items-center justify-center  ${isBeginning ? 'bg-gradient-to-r from-[rgba(24,24,24,0.1)] to-[rgba(24,24,24,0.1)]' : 'bg-black rounded-full'}`}>
                    <svg className='group-hover:translate-x-4.5 duration-300 translate-x-24 rotate-90' width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 10L12 14L16 10" stroke={`${isBeginning ? 'black' : 'white'}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg className='-translate-x-5 group-hover:-translate-x-24 duration-300 rotate-90' width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 10L12 14L16 10" stroke={`${isBeginning ? 'black' : 'white'}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <button aria-label="next button" className={`overflow-hidden group swiper-button-next-custom rounded-full w-20 h-20 flex items-center justify-center ${isBeginning ? ' bg-black' : 'bg-gradient-to-r from-[rgba(24,24,24,0.1)] to-[rgba(24,24,24,0.1)] rounded-full'}`}>
                    <svg className='group-hover:translate-x-24 duration-300 translate-x-5 -rotate-90' width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 10L12 14L16 10" stroke={`${isBeginning ? 'white' : 'black'}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg className='-translate-x-24 group-hover:-translate-x-5 duration-300 -rotate-90' width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 10L12 14L16 10" stroke={`${isBeginning ? 'white' : 'black'}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
            <Swiper
                breakpoints={{
                    520: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 24
                    }

                }}
                spaceBetween={24}
                slidesPerView={1}
                navigation={{
                    prevEl: ".swiper-button-prev-custom",
                    nextEl: ".swiper-button-next-custom",
                }}
                modules={[Navigation]}
                onReachBeginning={() => students && setIsBeginning(true)}
                onReachEnd={() => students && setIsBeginning(false)}
                className='transition ease-linear duration-300 relative'
            >
                {students && students?.map((item: any, i: number) => (
                    <SwiperSlide onClick={() => setFlag(item.id)} key={i} className='cursor-pointer group !bg-white rounded-[20px] p-3'>
                        <div>
                            <div className='w-full rounded-[20px] h-68'>
                                <img src={item.image?.url} alt='Handexeducation slider images' className='object-cover h-full w-full rounded-[20px] duration-500' />
                            </div>
                            <div className='flex justify-between items-center pt-4'>
                                <h2 className='text-black text-base font-bold'>{item.name}</h2>
                                <div className='size-8 bg-[#E8E8E8] rounded-full flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M6.66699 10.6668L9.33366 8.00016L6.66699 5.3335" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
            {/*  M O D A L  */}
            <div onClick={() => setFlag(0)} className={`fixed inset-0 bg-black opacity-50 w-screen h-screen z-[60] ${flag ? '!block' : '!hidden'}`}></div>
            <div className={`fixed lg:w-[70vw] w-[95vw] justify-between rounded-[20px] gap-15 bg-white z-[70] p-12 top-1/2 left-1/2 ${flag !== 0 ? 'block lg:flex' : 'hidden'} -translate-x-1/2 -translate-y-1/2 `}>
                <svg onClick={() => setFlag(0)} className='absolute cursor-pointer top-5 right-5' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M1 18.9985L19 0.998474" stroke="#DDDDDD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19 18.9985L1 0.998474" stroke="#DDDDDD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className='lg:w-2/5 w-full'>
                    <img className='h-full w-full md:w-112 !object-cover rounded-[20px]' src={student?.image.url} alt="" />
                </div>
                <div className='lg:w-3/5 w-full'>
                    <h2 className='font-bold mb-6'>{student?.name}</h2>
                    <p className='lg:line-clamp-17 line-clamp-8'>{student?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Instructors;
