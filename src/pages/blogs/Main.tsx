import RouteHero from '@/components/layout/HeroPage'
import Bloghero from './Bloghero'

const data = {
    title: 'Blogs',
    image: "/lamss1.png",
    route: true
}
export default function BlogMain() {
    return (
        <>
            <RouteHero data={data} />
            <Bloghero />

        </>
    )
}
