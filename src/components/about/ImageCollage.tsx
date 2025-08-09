"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { CSSProperties } from 'react';
import Modal from '../Modal';

interface ImageData {
    desktopStyles: CSSProperties;
    mobileStyles: CSSProperties;
}

const ImageCollage: React.FC<any> = ({ images }) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [animateIn, setAnimateIn] = useState<boolean>(false);
    const [open, setOpen] = useState(false)
    const [imageIndex, setImageIndex] = useState<number>()
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAnimateIn(true);
        }, 100);

        return () => clearTimeout(timeout);
    }, []);

    const imageArray: ImageData[] = [
        {
            desktopStyles: {
                top: 30,
                left: 56,
                width: 300,
                height: 170,
                transform: "rotate(-2deg)",
                zIndex: 2
            },
            mobileStyles: {
                top: 0,
                left: 0,
                width: 106,
                height: 57,
                transform: "rotate(-2deg)",
                zIndex: 2
            }
        },
        {
            desktopStyles: {
                left: 22,
                top: 200,
                width: 450,
                height: 292,
                transform: "rotate(-20deg)",
                zIndex: 1
            },
            mobileStyles: {
                left: 0,
                top: 60,
                width: 160,
                height: 112,
                transform: "rotate(-20deg)",
                zIndex: 1
            }
        },
        {
            desktopStyles: {
                top: 400,
                left: "50%",
                transform: "translateX(-50%) rotate(2deg)",
                width: 252,
                height: 150,
                zIndex: 0
            },
            mobileStyles: {
                top: 150,
                left: "50%",
                transform: "translateX(-50%) rotate(2deg)",
                width: 82,
                height: 44,
                zIndex: 0
            }
        },
        {
            desktopStyles: {
                top: 8,
                right: 230,
                width: 450,
                height: 270,
                transform: "rotate(8deg)",
                zIndex: 3
            },
            mobileStyles: {
                top: 0,
                right: "5%",
                width: 160,
                height: 86,
                transform: "rotate(8deg)",
                zIndex: 3
            }
        },
        {
            desktopStyles: {
                top: 306,
                right: 12,
                width: 370,
                height: 230,
                transform: "rotate(1deg)",
                zIndex: 2
            },
            mobileStyles: {
                top: 82,
                right: 0,
                width: 125,
                height: 68,
                transform: "rotate(1deg)",
                zIndex: 2
            }
        }
    ];

    return (
        <div className="w-full min-h-[300px] md:min-h-[600px] py-8 md:py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="relative w-full h-full">
                    <div className="relative w-full h-full flex items-center justify-center">
                        {imageArray.map((image, index) => {
                            const finalStyle = isMobile ? image.mobileStyles : image.desktopStyles;

                            const initialStyle: CSSProperties = {
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%) scale(0.8)",
                                zIndex: finalStyle.zIndex,
                                width: finalStyle.width,
                                height: finalStyle.height,
                                transition: "all 1s ease-in-out",
                            };

                            const animatedStyle: CSSProperties = {
                                ...finalStyle,
                                position: "absolute",
                                transition: "all 1s ease-in-out"
                            };

                            return (
                                <div
                                    key={index}
                                    className="shadow-lg rounded-lg overflow-hidden"
                                    style={animateIn ? animatedStyle : initialStyle}
                                >
                                    {images && images.length >= 5 && (
                                        <img
                                            id={images[index]?.alt}
                                            onClick={() => {
                                                setOpen(true);
                                                setImageIndex(index)
                                            }}
                                            src={images[index]?.url as string}
                                            alt={images[index].alt}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {open &&
                <>
                    <div className='fixed inset-0 z-200 opacity-50 bg-black h-screen w-screen'></div>
                    <div className='fixed   left-[50%] top-[50%] h-[20vh] w-[80vw] md:h-[50vh] md:w-[50vw] lg:h-[50vh] lg:w-[50vw] -translate-y-[50%] z-300 -translate-x-[50%]'>
                        <div id='handleimages-modal' onClick={() => setOpen(!open)}>
                            <svg className='absolute right-4 top-4 md:top-8 md:right-8 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M1 18.9985L19 0.998474" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19 18.9985L1 0.998474" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <img className='rounded-xl w-full object-cover h-full' src={images[imageIndex as number].url} alt="" />
                    </div>
                </>
            }
        </div>
    );
};

export default ImageCollage;
