import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Facilities from "../components/home-components/Facilities";
import Galerry from "../components/home-components/Galerry";
import HomeHero from "../components/home-components/HomeHero";
import RecentBlog from "../components/home-components/RecentBlog";
import Testimonials from "../components/home-components/Testimonials";

export default function Home(){

    return (
        <>
        <Navbar />
        <HomeHero />
        <Galerry />
        <Facilities />
        <Testimonials />
        <RecentBlog />
        <Footer />
        </>
    )
}