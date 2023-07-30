import "../../style/AboutSection.scss"
import aboutImg from "../../assets/about-img.jpg"

export default function AboutSection(){
    return (
        <section className="about">
            <div className="about-header">About Us</div>
            <div className="about-content">
                <div className="text">
                    <p>We are the force behind change, pioneers in crafting unwavering visions and turning them into magnificent realities. Golden Fist embodies an unyielding spirit that resonates throughout the realms of business, martial arts, and boundless courage. Like the wondrous dance of sunlight at dusk, we illuminate the path to greatness.</p>
                    <p>With unparalleled expertise, countless wisdom, and a spirit that defies boundaries, we set new standards with every stride we take. Together with our partners, we unlock the doors to unprecedented success. Motivating and empowering those who dare to dream big is the true essence of Golden Fist.</p>
                </div>
                <div className="img">
                    <img src={aboutImg} alt="" />
                </div>
            </div>
        </section>
    )
}