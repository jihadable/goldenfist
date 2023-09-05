import { useState } from "react"
import logo from "../assets/golden-fist-logo.png"
import "../style/Navbar.scss"

export default function Navbar(){

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
            <a href="/" className="navbar-logo">
                <img src={logo} alt="Logo" />
            </a>
            <div className={`navbar-links ${showMobileMenu ? "active" : ""}`}>
                <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
                    </svg>
                    <span className={`${scrollLimit ? "black" : ""}`}>Home</span>
                </a>
                <a href="/about">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-id" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"></path>
                        <path d="M9 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                        <path d="M15 8l2 0"></path>
                        <path d="M15 12l2 0"></path>
                        <path d="M7 16l10 0"></path>
                    </svg>
                    <span className={`${scrollLimit ? "black" : ""}`}>About Us</span>
                </a>
                <a href="/classes">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-military-rank" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M17 7v13h-10v-13l5 -3z"></path>
                        <path d="M10 13l2 -1l2 1"></path>
                        <path d="M10 17l2 -1l2 1"></path>
                        <path d="M10 9l2 -1l2 1"></path>
                    </svg>
                    <span className={`${scrollLimit ? "black" : ""}`}>Classes</span>
                </a>
                <a href="/contact">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                        <path d="M3 7l9 6l9 -6"></path>
                    </svg>
                    <span className={`${scrollLimit ? "black" : ""}`}>Contact</span>
                </a>
                <div className="close-btn" onClick={() => {setShowMobileMenu(false)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M18 6l-12 12"></path>
                        <path d="M6 6l12 12"></path>
                    </svg>
                </div>
            </div>
            <div className="navbar-mobile-btn" onClick={() => {setShowMobileMenu(true)}}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-deep" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 6h16"></path>
                    <path d="M7 12h13"></path>
                    <path d="M10 18h10"></path>
                </svg>
            </div>
        </nav>
    )
}