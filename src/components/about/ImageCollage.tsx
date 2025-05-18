"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { CSSProperties } from 'react';

interface ImageData {
    alt: string;
    desktopStyles: CSSProperties;
    mobileStyles: CSSProperties;
}

const ImageCollage: React.FC<any> = ({ images }) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIfMobile();

        window.addEventListener('resize', checkIfMobile);

        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const imageArray: ImageData[] = [
        {
            alt: "Index team members",
            desktopStyles: {
                position: "absolute",
                top: 30,
                left: 56,
                width: 270,
                height: 140,
                transform: "rotate(-2deg)",
                zIndex: 2
            },
            mobileStyles: {
                position: "absolute",
                top: 0,
                left: 0,
                width: 106,
                height: 57,
                transform: "rotate(-2deg)",
                zIndex: 2
            }
        },
        {
            alt: "Handex team members",
            desktopStyles: {
                position: "absolute",
                left: 62,
                top: 150,
                width: 400,
                height: 272,
                transform: "rotate(-20deg)",
                zIndex: 1
            },
            mobileStyles: {
                position: "absolute",
                left: 0,
                top: 60,
                width: 160,
                height: 112,
                transform: "rotate(-20deg)",
                zIndex: 1
            }
        },
        {
            alt: "Company presentation",
            desktopStyles: {
                position: "absolute",
                top: 300,
                left: "50%",
                transform: "translateX(-50%) rotate(2deg)",
                width: 212,
                height: 110,
                zIndex: 0
            },
            mobileStyles: {
                position: "absolute",
                top: 150,
                left: "50%",
                transform: "translateX(-50%) rotate(2deg)",
                width: 82,
                height: 44,
                zIndex: 0
            }
        },
        {
            alt: "Team group photo",
            desktopStyles: {
                position: "absolute",
                top: 8,
                right: 250,
                width: 400,
                height: 220,
                transform: "rotate(8deg)",
                zIndex: 3
            },
            mobileStyles: {
                position: "absolute",
                top: 0,
                right: "5%",
                width: 160,
                height: 86,
                transform: "rotate(8deg)",
                zIndex: 3
            }
        },
        {
            alt: "Team members",
            desktopStyles: {
                position: "absolute",
                top: 216,
                right: 12,
                width: 320,
                height: 180,
                transform: "rotate(1deg)",
                zIndex: 2
            },
            mobileStyles: {
                position: "absolute",
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
        <div className="w-full bg-gray-50 min-h-[300px] md:min-h-[600px] py-8 md:py-12">
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
                                    src={images[index].url as string}
                                    alt={image.alt}
                                    width={isMobile ?
                                        typeof image.mobileStyles.width === 'number' ? image.mobileStyles.width : 100 :
                                        typeof image.desktopStyles.width === 'number' ? image.desktopStyles.width : 200
                                    }
                                    height={isMobile ?
                                        typeof image.mobileStyles.height === 'number' ? image.mobileStyles.height : 100 :
                                        typeof image.desktopStyles.height === 'number' ? image.desktopStyles.height : 200
                                    }
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