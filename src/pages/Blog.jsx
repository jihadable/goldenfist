import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import BlogSection from "../components/blog-components/BlogSection"

export default function Blog(){

    document.title = "Golden Fist | Blog"

    return (
        <>
        <Navbar />
        {/* Hearts Find Harmony */}
        <Hero text={"ハート・ファインド・ハーモニー"} page={"blog"} />
        <BlogSection />
        <Footer />
        </>
    )
}