import Navbar from "../components/Navbar";
import ContactSection from "../components/contact-components/ContactSection";
import Footer from "../components/Footer"
import ContactHero from "../components/contact-components/ContactHero";

export default function Contact(){
    return (
        <>
        <Navbar scrollLimit={true} />
        <ContactHero />
        <ContactSection />
        <Footer />
        </>
    )
}