import { IconChevronRight } from "@tabler/icons-react"
import "../../style/ContactSection.scss"
import { IconBrandInstagram } from "@tabler/icons-react"
import { IconBrandTiktok } from "@tabler/icons-react"
import { IconBrandYoutube } from "@tabler/icons-react"

export default function ContactSection(){

    const sosmedIcon = [
        <IconBrandInstagram stroke={1.5} />,
        <IconBrandTiktok stroke={1.5} />,
        <IconBrandYoutube stroke={1.5} />
    ]

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
                            <div className="item">Mon to Fri: 08:00 - 16:00</div>
                            <div className="item">Sat to Sun: 08:00 - 12:00</div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info-header">Information</div>
                        <div className="info-items">
                            <div className="item">+62 812 3456 7890</div>
                            <div className="item">goldenfist@email.com</div>
                        </div>
                    </div>
                    <div className="sosmed">
                        <div className="sosmed-header">Our Sosial Media</div>
                        <div className="sosmed-links">
                        {
                            sosmedIcon.map((icon, index) => {
                                return (
                                    <div className="link" key={index}>{icon}</div>
                                )
                            })
                        }  
                        </div>
                    </div>
                </div>
                <div className="form">
                    <form action="">
                        <div className="name">
                            <input type="text" placeholder="Name" />
                        </div>
                        <div className="email" >
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="message">
                            <textarea placeholder="Message" rows={7}></textarea>
                        </div>
                        <button type="submit">
                            Submit <IconChevronRight stroke={1.5} />
                        </button>
                    </form>
                </div>
            </div>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127365.52505733588!2d122.45464213199715!3d-3.9848743346685147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d98ecde0b6b7183%3A0x1397347f9e562fc7!2sKendari%2C%20Kota%20Kendari%2C%20Sulawesi%20Tenggara!5e0!3m2!1sid!2sid!4v1690627344888!5m2!1sid!2sid" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}