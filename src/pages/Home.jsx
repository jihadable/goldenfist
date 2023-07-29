import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Galerry from "../components/home-components/Galerry";
import Hero from "../components/home-components/Hero";
import Testimonials from "../components/home-components/Testimonials";
import { useState } from "react";

export default function Home(){

    window.onscroll = function() {myFunction()};

    const [scrollLimit, setScrollLimit] = useState(false)

    window.addEventListener("scroll", function(){
        if (document.documentElement.scrollTop > window.innerHeight){
            setScrollLimit(true)
        }
        else {
            setScrollLimit(false)
        }
    })

    return (
        <>
        <Navbar scrollLimit={scrollLimit} />
        <Hero />
        <Galerry />
        <Testimonials />
        <Footer />
        </>
    )
}