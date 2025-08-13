import { getCustomers } from "@/service";
import TestimonialsAccordion from "../TestimonialsAccordion";

const TestimonialsHome = async () => {
    const result = await getCustomers('home');

    const testimonialsData = result || [];
    return (
        <div>
            <div className='w-full flex justify-center md:pb-15'>
                <div className='max-w-126 text-center'>
                    <h2 className='text-2xl md:text-4xl font-bold text-[#141414]'>Məmnun müştərilərimizin rəylərini oxuyun.</h2>
                    <p className='text-[#787878] text-sm md:text-2xl leading-8'>Onların məmnuniyyəti bizim öhdəliyimizdir</p>
                </div>
            </div>
            <TestimonialsAccordion index={0} start={0} data={testimonialsData} page='home' />

        </div>
    );
};

export default TestimonialsHome;
