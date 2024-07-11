import { IconArrowRight } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import "../../style/RecentBlog.scss"
import getDate from "../../utils/getDate"
import goTop from "../goTop"

export default function RecentBlog(){

    const recentBlogData = [
        {
            title: "Eksplorasi Budaya",
            text: "Seni bela diri lebih dari sekadar latihan di atas matras. Bergabunglah dengan kami dalam eksplorasi makna budaya dan sosial dari seni bela diri di Golden Fist."
        },
        {
            title: "Bela Diri untuk Anak-anak",
            text: "Temukan berbagai manfaat memperkenalkan anak-anak ke dunia seni bela diri di Golden Fist."
        },
        {
            title: "Di balik Pertarungan",
            text: "Seni bela diri adalah sebuah cara hidup, sebuah filosofi yang lebih dari sekadar pertarungan."
        }
    ]

    return (
        <section className="recent-blog">
            <div className="recent-blog-header">Blog Terbaru</div>
            <div className="recent-blog-content">
            {
                recentBlogData.map((item, index) => {
                    return (
                        <div className="item" key={index}>
                            <div className="date">{getDate(7 * index + 1)}</div>
                            <div className="title">{item.title}</div>
                            <p className="text">{item.text}</p>
                            <Link to="/blog" onClick={goTop}>
                                <span>Lebih lanjut</span>
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