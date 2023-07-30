import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../components/about-components/AboutHero";
import AboutSection from "../components/about-components/AboutSection";

export default function About(){

    document.title = "Golden Fist | About"

    return (
        <>
        <Navbar />
        <AboutHero />
        <AboutSection />
        <Footer />
        </>
    )
}