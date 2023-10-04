import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Facilities from "../components/home-components/Facilities";
import Galerry from "../components/home-components/Galerry";
import Hero from "../components/home-components/Hero";
import RecentBlog from "../components/home-components/RecentBlog";
import Testimonials from "../components/home-components/Testimonials";

export default function Home(){

    return (
        <>
        <Navbar />
        <Hero />
        <Galerry />
        <Facilities />
        <Testimonials />
        <RecentBlog />
        <Footer />
        </>
    )
}