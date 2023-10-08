import "../../style/BlogSection.scss"
import { IconDatabase } from "@tabler/icons-react"
import { useState, useEffect } from "react"

export default function BlogSection(){

    const [blogData, setBlogData] = useState(null)
    const blog_api_endpoint = import.meta.env.VITE_BLOG_API_ENDPOINT

    useEffect(() => {
        setTimeout(async() => {
            let response = await fetch(blog_api_endpoint)
            response = await response.json()
            response = response.map((item, index) => ({...item, tags: JSON.parse(item.tags), date: getDate(1 + 7 * index)}))

            setBlogData(response)
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
                        <a href={`/blog#${item.title.replace(" ", "_").toLowerCase()}`} className="nav-item" key={index}>
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