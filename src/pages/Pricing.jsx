import Navbar from "../components/Navbar";
import PricingSection from "../components/pricing-components/PricingSection";
import Footer from "../components/Footer"
import PricingHero from "../components/pricing-components/PricingHero";

export default function Pricing(){

    document.title = "Golden Fist | Pricing"

    return (
        <>
        <Navbar />
        <PricingHero />
        <PricingSection />
        <Footer />
        </>
    )
}