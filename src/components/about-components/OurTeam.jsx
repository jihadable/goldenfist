import "../../style/OurTeam.scss"
import silatImg from "../../assets/teacher1.jpg"
import karateImg from "../../assets/teacher2.jpg"
import kungfuImg from "../../assets/teacher3.jpg"
import judoImg from "../../assets/teacher4.jpg"
import taekwondoImg from "../../assets/teacher5.jpg"
import muayThaiImg from "../../assets/teacher6.jpg"
import wingChunImg from "../../assets/teacher7.jpg"
import { IconBrandInstagram } from "@tabler/icons-react"
import { IconBrandTwitterFilled } from "@tabler/icons-react"
import { IconBrandFacebookFilled } from "@tabler/icons-react"

export default function OurTeam(){

    const team = [
        {
            name: "Malik Khan",
            job: "Silat",
            img: silatImg,
        },
        {
            name: "Takeshi Nakamura",
            job: "Karate",
            img: karateImg,
        },
        {
            name: "David Chen",
            job: "Taekwondo",
            img: taekwondoImg,
        },
        {
            name: "Mikhail Ivanov",
            job: "Judo",
            img: judoImg,
        },
        {
            name: "Lui Wei",
            job: "Kung Fu",
            img: kungfuImg,
        },
        {
            name: "Ethan Wong",
            job: "Muay Thai",
            img: muayThaiImg,
        },
        {
            name: "Kaito Yamamoto",
            job: "Wing Chun",
            img: wingChunImg,
        }
    ]

    return (
        <section className="our-team">
            <div className="our-team-header">Our team</div>
            <div className="our-team-content">
            {
                team.map((teacher, index) => {
                    return (
                        <div className="teacher" key={index}>
                            <img src={teacher.img} alt={teacher.name} />
                            <div className="teacher-info">
                                <div className="name">{teacher.name}</div>
                                <div className="job">{teacher.job}</div>
                                <div className="sosmed">
                                    <IconBrandFacebookFilled stroke={1.5} />
                                    <IconBrandTwitterFilled stroke={1.5} />
                                    <IconBrandInstagram stroke={1.5} />
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