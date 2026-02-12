import HomeAboutSection from "./components/About";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Stats from "./components/Stats";
import TeamCarousel from "./components/Team";

export default function HomeMain() {
    return (
        <>
            <Hero />
            <HomeAboutSection />
            <Stats />
            <Service />
            <TeamCarousel />
        </>
    )
}
