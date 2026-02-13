import SEO from "@/components/layout/Seo";
import HomeAboutSection from "./components/About";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Stats from "./components/Stats";
import TeamCarousel from "./components/Team";

export default function HomeMain() {
    return (
        <>
            <SEO
                title="LAMSS - Language and Media Support Services"
                description="LAMSS is a Nepal-based organization offering translation, interpretation, transcription, and subtitling services in Nepali, English, Hindi, and local languages. We ensure high quality and professional service backed by experienced interpreters and translators."
                keywords="translation, interpretation, transcription, subtitling, Nepali, English, Hindi, Nepal, professional translators, LAMSS"
                image="/lamss1.png"

            />
            <Hero />
            <HomeAboutSection />
            <Stats />
            <Service />
            <TeamCarousel />
        </>
    )
}
