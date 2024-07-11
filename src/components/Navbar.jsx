import { IconArticle, IconHome, IconId, IconMail, IconMenuDeep, IconMilitaryRank, IconX } from "@tabler/icons-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/golden-fist-logo.png"
import goTop from "../components/goTop"
import "../style/Navbar.scss"

export default function Navbar(){

    const navLinks = [
        {
            title: "Beranda",
            path: "/",
            svg: <IconHome stroke={1.5} />
        },
        {
            title: "Tentang",
            path: "/about",
            svg: <IconId stroke={1.5} />
        },
        {
            title: "Kelas",
            path: "/classes",
            svg: <IconMilitaryRank stroke={1.5} />
        },
        {
            title: "Blog",
            path: "/blog",
            svg: <IconArticle stroke={1.5} />
        },
        {
            title: "Kontak",
            path: "/contact",
            svg: <IconMail stroke={1.5} />
        }
    ]

    const [scrollLimit, setScrollLimit] = useState(false)

    window.addEventListener("scroll", function(){
        if (document.documentElement.scrollTop > window.innerHeight){
            setScrollLimit(true)
        }
        else {
            setScrollLimit(false)
        }
    })

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
        <nav className="navbar">
            <Link to="/" onClick={goTop} className="navbar-logo">
                <img src={logo} alt="Logo" />
            </Link>
            <div className={`navbar-links ${showMobileMenu ? "active" : ""}`}>
            {
                navLinks.map((item, index) => {
                    return (
                        <Link to={item.path} onClick={goTop} key={index}>
                            {item.svg}
                            <span className={`${scrollLimit ? "black" : ""}`}>{item.title}</span>
                        </Link>
                    )
                })
            }
                <div className="close-btn" onClick={() => {setShowMobileMenu(false)}}>
                    <IconX stroke={1.5} />
                </div>
            </div>
            <div className={`navbar-mobile-btn ${scrollLimit ? "black" : ""}`} onClick={() => {setShowMobileMenu(true)}}>
                <IconMenuDeep stroke={1.5} />
            </div>
        </nav>
    )
}