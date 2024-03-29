import "../../style/BlogSection.scss"
import { IconDatabase } from "@tabler/icons-react"
import { useState, useEffect } from "react"
import culture from "../../assets/culture.jpg"
import kids from "../../assets/kids.jpg"
import fight from "../../assets/fight.jpg"
import women from "../../assets/women.jpg"
import transforms_live from "../../assets/transforms_live.jpg"
import begginers from "../../assets/begginers.jpg"
import self_defense from "../../assets/self-defense.jpg"

export default function BlogSection(){

    const [blogData, setBlogData] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            setBlogData(
                [
                    {
                        id: "culture",
                        title: "A Cultural Exploration",
                        img: culture,
                        text: "Martial arts extend far beyond training mats. Join us in an exploration of the cultural and societal significance of martial arts at Golden Fist. We'll delve into its impact on art, history, and modern-day practices, highlighting the broader influence it wields in various aspects of our lives.",
                        tags: ["culture", "society"],
                        date: getDate(1),
                    },
                    {
                        id: "kids",
                        title: "Martial Arts for Kids",
                        img: kids,
                        text: "Uncover the myriad benefits of introducing children to the world of martial arts at Golden Fist. We'll discuss how our specialized programs foster not only physical fitness but also character development, discipline, and essential life skills, providing a strong foundation for their future.",
                        tags: ["kids", "beginners"],
                        date: getDate(8),
                    },
                    {
                        id: "fight",
                        title: "Beyond the Fight",
                        img: fight,
                        text: "Martial arts is a way of life, a philosophy that transcends combat. Explore the profound philosophical aspects of martial arts at Golden Fist, where respect, humility, and the relentless pursuit of self-improvement are core values that shape the character of our practitioners.",
                        tags: ["combat", "philosophy"],
                        date: getDate(15),
                    },
                    {
                        id: "women",
                        title: "Women Empowerment Through Martial Arts",
                        img: women,
                        text: "Discover the incredible journey of women in martial arts at Golden Fist. We'll delve into the profound empowerment that martial arts offers, both physically and mentally, and share the inspiring stories of female practitioners who have found strength and confidence on our mats.",
                        tags: ["women", "inspiring"],
                        date: getDate(22),
                    },
                    {
                        id: "transforms_live",
                        title: "How Martial Arts Transforms Lives",
                        img: transforms_live,
                        text: "Beyond kicks and punches, martial arts is a transformative force. Explore the profound impact of martial arts training at Golden Fist on personal discipline and self-assurance, as we delve into real-life stories of individuals who have harnessed its power.",
                        tags: ["live", "transformative", "discipline"],
                        date: getDate(29),
                    },
                    {
                        id: "begginers",
                        title: "Beginners' Guide to Martial Arts",
                        img: begginers,
                        text: "Embarking on your martial arts journey? Look no further. This comprehensive guide at Golden Fist will walk you through the fundamental principles, essential techniques, and the rich tapestry of experiences awaiting newcomers to the world of martial arts.",
                        tags: ["essential", "beginners", "fundamental"],
                        date: getDate(36),
                    },
                    {
                        id: "self_defense",
                        title: "The Art of Self-Defense",
                        img: self_defense,
                        text: "Immerse yourself in the captivating world of self-defense and martial arts through Golden Fist Academy. In this article, we'll take an in-depth look at the diverse range of martial arts disciplines we offer, shedding light on how these practices not only enhance physical prowess but also foster mental fortitude and personal growth.",
                        tags: ["self_defense", "academy"],
                        date: getDate(43),
                    }
                ]
            )
        }, 3000)
    }, [])

    return (
        <section className="blog">
            <div className="blog-list">
            {
                blogData &&
                blogData.map((item, index) => {
                    return (
                        <div className="blog-item" id={item.title.replace(" ", "_").toLowerCase()} key={index}>
                            <div className="img">
                                <img src={item.img} alt="Image" />
                            </div>
                            <div className="info">
                                <div className="date">
                                    <IconDatabase stroke={1.5} />
                                    By Admin | {item.date}
                                </div>
                                <div className="title">{item.title}</div>
                                <div className="text">{item.text}</div>
                                <div className="tags">
                                {
                                    item.tags.map((tag, index) => {
                                        return <div className="tag" key={index}>#{tag}</div>
                                    })
                                }
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            {
                !blogData &&
                [1,2,3,4,5,6,7].map(item => {
                    return <BlogSkeleton key={item} />
                })   
            }
            </div>
            <div className="blog-nav">
            {
                blogData &&
                blogData.map((item, index) => {
                    return (
                        <a href={`/blog#${item.title.replaceAll(" ", "_").toLowerCase()}`} className="nav-item" key={index}>
                            <div className="img">
                                <img src={item.img} alt="Image" />
                            </div>
                            <div className="info">
                                <div className="title">{item.title}</div>
                                <div className="tags">
                                {
                                    item.tags.map(tag => {
                                        return ` #${tag}`
                                    })
                                }
                                </div>
                                <div className="date">{item.date}</div>
                            </div>
                        </a>
                    )
                })
            }
            {
                !blogData &&
                [1,2,3,4,5,6,7].map(item => {
                    return <BlogNavSkeleton key={item} />
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

function BlogSkeleton(){
    return (
        <div className="blog-skeleton">
            <div className="img"></div>
            <div className="info">
                <div className="date"></div>
                <div className="title"></div>
                <div className="text"></div>
                <div className="tags"></div>
            </div>
            <div className="blog-skeleton-animation"></div>
        </div>
    )
}

function BlogNavSkeleton(){
    return (
        <div className="blog-nav-skeleton-item">
            <div className="img"></div>
            <div className="info">
                <div className="title"></div>
                <div className="tags"></div>
                <div className="date"></div>
            </div>
            <div className="blog-nav-skeleton-animation"></div>
        </div>
    )
}