import ImageCollage from '@/components/about/ImageCollage'
import React from 'react'

const AboutPage = () => {

    const about = [
        {
            headline: "Biz kimik",
            text: "Handex – 2021-ci ildən fəaliyyət göstərən texniki, əsasən də data analitika sahəsi və aidiyyəti proqramlar üzrə təlimlər həyata keçirən, həmçinin analitika və hesabatlılığın təmin olunması üzrə xidmətlər göstərən müəssisədir.",
            secondText: "Təşkil etdiyimiz təlimlərdə və peşə hazırlığında iştirak edən məzunlarımız qazandıqları bilik və bacarıqlar sayəsində həm yerli, həm də xarici şirkətlərdə iş ilə təmin olunub, beynəlxalq sertifikatlar əldə ediblər. "
        },
        {
            headline: "Tariximiz",
            text: "Lorem ipsum dolor sit amet consectetur. Ut amet in urna amet tincidunt gravida. Ut urna porttitor libero malesuada. Neque elit tellus laoreet risus hendrerit elit gravida vestibulum. Mi non et fusce congue amet gravida tincidunt. Leo auctor tellus consequat suspendisse diam. Urna dolor auctor neque suspendisse neque scelerisque.",
            secondText: "Lorem ipsum dolor sit amet consectetur. Gravida pellentesque viverra posuere imperdiet. Eu varius interdum mi in."
        },

    ]

    const aboutWithImage = [
        {
            title: "Missiyalarımız",
            text: "Lorem ipsum dolor sit amet consectetur. Ut amet in urna amet tincidunt gravida. Ut urna porttitor libero malesuada. Neque elit tellus laoreet risus hendrerit elit gravida vestibulum. Mi non et fusce congue amet gravida tincidunt. Leo auctor tellus consequat suspendisse diam. Urna dolor auctor neque suspendisse neque scelerisque.",
            img: "about4.png"
        },
        {
            title: "Deyerlerimiz",
            text: "Lorem ipsum dolor sit amet consectetur. Ut amet in urna amet tincidunt gravida. Ut urna porttitor libero malesuada. Neque elit tellus laoreet risus hendrerit elit gravida vestibulum. Mi non et fusce congue amet gravida tincidunt. Leo auctor tellus consequat suspendisse diam. Urna dolor auctor neque suspendisse neque scelerisque.",
            img: "about5.png"
        },
    ]
    return (
        <div className="wrapper w-full  pt-30">
            <div className='relative'>
                <ImageCollage />
            </div>
            <div className='flex flex-col md:flex-row gap-10 md:gap-5 justify-between'>
                {about.map((item, index) => (
                    <div key={index} className='max-w-132'>
                        <h2 className='font-bold text-4xl leading-12'>{item.headline}</h2>
                        <p>{item.text}</p>
                        <p className='mt-4'>{item.secondText}</p>
                    </div>
                ))}
            </div>
            <div className='base:mt-30'>
                {aboutWithImage.map((item, index) => (
                    <div key={index} className={`mt-30 flex justify-between gap-7 base:gap-33 flex-col  ${index % 2 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                        <div className='max-w-132'>
                            <h2 className='font-bold text-4xl leading-12'>{item.title}</h2>
                            <p className='mt-4'>{item.text}</p>
                        </div>
                        <div className='flex-1/2 max-h-100 rounded-[20px] overflow-hidden'>
                            <img src={`/assets/img/${item.img}`} alt='' className='object-cover h-full w-full' />
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default AboutPage