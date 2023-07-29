import Navbar from "../components/Navbar";
import PricingSection from "../components/pricing-components/PricingSection";
import Footer from "../components/Footer"

export default function Pricing(){
    return (
        <>
        <Navbar scrollLimit={true} />
        <PricingSection />
        <Footer />
        </>
    )
}