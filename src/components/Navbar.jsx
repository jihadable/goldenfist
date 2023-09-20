import { useState } from "react"
import logo from "../assets/golden-fist-logo.png"
import "../style/Navbar.scss"
import { Link } from "react-router-dom"
import goTop from "../components/goTop"
import { IconX } from "@tabler/icons-react"
import { IconMenuDeep } from "@tabler/icons-react"
import { IconHome } from "@tabler/icons-react"
import { IconId } from "@tabler/icons-react"
import { IconMilitaryRank } from "@tabler/icons-react"
import { IconArticle } from "@tabler/icons-react"
import { IconMail } from "@tabler/icons-react"

export default function Navbar(){

    const navLinks = [
        {
            title: "Home",
            path: "/",
            svg: <IconHome stroke={1.5} />
        },
        {
            title: "About",
            path: "/about",
            svg: <IconId stroke={1.5} />
        },
        {
            title: "Classes",
            path: "/classes",
            svg: <IconMilitaryRank stroke={1.5} />
        },
        {
            title: "Blog",
            path: "/blog",
            svg: <IconArticle stroke={1.5} />
        },
        {
            title: "Contact",
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