import { Icon24Hours, IconFocus2, IconHandGrab } from "@tabler/icons-react"
import "../../style/HomeHero.scss"

export default function HomeHero(){
    return (
        <section className="home-hero">
            {/* Unleash Your Inner Warrior */}
            <div className="tagline">内なる戦士を解き放て</div>
            <Principles />
        </section>
    )
}

function Principles(){

    const principles = [
        {
            svg: <IconFocus2 stroke={1.5} />,
            header: "Fokus",
            text: "Fokus menjadi kunci utama yang kami ajarkan kepada para murid kami dalam seni konsentrasi. Kami menekankan pentingnya mengarahkan energi dan perhatian Anda menuju tujuan, baik itu dalam latihan maupun kehidupan sehari-hari."
        },
        {
            svg: <Icon24Hours stroke={1.5} />,
            header: "Disiplin",
            text: "Di Golden Fist, disiplin berarti membudayakan kontrol diri dan etos kerja yang kuat. Para murid kami belajar untuk mematuhi regimen latihan yang terstruktur dan membuat pilihan positif secara konsisten, baik di atas maupun di luar tatami."
        },
        {
            svg: <IconHandGrab stroke={1.5} />,
            header: "Ketangguhan",
            text: "Ketangguhan adalah nilai inti yang kami tanamkan. Kami mengajarkan kemampuan untuk bangkit dari keterpurukan, menghadapi tantangan sebagai peluang untuk berkembang, dan tidak pernah menyerah dalam perjalanan seni bela diri mereka."
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