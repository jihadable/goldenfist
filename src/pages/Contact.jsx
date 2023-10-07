import Navbar from "../components/Navbar";
import ContactSection from "../components/contact-components/ContactSection";
import Footer from "../components/Footer"
import Hero from "../components/Hero";

export default function Contact(){

    document.title = "Golden Fist | Contact"

    return (
        <>
        <Navbar scrollLimit={true} />
        <Hero text={"Unite Mind and Body"} page={"contact"} />
        <ContactSection />
        <Footer />
        </>
    )
}