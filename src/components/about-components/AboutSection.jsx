import "../../style/AboutSection.scss"
import aboutImg1 from "../../assets/about-img1.jpg"
import aboutImg2 from "../../assets/about-img2.jpg"

export default function AboutSection(){
    return (
        <section className="about">
            <div className="about-header">About Us</div>
            <div className="about-content">
                <div className="item">
                    <div className="text">
                        <p>We are the force behind change, pioneers in crafting unwavering visions and turning them into magnificent realities. Golden Fist embodies an unyielding spirit that resonates throughout the realms of business, martial arts, and boundless courage. Like the wondrous dance of sunlight at dusk, we illuminate the path to greatness.</p>
                        <p>With unparalleled expertise, countless wisdom, and a spirit that defies boundaries, we set new standards with every stride we take. Together with our partners, we unlock the doors to unprecedented success. Motivating and empowering those who dare to dream big is the true essence of Golden Fist.</p>
                    </div>
                    <div className="img">
                        <img src={aboutImg1} alt="Image" />
                    </div>
                </div>
                <div className="item">
                    <div className="text">
                        <p>We elevate the brave to embrace self-challenge, conquer fears, and reach the peaks of glory. Just like legendary heroes wielding their fists with fervor, we channel our energy to transform the world, one magnificent step at a time.</p>
                        <p>Join us on this extraordinary journey, for together, we shall inscribe history and leave indelible golden marks upon this world. Golden Fist, not just a company, but living dreams and an indomitable spirit. Let us forge the bonds and together, seize the unforeseen bright future ahead.</p>
                    </div>
                    <div className="img img2">
                        <img src={aboutImg2} alt="Image" />
                    </div>
                </div>
            </div>
        </section>
    )
}