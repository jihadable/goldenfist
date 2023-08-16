import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import ClassesHero from "../components/classes-components/ClassesHero";
import ClassesSection from "../components/classes-components/ClassesSection";
import PricingSection from "../components/classes-components/PricingSection";

export default function Classes(){

    document.title = "Golden Fist | Classes"

    return (
        <>
        <Navbar />
        <ClassesHero />
        <ClassesSection />
        <PricingSection />
        <Footer />
        </>
    )
}