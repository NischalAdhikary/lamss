import { useState, useEffect } from "react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Navbar from "@/components/layout/Navbar";

export default function Hero() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    const slides = [
        {
            imageurl: "/lamss1.png",
            title: "Bridging Languages, Connecting People",
            subtitle: "Expert translation and interpretation services that bring people together."
        },
        {
            imageurl: "/lamss1.png",
            title: "Excellence in Every Word",
            subtitle: "Professional translators and interpreters ensuring quality and accuracy."
        },
        {
            imageurl: "/lamss1.png",
            title: "Your Global Communication Partner",
            subtitle: "From documents to conferences, we make every message clear and impactful."
        },
        {
            imageurl: "/lamss1.png",
            title: "Empowering Voices Across Languages",
            subtitle: "Training and connecting interpreters for seamless communication nationwide."
        }
    ];

    useEffect(() => {
        if (!api) return;

        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <div className="w-full relative overflow-hidden  h-137.5 md:h-[80vh] lg:h-screen">

            <div className="relative z-30">
                <Navbar />
            </div>

            <div className="absolute w-full h-full inset-0">
                <Carousel
                    setApi={setApi}
                    opts={{
                        loop: true,
                        align: 'start'
                    }}
                    plugins={[Autoplay({ delay: 4000 })]}
                    className="w-full h-full"
                >
                    <CarouselContent className="ml-0">
                        {slides.map((slide, index) => (
                            <CarouselItem key={index} className="pl-0 basis-full">
                                <div className="relative w-full h-137.5 md:h-[80vh] lg:h-screen">
                                    <img
                                        src={slide.imageurl}
                                        alt={`Slide ${index + 1}`}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />

                                    <div className="absolute inset-0 bg-black opacity-50"></div>

                                    <div className="absolute inset-0 z-10 flex max-w-4xl mx-auto flex-col gap-4 justify-center items-center px-4">
                                        <h1 className="text-2xl mb-2 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl  text-yellow-300 font-bold text-center animate-fadeIn">
                                            {slide.title}
                                        </h1>
                                        <p className="text-base tracking-widest leading-10 sm:text-lg md:text-xl lg:text-3xl xl:text-3xl text-center text-white animate-fadeIn animation-delay-200">
                                            {slide.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>


            jsx<div className="absolute bottom-6 left-1/2 z-30  -translate-x-1/2 flex gap-3 items-end">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={`w-1 bg-(--primary-bg) transition-all duration-500 rounded-full  ${current === index
                            ? "h-8"
                            : "h-4 hover:h-5"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}