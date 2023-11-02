import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import ClassesSection from "../components/classes-components/ClassesSection";
import PricingSection from "../components/classes-components/PricingSection";
import Hero from "../components/Hero";

export default function Classes(){

    document.title = "Golden Fist | Classes"

    return (
        <>
        <Navbar />
        <Hero text={"あなたの真の可能性を解き放つ"} page={"classes"} />
        <ClassesSection />
        <PricingSection />
        <Footer />
        </>
    )
}