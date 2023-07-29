import Navbar from "../components/Navbar";
import ContactSection from "../components/contact-components/ContactSection";
import Footer from "../components/Footer"

export default function Contact(){
    return (
        <>
        <Navbar scrollLimit={true} />
        <ContactSection />
        <Footer />
        </>
    )
}