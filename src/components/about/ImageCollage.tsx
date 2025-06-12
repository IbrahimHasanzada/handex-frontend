"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { CSSProperties } from 'react';

interface ImageData {
    desktopStyles: CSSProperties;
    mobileStyles: CSSProperties;
}

const ImageCollage: React.FC<any> = ({ images }) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [animateIn, setAnimateIn] = useState<boolean>(false);

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
                width: 270,
                height: 140,
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
                left: 62,
                top: 150,
                width: 400,
                height: 272,
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
                top: 300,
                left: "50%",
                transform: "translateX(-50%) rotate(2deg)",
                width: 212,
                height: 110,
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
                right: 250,
                width: 400,
                height: 220,
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
                top: 216,
                right: 12,
                width: 320,
                height: 180,
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
                                        <Image
                                            src={images[index]?.url as string}
                                            alt={images[index].alt}
                                            width={typeof finalStyle.width === 'number' ? finalStyle.width : 200}
                                            height={typeof finalStyle.height === 'number' ? finalStyle.height : 200}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageCollage;
