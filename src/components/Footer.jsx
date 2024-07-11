import { IconBrandInstagram, IconBrandTiktok, IconBrandYoutube, IconMail } from "@tabler/icons-react"
import logo from "../assets/golden-fist-logo.png"
import "../style/Footer.scss"

export default function Footer(){

    const footerSosmedIcon = [
        <IconBrandInstagram stroke={1.5} key={0} />,
        <IconBrandTiktok stroke={1.5} key={1} />,
        <IconBrandYoutube stroke={1.5} key={2} />
    ]

    const footerLink = ["Help center", "Terms"]

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="text">Langganan buletin kami sekarang dan jadilah yang pertama mengetahui berita terbaru dari Golden Fist!</div>
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
                    <div className="tagline">Gali keberanian dan potensi terbaik Anda</div>
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