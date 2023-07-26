import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Galerry from "../components/home-components/Galerry";
import Hero from "../components/home-components/Hero";

export default function Home(){
    return (
        <>
        <Navbar />
        <Hero />
        <Galerry />
        <Footer />
        </>
    )
}