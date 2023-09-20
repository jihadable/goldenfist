import { IconFocus2 } from "@tabler/icons-react"
import "../../style/Hero.scss"
import { Icon24Hours } from "@tabler/icons-react"
import { IconHandGrab } from "@tabler/icons-react"

export default function Hero(){
    return (
        <section className="hero">
            <div className="tagline">
                Unleash Your <span>Inner Warrior</span>
            </div>
            <Principles />
        </section>
    )
}

function Principles(){

    const principles = [
        {
            svg: <IconFocus2 stroke={1.5} />,
            header: "Focus",
            text: "Focus is the cornerstone of Golden Fist, teaching our students the art of concentration. We emphasize the importance of directing your energy and attention towards your goals, whether in training or in life."
        },
        {
            svg: <Icon24Hours stroke={1.5} />,
            header: "Discipline",
            text: "Discipline at Golden Fist means cultivating self-control and a strong work ethic. Our students learn to adhere to a structured training regimen and make consistent, positive choices both on and off the mat."
        },
        {
            svg: <IconHandGrab stroke={1.5} />,
            header: "Resilience",
            text: "Resilience is a core value at Golden Fist. We instill the ability to bounce back from setbacks, teaching students to embrace challenges as opportunities for growth and to never give up on their martial arts journey."
        }
    ]

    return (
        <div className="principles">
        {
            principles.map((principle, index) => {
                return (
                    <div className="principle" key={index}>
                        {principle.svg}
                        <div className="principle-header">{principle.header}</div>
                        <div className="principle-text">{principle.text}</div>
                    </div>
                )
            })
        }
        </div>
    )
}