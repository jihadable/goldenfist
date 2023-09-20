import logo from "../assets/golden-fist-logo.png"
import "../style/Footer.scss"
import { IconBrandInstagram, IconBrandTiktok, IconBrandYoutube } from "@tabler/icons-react"

export default function Footer(){

    const footerSosmedIcon = [
        <IconBrandInstagram stroke={1.5} />,
        <IconBrandTiktok stroke={1.5} />,
        <IconBrandYoutube stroke={1.5} />
    ]

    const footerLink = ["Help center", "Terms"]

    return (
        <footer className="footer">
            <div className="footer-left">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="tagline">Unleash Your Inner Warrior</div>
            </div>
            <div className="footer-right">
                <div className="footer-links">
                {
                    footerLink.map((link, index) => {
                        return (
                            <div className="link" key={index}>{link}</div>
                        )
                    })
                }
                </div>
                <div className="sosmed-links">
                {
                    footerSosmedIcon.map((icon, index) => {
                        return (
                            <div className="link" key={index}>{icon}</div>
                        )
                    })
                }
                </div>
                <div className="copyright">Privacy Policy | © 2023 Golden Fist</div>
            </div>
        </footer>
    )
}