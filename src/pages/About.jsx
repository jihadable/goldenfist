import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutSection from "../components/about-components/AboutSection";
import OurTeam from "../components/about-components/OurTeam";
import Faqs from "../components/about-components/Faqs";
import Hero from "../components/Hero";

export default function About(){

    document.title = "Golden Fist | About"

    return (
        <>
        <Navbar />
        {/* Find Your Balance */}
        <Hero text={"バランスを見つける"} page={"about"} />
        <AboutSection />
        <OurTeam />
        <Faqs />
        <Footer />
        </>
    )
}