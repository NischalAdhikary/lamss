import RouteHero from '@/components/layout/HeroPage'
import Bloghero from './Bloghero'
import SEO from '@/components/layout/Seo'

const data = {
    title: 'Blogs',
    image: "/lamss1.png",
    route: true
}
export default function BlogMain() {
    return (
        <>
            <SEO
                title="LAMSS Blogs - Language and Media Support Services"
                description="Read the latest insights, tips, and updates on translation, interpretation, transcription, and subtitling services from LAMSS. Stay informed about professional language services in Nepal."
                keywords="LAMSS, blogs, translation, interpretation, transcription, subtitling, language services, Nepal"
                image="https://via.placeholder.com/1200x630.png?text=LAMSS+Blogs"
            />
            <RouteHero data={data} />
            <Bloghero />

        </>
    )
}
