import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
    const aboutImages = [
        { src: 'about1.png', position: { top: '15%', left: '20%' }, maxWidth: 250, rotate: -5 },
        { src: 'about2.png', position: { top: '15%', right: '20%' }, maxWidth: 350, rotate: 15 },
        { src: 'about3.png', position: { top: '35%', left: '15%' }, maxWidth: 250, rotate: -15 },
        { src: 'about4.png', position: { top: '50%', left: '40%' }, maxWidth: 100, rotate: 10 },
        { src: 'about5.png', position: { bottom: '25%', right: '25%' }, maxWidth: 220, rotate: -15 }
    ]

    return (
        <div className="wrapper relative w-full h-screen pt-30">
            {aboutImages.map((image, index) => (
                <div
                    key={index}
                    className="absolute rounded-xl overflow-hidden shadow-lg"
                    style={{
                        ...image.position,
                        width: `${image.maxWidth}px`,
                        zIndex: aboutImages.length - index,
                        transform: `rotate(${image.rotate}deg)`
                    }}
                >
                    <Image
                        src={`/assets/img/${image.src}`}
                        alt={`Handex team photo ${index + 1}`}
                        width={image.maxWidth}
                        height={image.maxWidth * 0.35}
                        className="w-full h-auto"
                    />
                </div>
            ))}
        </div>
    )
}

export default AboutPage