import { IconMail } from "@tabler/icons-react"
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
            <div className="footer-top">
                <div className="text">Subscribe to our newsletter now and be the first to know about Golden Fist's latest news!</div>
                <div className="input-btn">
                    <div className="input">
                        <IconMail stroke={1.5} />
                        <input type="text" placeholder="Email" />
                    </div>
                    <div className="btn">Subscribe</div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="left">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="tagline">Unleash Your Inner Warrior</div>
                </div>
                <div className="right">
                    <div className="links">
                    {
                        footerLink.map((link, index) => {
                            return (
                                <div className="link" key={index}>{link}</div>
                            )
                        })
                    }
                    </div>
                    <div className="sosmed">
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
            </div>
        </footer>
    )
}