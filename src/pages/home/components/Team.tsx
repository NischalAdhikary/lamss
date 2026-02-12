import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";


const TeamCarousel = () => {

    const teamMembers = [
        {
            id: 1,
            name: "Ms. Jyotshna Shrestha",
            role: "Managing Director",
            organization: "LAMSS",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Manoj",


            quote: "With a Masters in Human and Natural Resources and certification as a Psychosocial Counselor, I bring over nine years of enriching experience in translation, interpretation, and designing impactful training programs for national and international development initiatives."
        },
        {
            id: 2,
            name: "Mr. Manoj Karki",
            role: "Director of Media",
            organization: "LAMSS",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jyotshna",
            quote: "With more than 15 years of expertise in interpretation and translation, coupled with a media background and international exposure, I deliver excellence in every project. My dual masters in Sociology/Anthropology and Political Science strengthens my comprehensive approach."
        },
        {
            id: 3,
            name: "Mr. Bibhushan Timsina",
            role: "Technical Director",
            organization: "LAMSS",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bibhushan",
            quote: "With over 15 years in translation and interpretation, 23 years in transcription and subtitling, and a Masters in Conflict, Peace and Development Studies, I bring technical excellence and diverse expertise including tourism planning and project management to LAMSS."
        }
    ];


    return (
        <section className="py-8 md:py-16 px-4 dark:bg-background dark:text-white text-black">
            <div className="max-w-4xl mx-auto">

                <div className="text-center mb-4 md:mb-8 space-y-2">
                    <h2 className="text-3xl md:text-5xl font-bold ">
                        Our Team
                    </h2>
                    <p className=" text-md md:text-xl max-w-2xl mx-auto">
                        Meet the experts driving excellence in language and media services
                    </p>
                </div>


                <Carousel
                    opts={{
                        loop: true,
                        align: 'start'
                    }}
                    className="w-full"
                >
                    <CarouselContent className="p-2">
                        {teamMembers.map((member) => (
                            <CarouselItem key={member.id}>
                                <div className="p-1">
                                    <Card className="border-0 text-black bg-transparent shadow-none">
                                        <CardContent className="p-0">

                                            <div className="relative overflow-hidden rounded-3xl p-1">
                                                <div className="bg-(--primary-bg) dark:bg-card rounded-3xl p-12 md:p-16 min-h-125 flex flex-col justify-between">

                                                    <div className="absolute top-8 right-8 opacity-10">
                                                        <svg
                                                            className="w-32 h-32 text-white"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                                                        </svg>
                                                    </div>


                                                    <div className="relative z-10 space-y-8">
                                                        <p className="text-lg  md:text-2xl lg:text-3xl font-light dark:text-white text-black leading-7 md:leading-relaxed">
                                                            "{member.quote}"
                                                        </p>
                                                    </div>


                                                    <div className="relative z-10 flex items-center gap-6 pt-8 ">
                                                        <div className="relative">
                                                            <div className="absolute inset-0 bg-[#ed3338] rounded-full blur-xl opacity-50"></div>
                                                            <img
                                                                src={member.image}
                                                                alt={member.name}
                                                                className="relative w-20 h-20 md:w-24 md:h-24 rounded-full ring-4 ring-white/20"
                                                            />
                                                        </div>

                                                        <div>
                                                            <h4 className="text-xl md:text-3xl dark:text-white font-bold mb-1">
                                                                {member.name}
                                                            </h4>
                                                            <p className="text-sm dark:text-white md:text-lg">
                                                                {member.role}
                                                            </p>
                                                            <p className="text-sm font-semibold bg-gradient-to-r from-[#ed3338] to-[#ff6b6f] bg-clip-text text-transparent">
                                                                {member.organization}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>


                    <CarouselPrevious variant={'default'} className='left-2 md:left-1 lg:-left-20' />
                    <CarouselNext variant={"default"} className='right-2 md:right-1 lg:-right-15' />
                </Carousel>
            </div>
        </section>
    );
};

export default TeamCarousel;