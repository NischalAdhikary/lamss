import RouteHero from "@/components/layout/HeroPage";
import Mission from "./components/Mission";
import WorkingProcess from "./components/Process";
import Story from "./components/Story";

const data = {
    image: '/lamss1.png',
    title: 'About Us',
    route: true
}
export default function AboutMain() {
    return (
        <>
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
