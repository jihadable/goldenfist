import Navbar from "../components/Navbar";
import ContactSection from "../components/contact-components/ContactSection";
import Footer from "../components/Footer"
import Hero from "../components/Hero";

export default function Contact(){

    document.title = "Golden Fist | Contact"

    return (
        <>
        <Navbar scrollLimit={true} />
        {/* Unite Mind and Body */}
        <Hero text={"心と体を一つにする"} page={"contact"} />
        <ContactSection />
        <Footer />
        </>
    )
}