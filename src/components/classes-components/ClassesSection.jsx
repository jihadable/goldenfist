import "../../style/ClassesSection.scss"
import silatImg from "../../assets/silat.jpg"
import karateImg from "../../assets/karate.jpg"
import kungfuImg from "../../assets/kung-fu.jpg"
import judoImg from "../../assets/judo.jpg"
import taekwondoImg from "../../assets/taekwondo.jpg"
import muayThaiImg from "../../assets/muay-thai.jpg"
import wingChunImg from "../../assets/wing-chun.jpg"

export default function ClassesSection(){

    const classes = [
        {
            title: "Silat",
            teacher: "Malik Khan",
            img: silatImg
        },
        {
            title: "Karate",
            teacher: "Takeshi Nakamura",
            img: karateImg
        },
        {
            title: "Taekwondo",
            teacher: "David Chen",
            img: taekwondoImg
        },
        {
            title: "Judo",
            teacher: "Mikhail Ivanov",
            img: judoImg
        },
        {
            title: "Kung Fu",
            teacher: "Lui Wei",
            img: kungfuImg
        },
        {
            title: "Muay Thai",
            teacher: "Ethan Wong",
            img: muayThaiImg
        },
        {
            title: "Wing Chun",
            teacher: "Kaito Yamamoto",
            img: wingChunImg
        }
    ]

    return (
        <section className="classes">
            <div className="classes-header">Our Classes</div>
            <div className="classes-content">
            {
                classes.map((kelas, index) => {
                    return (
                        <div className="class" key={index}>
                            <img src={kelas.img} alt={kelas.title} />
                            <div className="class-info">
                                <div className="title">{kelas.title}</div>
                                <div className="teacher">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                                    </svg>
                                    <span>{kelas.teacher}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </section>
    )
}