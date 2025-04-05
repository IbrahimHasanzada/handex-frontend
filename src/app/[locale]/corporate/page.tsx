import TestimonialsCorporate from "@/components/corporate/TestimonialsCorporate";
import HeadSection from "@/components/home/HeroSection";
import StudyAreasSection from "@/components/home/StudyAreasSection";
import { getCustomers } from "@/service";
// import TestimonialsAccordion from "@/components/home/TestimonialsAccordion";

const page = () => {
    return (
        <div className='pt-30 '>
            <div className="wrapper">
                <div className='py-12.5 md:py-15'>
                    <HeadSection page='corporate' />
                </div>
                <div className='py-12.5 md:py-15'>
                    <StudyAreasSection page="corporate" />
                </div>
                <div className='py-12.5 md:py-15 bg-[#282828] rounded-[20px]'>
                    <TestimonialsCorporate />
                </div>
            </div>
        </div>

    )
}

export default page;