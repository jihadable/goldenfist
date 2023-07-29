import "../../style/ContactSection.scss"

export default function ContactSection(){

    const sosmedIcon = [
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
                            <div className="item">+62 823 5239 5596</div>
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
                            Submit
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M9 6l6 6l-6 6"></path>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127365.52505733588!2d122.45464213199715!3d-3.9848743346685147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d98ecde0b6b7183%3A0x1397347f9e562fc7!2sKendari%2C%20Kota%20Kendari%2C%20Sulawesi%20Tenggara!5e0!3m2!1sid!2sid!4v1690627344888!5m2!1sid!2sid" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}