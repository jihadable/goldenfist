import { Link } from "react-router-dom"
import "../../style/RecentBlog.scss"
import goTop from "../goTop"
import { IconArrowRight } from "@tabler/icons-react"

export default function RecentBlog(){

    const recentBlogData = [
        {
            title: "A Cultural Exploration",
            date: `${getDate(1)}`,
            text: "Martial arts extend far beyond training mats. Join us in an exploration of the cultural and societal significance of martial arts."
        },
        {
            title: "Martial Arts for Kids",
            date: `${getDate(8)}`,
            text: "Uncover the myriad benefits of introducing children to the world of martial arts"
        },
        {
            title: "Beyond the Fight",
            date: `${getDate(15)}`,
            text: "Martial arts is a way of life, a philosophy that transcends combat. Explore the profound philosophical aspects of martial arts"
        }
    ]

    return (
        <section className="recent-blog">
            <div className="recent-blog-header">Recent Blog</div>
            <div className="recent-blog-content">
            {
                recentBlogData.map((item, index) => {
                    return (
                        <div className="item" key={index}>
                            <div className="date">{item.date}</div>
                            <div className="title">{item.title}</div>
                            <p className="text">{item.text}</p>
                            <Link to="/blog" onClick={goTop}>
                                <span>Read more</span>
                                <IconArrowRight stroke={1.5} />
                            </Link>
                        </div>
                    )
                })
            }
            </div>
        </section>
    )
}

function getDate(number){
    let day = new Date()
    day.setDate(day.getDate() - number)

    return day.toDateString().slice(4)
}