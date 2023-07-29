import "../../style/ContactSection.scss"

export default function ContactSection(){
    return (
        <section className="contact">
            <div className="contact-header">Contact Us</div>
            <div className="contact-content">
                <div className="side-info">
                    <div className="place">
                        <div className="place-header">Kendari, Indonesia</div>
                        <div className="place-items">
                            <div className="item">4 Youngster Street.</div>
                            <div className="item">Lapulu, UJ14, Kendari.</div>
                        </div>
                    </div>
                    <div className="opening-hours">
                        <div className="opening-hours-header">Opening Hours</div>
                        <div className="opening-hours-items">
                            <div className="item"></div>
                            <div className="item"></div>
                        </div>
                    </div>
                    <div className="info"></div>
                    <div className="sosmed"></div>
                </div>
                <div className="form">
                    <form action="">
                        <div className="name">
                            <input type="text" placeholder="Name" />
                        </div>
                        <div className="email">
                            <input type="email" />
                        </div>
                        <div className="message">
                            <textarea cols="30" rows="10"></textarea>
                        </div>
                    </form>
                </div>
            </div>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127365.52505733588!2d122.45464213199715!3d-3.9848743346685147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d98ecde0b6b7183%3A0x1397347f9e562fc7!2sKendari%2C%20Kota%20Kendari%2C%20Sulawesi%20Tenggara!5e0!3m2!1sid!2sid!4v1690627344888!5m2!1sid!2sid" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}