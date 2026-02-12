
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
export default function HomeAboutSection() {
    const navigate = useNavigate();

    return (
        <section className="bg-white dark:bg-background py-10 md:py-20" >
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">


                <div className="w-full md:w-1/2 overflow-hidden  group">
                    <img
                        src="/lamss1.png"
                        alt="About LAMSS"
                        className="rounded-lg shadow-lg w-full h-80 md:h-110 object-cover transtition duration-200 ease-in group-hover:scale-110 "
                    />
                </div>


                <div className="w-full md:w-1/2 space-y-4">
                    <p className="text-(--primary-bg) e font-semibold">Who Are We? <span className="w-10 border-b"></span></p>
                    <h2 className="text-3xl md:text-3xl font-bold dark:text-white text-gray-900">
                        Professional Language Services You Can Trust
                    </h2>

                    <p className="text-gray-700 dark:text-white text-md leading-6.4">
                        Language and Media Support Services (LAMSS), established in 2018, is a government-registered private organization dedicated to bridging the gap between service-seekers and professional translators and interpreters. With the growing demand for quality language services, LAMSS ensures that clients receive accurate, reliable, and cost-effective solutions while also fairly compensating the experts behind these intricate services.
                    </p>
                    <p className="text-gray-700 dark:text-white text-md line-clamp-2">
                        Founded by three experienced interpreters and translators, LAMSS not only provides top-notch translation and interpretation services but also trains the next generation of professionals. By bringing translators and interpreters under one umbrella and promoting high-quality standards, LAMSS contributes to enhancing language services across Nepal, particularly as local governments increasingly require multilingual support.

                    </p>
                    <span onClick={() => navigate('/aboutus')} className="flex gap-2 items-center text-sm cursor-pointer text-(--secondary-bg) group">Know More <ArrowRight className=" transition duration-200 ease-in group-hover:translate-x-1 " size={18} /></span>


                </div>
            </div>
        </section>
    );
}
