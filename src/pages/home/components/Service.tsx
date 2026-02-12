
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Globe, Mic, Settings } from "lucide-react";

const services = [
    {
        id: 1,
        icon: <Globe className="w-8 h-8 text-blue-500" />,


        title: "Translation & Editing",
        languages: "Nepali, English, Hindi",
        description:
            "Accurate document translation and editing based on LAMSS standards.",
        extra:
            "Pricing: 350 words = 1 page. Pay only for actual words translated, not physical pages.",
    },
    {
        id: 2,
        icon: <Mic className="w-8 h-8 text-green-500" />,
        title: "Interpretation",
        languages: "Nepali, English, Hindi, Urdu, Newari, Terai Languages",
        description:
            "Simultaneous and consecutive interpretation for meetings, events, and conferences.",
        extra:
            "UN language support available on demand with 15-day notice, subject to availability.",
    },
    {
        id: 3,
        icon: <FileText className="w-8 h-8 text-purple-500" />,
        title: "Transcription & Sub-titling",
        languages: "Nepali, English",
        description:
            "Convert audio/video to text or add subtitles for videos and presentations.",
    },
    {
        id: 4,
        icon: <Settings className="w-8 h-8 text-orange-500" />,
        title: "Other Services",
        description:
            "Note-taking, rapporteur work, content writing, report writing, documentaries, press releases, and event management.",
    },
];

export default function Service() {
    return (
        <div className="w-full relative py-8 md:py-16">

            <div className="mx-auto container max-w-7xl px-6">

                <div className="text-center mb-8 md:mb-16 space-y-2">
                    <h2 className="text-3xl md:text-5xl font-bold ">
                        Our Services
                    </h2>
                    <p className="text-md md:text-xl max-w-2xl mx-auto">
                        Providing professional translation, interpretation, transcription, and more to meet all your language needs.
                    </p>
                </div>
                <div className="grid  grid-cols-1 mb-12 sm:grid-cols-2 md:grid-cols-4 lg:gird-cols-4 gap-4">
                    {
                        services.map((s) =>
                            <Card className={`group dark:bg-card border-t-4 border-(--secondary-bg) bg-(--secondary-bg) hover:bg-(--primary-bg)  transition duration-100 ease-in hover:-translate-y-2`} key={s.id}>
                                <CardContent className="space-y-4 ">
                                    <div className="w-16 h-16 bg-red-100 group-hover:bg-white rounded-lg flex items-center justify-center">
                                        {s.icon}
                                    </div>
                                    <h3 className=" text-lg md:text-xl text-white font-medium">{s.title}</h3>
                                    <p className="text-sm md:text-md leading-6 text-white">{s.description}</p>


                                </CardContent>

                            </Card>
                        )
                    }



                </div>
                <div className="flex items-center justify-center">
                    <Button variant={'outline'} >
                        View All Services
                    </Button>
                </div>



            </div>

        </div>
    )
}
