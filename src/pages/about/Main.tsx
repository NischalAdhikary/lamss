import RouteHero from "@/components/layout/HeroPage";
import Mission from "./components/Mission";
import WorkingProcess from "./components/Process";
import Story from "./components/Story";
import SEO from "@/components/layout/Seo";

const data = {
    image: '/lamss1.png',
    title: 'About Us',
    route: true
}
export default function AboutMain() {
    return (
        <>
            <SEO
                title="About LAMSS - Language and Media Support Services"
                description="LAMSS, established in 2018, is a Nepal-based organization providing professional translation, interpretation, transcription, and subtitling services. Our mission is to ensure quality services and train future translators and interpreters."
                keywords="LAMSS, translation, interpretation, transcription, subtitling, Nepal, professional translators, language services"
                image="/lamss1.png"
            />

            <RouteHero data={data} />
            <div className='w-full relative py-16'>

                <div className='container mx-auto px-6 max-w-7xl space-y-14 md:space-y-26'>
                    <Story />
                    <Mission />
                    <WorkingProcess />
                </div>

            </div>
        </>

    )
}
