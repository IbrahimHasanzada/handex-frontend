import TestimonialsCorporate from "@/components/corporate/TestimonialsCorporate";
import HeadSection from "@/components/home/HeroSection";
import Statistics from "@/components/Statistics";
import StudyAreasSection from "@/components/home/StudyAreasSection";

const page = async () => {
    return (
        <div className='pt-30 '>
            <div className="wrapper">
                <div className='py-12.5 md:py-15'>
                    <HeadSection page='corporate' />
                </div>
                <div className='py-12.5 md:py-15'>
                    <StudyAreasSection page="corporate" />
                </div>
                <div className=' bg-[#282828] rounded-[20px]'>
                    <TestimonialsCorporate />
                </div>
                <div className='py-12.5 md:py-15'>
                    <Statistics page='corporate' />
                </div>
            </div>
        </div>

    )
}

export default page;