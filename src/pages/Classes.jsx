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
        <Hero text={"Unlock Your True Potential"} page={"classes"} />
        <ClassesSection />
        <PricingSection />
        <Footer />
        </>
    )
}