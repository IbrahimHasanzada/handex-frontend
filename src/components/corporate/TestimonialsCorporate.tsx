import { getCustomers } from "@/service";
import TestimonialsAccordion from "../TestimonialsAccordion"
import Button from "../ui/Button";

const TestimonialsCorporate = async () => {
    const result = await getCustomers();
    return (
        <div className="wrapper flex gap-10 flex-col-reverse md:flex-row">
            <div className="base:flex-1/4 xl:flex-1/2 flex items-center">
                <div className="max-w-100 md:w-auto lg:w-100">
                    <h2 className="font-bold text-3xl leading-9 bg-gradient-to-r from-[#F4F5F5] to-[#666] text-transparent bg-clip-text">Məmnun müştərilərimizin rəylərini oxuyun.</h2>
                    <p className="mt-4 text-white/45">Onların məmnuniyyəti bizim öhdəliyimizdir</p>
                    <div className="h-10 w-34 mt-6">
                        <Button theme={true} link="" flag={false}>
                            Daha çox
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex base:flex-3/4  xl:flex-1/2 gap-6">
                <div className="grid grid-cols-1 base:grid-cols-2 gap-5 h-full">
                    <div className="hidden base:block  h-full">
                        <TestimonialsAccordion start={0} data={result} page="corporate" />
                    </div>
                    <div className="h-full">
                        <TestimonialsAccordion start={1} data={result} page="corporate" />
                    </div>
                </div>

            </div>
        </div >
    )
}

export default TestimonialsCorporate
