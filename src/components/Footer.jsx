import logo from "../assets/golden-fist-logo.png"

export default function Footer(){
    return (
        <footer className="footer">
            <div className="footer-left">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="tagline">Unleash Your Inner Warrior</div>
            </div>
            <div className="footer-right">
                <div className="links">
                {

                }
                </div>
                <div className="copyright">Privacy Policy | © 2023 Golden Fist</div>
            </div>
        </footer>
    )
}