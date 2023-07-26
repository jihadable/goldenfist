import logo from "../assets/golden-fist-logo.png"
import "../style/Footer.scss"

export default function Footer(){

    const footerSosmedIcon = [
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
            <path d="M16.5 7.5l0 .01"></path>
        </svg>,
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-tiktok" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z"></path>
        </svg>,
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path>
            <path d="M10 9l5 3l-5 3z"></path>
        </svg>
    ]

    const footerLink = ["Help center", "FAQs", "Terms", "Blog"]

    return (
        <footer className="footer">
            <div className="footer-left">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="tagline">Unleash Your Inner Warrior</div>
            </div>
            {/* <div className="footer-links">
            {
                footerLink.map((link, index) => {
                    return (
                        <div className="link" key={index}>{link}</div>
                    )
                })
            }
            </div> */}
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