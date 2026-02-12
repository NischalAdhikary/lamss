
import { Users, Star, ClipboardCheck, Globe } from "lucide-react";


const Stats = () => {
    const stats = [
        {
            icon: <Users className="w-8 h-8" />,
            value: "500+",
            label: "Clients Served",
            description: "National and international NGOs, government agencies, and private clients since 2018.",
        },
        {
            icon: <Star className="w-8 h-8" />,
            value: "15+",
            label: "Years of Expertise",
            description: "Combined experience of our professional translators, interpreters, and media experts.",
        },
        {
            icon: <ClipboardCheck className="w-8 h-8" />,
            value: "1000+",
            label: "Projects Completed",
            description: "Translation, interpretation, transcription, subtitling, and media projects delivered with excellence.",
        },
        {
            icon: <Globe className="w-8 h-8" />,
            value: "7+",
            label: "Languages Supported",
            description: "Nepali, English, Hindi, Urdu, Newari, Terai local languages, and UN languages on request.",
        },
    ];




    return (
        <div className="relative">
            <div
                className="absolute inset-0 bg-fixed bg-center bg-no-repeat bg-cover"
                style={{
                    backgroundImage: `url("/lamss1.png")`,
                    backgroundPosition: "top",
                }}
            >
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <section className="relative min-h-[300px] py-16">
                <div className="container px-4 sm:px-6 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="p-6 backdrop-blur-sm dark:bg-card bg-white/10 rounded-lg 
                           transform hover:scale-105 transition-all duration-300"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="p-3 bg-white/20 rounded-full mb-4">
                                        <div className="text-white">{stat.icon}</div>
                                    </div>
                                    <h4 className="text-5xl font-bold text-white mb-2">
                                        {stat.value}
                                    </h4>
                                    <p className="text-white/90 font-medium text-lg">
                                        {stat.label}
                                    </p>
                                    <p className="text-white/70 text-sm mt-2">
                                        {stat.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Stats;
