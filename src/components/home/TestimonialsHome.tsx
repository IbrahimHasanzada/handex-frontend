import { getTranslations } from "next-intl/server";
import { getCustomers } from "@/service";
import TestimonialsAccordion from "../TestimonialsAccordion";

const TestimonialsHome = async ({ t }: any) => {
    const result = await getCustomers();

    const testimonialsData = result || [];
    return (
        <div>
            <div className='w-full flex justify-center md:pb-15'>
                <div className='max-w-126 text-center'>
                    <h2 className='text-2xl md:text-4xl leading-12 font-bold text-[#141414]'>{t("testimonials.heading")}</h2>
                    <p className='text-[#787878] text-sm md:text-2xl leading-8'>{t("testimonials.title")}</p>
                </div>
            </div>
            <TestimonialsAccordion start={0} data={testimonialsData} page='home' />

        </div>
    );
};

export default TestimonialsHome;
