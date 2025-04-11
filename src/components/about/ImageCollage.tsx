"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageCollage = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIfMobile();

        window.addEventListener('resize', checkIfMobile);

        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const imageArray = [
        {
            src: "/assets/img/about1.png",
            alt: "Index team members",
            desktopStyles: {
                position: "absolute",
                top: "30px",
                left: "56px",
                width: "270px",
                height: "140px",
                transform: "rotate(-2deg)",
                zIndex: '2'
            },
            mobileStyles: {
                position: "absolute",
                top: "0",
                left: "0",
                width: "106px",
                height: "57px",
                transform: "rotate(-2deg)",
                zIndex: '2'
            }
        },
        {
            src: "/assets/img/about2.png",
            alt: "Handex team members",
            desktopStyles: {
                position: "absolute",
                left: "62px",
                top: "150px",
                width: "400px",
                height: "272px",
                transform: "rotate(-20deg)",
                zIndex: '1'
            },
            mobileStyles: {
                position: "absolute",
                left: "0",
                top: "60px",
                width: "160px",
                height: "112px",
                transform: "rotate(-20deg)",
                zIndex: '1'
            }
        },
        {
            src: "/assets/img/about3.png",
            alt: "Company presentation",
            desktopStyles: {
                position: "absolute",
                top: "300px",
                left: "50%",
                transform: "translateX(-50%) rotate(2deg)",
                width: "212px",
                height: "110px",
                zIndex: '0'
            },
            mobileStyles: {
                position: "absolute",
                top: "150px",
                left: "50%",
                transform: "translateX(-50%) rotate(2deg)",
                width: "82px",
                height: "44px",
                zIndex: '0'
            }
        },
        {
            src: "/assets/img/about4.png",
            alt: "Team group photo",
            desktopStyles: {
                position: "absolute",
                top: "8px",
                right: "250px",
                width: "400px",
                height: "220px",
                transform: "rotate(8deg)",
                zIndex: '3'
            },
            mobileStyles: {
                position: "absolute",
                top: "0",
                right: "5%",
                width: "160px",
                height: "86px",
                transform: "rotate(8deg)",
                zIndex: '3'
            }
        },
        {
            src: "/assets/img/about5.png",
            alt: "Team members",
            desktopStyles: {
                position: "absolute",
                top: "216px",
                right: "12px",
                width: "320px",
                height: "180px",
                transform: "rotate(1deg)",
                zIndex: '2'
            },
            mobileStyles: {
                position: "absolute",
                top: "82px",
                right: "0",
                width: "125px",
                height: "68px",
                transform: "rotate(1deg)",
                zIndex: '2'
            }
        }
    ];

    return (
        <div className=" w-full bg-gray-50 min-h-[300px] md:min-h-[600px] py-8 md:py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="relative w-full h-full">
                    <div className="relative w-full h-full flex items-center justify-center">
                        {imageArray.map((image, index) => (
                            <div
                                key={index}
                                className="shadow-lg rounded-lg overflow-hidden transition-all duration-300"
                                style={isMobile ? image.mobileStyles : image.desktopStyles}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={isMobile ? parseInt(image.mobileStyles.width) : parseInt(image.desktopStyles.width)}
                                    height={isMobile ? parseInt(image.mobileStyles.height) : parseInt(image.desktopStyles.height)}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageCollage;