import RouteHero from "@/components/layout/HeroPage";
import Contactinfoup from "./components/ContactDetails";
import ContactForm from "./components/ContactForm";
import SEO from "@/components/layout/Seo";


const data = {
    image: '/lamss1.png',
    title: 'Contact Us',
    route: true
}
export default function ContactMain() {
    return (
        <>
            <SEO
                title="Contact LAMSS - Language and Media Support Services"
                description="Get in touch with LAMSS for professional translation, interpretation, transcription, and subtitling services. Contact our team via email, phone, or our online contact form."
                keywords="LAMSS, contact, translation services, interpretation, transcription, subtitling, Nepal, language services"
                image="/lamss1.png"
            />
            <RouteHero data={data} />
            <div className="w-full relative py-14 md:py-20">
                <div className="mx-auto container px-6 max-w-7xl flex md:flex-row flex-col gap-10">
                    <div className="w-full md:w-1/2">
                        <Contactinfoup />
                    </div>
                    <div className="w-full md:w-1/2">
                        <ContactForm />
                    </div>

                </div>
            </div>
        </>


    )
}
