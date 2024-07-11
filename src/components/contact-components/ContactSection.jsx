import { IconBrandInstagram, IconBrandTiktok, IconBrandYoutube, IconChevronRight } from "@tabler/icons-react"
import "../../style/ContactSection.scss"

export default function ContactSection(){

    const sosmedIcon = [
        <IconBrandInstagram stroke={1.5} key={0} />,
        <IconBrandTiktok stroke={1.5} key={1} />,
        <IconBrandYoutube stroke={1.5} key={2} />
    ]

    return (
        <section className="contact">
            <div className="contact-header">Kontak Kami</div>
            <div className="contact-content">
                <div className="side-info">
                    <div className="place">
                        <div className="place-header">Yogyakarta, Indonesia</div>
                        <div className="place-items">
                            <div className="item">Jl. Langsat.</div>
                            <div className="item">Yogyakarta, Indonesia.</div>
                        </div>
                    </div>
                    <div className="opening-hours">
                        <div className="opening-hours-header">Waktu Operasi</div>
                        <div className="opening-hours-items">
                            <div className="item">Sen to Jum: 08:00 - 16:00</div>
                            <div className="item">Sab to Min: 08:00 - 12:00</div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info-header">Kontak</div>
                        <div className="info-items">
                            <div className="item">+62 812 3456 7890</div>
                            <div className="item">goldenfist@email.com</div>
                        </div>
                    </div>
                    <div className="sosmed">
                        <div className="sosmed-header">Media Sosial</div>
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
                            Kirim <IconChevronRight stroke={1.5} />
                        </button>
                    </form>
                </div>
            </div>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63245.984386729084!2d110.30102278634307!3d-7.803159007939449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5787bd5b6bc5%3A0x21723fd4d3684f71!2sYogyakarta%2C%20Kota%20Yogyakarta%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sid!2sid!4v1720686254747!5m2!1sid!2sid" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}