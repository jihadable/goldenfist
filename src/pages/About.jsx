import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../components/about-components/AboutHero";
import AboutSection from "../components/about-components/AboutSection";
import OurTeam from "../components/about-components/OurTeam";

export default function About(){

    document.title = "Golden Fist | About"

    return (
        <>
        <Navbar />
        <AboutHero />
        <AboutSection />
        <OurTeam />
        <Footer />
        </>
    )
}