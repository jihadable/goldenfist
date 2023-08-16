import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Faqs from "../components/home-components/Faqs";
import Galerry from "../components/home-components/Galerry";
import Hero from "../components/home-components/Hero";
import Testimonials from "../components/home-components/Testimonials";

export default function Home(){

    return (
        <>
        <Navbar />
        <Hero />
        <Galerry />
        <Faqs />
        <Testimonials />
        <Footer />
        </>
    )
}