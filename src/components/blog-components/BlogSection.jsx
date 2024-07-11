import { IconDatabase } from "@tabler/icons-react"
import { useEffect, useState } from "react"
import begginers from "../../assets/begginers.jpg"
import culture from "../../assets/culture.jpg"
import fight from "../../assets/fight.jpg"
import kids from "../../assets/kids.jpg"
import self_defense from "../../assets/self-defense.jpg"
import transforms_live from "../../assets/transforms_live.jpg"
import women from "../../assets/women.jpg"
import "../../style/BlogSection.scss"
import getDate from "../../utils/getDate"

export default function BlogSection(){

    const [blogData, setBlogData] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            setBlogData(
                [
                    {
                        id: "culture",
                        title: "Eksplorasi Budaya",
                        img: culture,
                        text: "Seni bela diri lebih dari sekadar latihan di atas matras. Bergabunglah dengan kami dalam eksplorasi makna budaya dan sosial dari seni bela diri di Golden Fist. Kami akan mendalami dampaknya terhadap seni, sejarah, dan praktik modern, menyoroti pengaruh luas yang dimilikinya dalam berbagai aspek kehidupan kita.",
                        tags: ["budaya", "sosial"]
                    },
                    {
                        id: "kids",
                        title: "Bela Diri untuk Anak-anak",
                        img: kids,
                        text: "Temukan berbagai manfaat memperkenalkan anak-anak ke dunia seni bela diri di Golden Fist. Kami akan membahas bagaimana program khusus kami tidak hanya meningkatkan kebugaran fisik, tetapi juga pengembangan karakter, disiplin, dan keterampilan hidup yang penting, memberikan fondasi yang kuat untuk masa depan mereka.",
                        tags: ["anak_anak", "pemula"]
                    },
                    {
                        id: "fight",
                        title: "Di balik Pertarungan",
                        img: fight,
                        text: "Seni bela diri adalah sebuah cara hidup, sebuah filosofi yang lebih dari sekadar pertarungan. Jelajahi aspek filosofis yang mendalam dari seni bela diri di Golden Fist, di mana rasa hormat, kerendahan hati, dan pengejaran tanpa henti untuk perbaikan diri adalah nilai-nilai inti yang membentuk karakter para praktisi kami.",
                        tags: ["kombat", "filosofi"]
                    },
                    {
                        id: "women",
                        title: "Wanita dalam bela diri",
                        img: women,
                        text: "Temukan perjalanan luar biasa para wanita dalam seni bela diri di Golden Fist. Kami akan mendalami pemberdayaan mendalam yang ditawarkan seni bela diri, baik secara fisik maupun mental, dan berbagi kisah inspiratif para praktisi wanita yang telah menemukan kekuatan dan kepercayaan diri di atas matras kami.",
                        tags: ["wanita", "inspirasi"]
                    },
                    {
                        id: "transforms_live",
                        title: "Bagaimana Bela Diri Merubah Kehidupan",
                        img: transforms_live,
                        text: "Di balik dari tendangan dan pukulan, seni bela diri adalah kekuatan yang transformatif. Telusuri dampak mendalam latihan seni bela diri di Golden Fist terhadap disiplin diri dan keyakinan diri, saat kami mendalami kisah nyata individu yang telah memanfaatkan kekuatannya.",
                        tags: ["hidup", "perubahan", "disiplin"]
                    },
                    {
                        id: "begginers",
                        title: "Panduan Bela Diri untuk Pemula",
                        img: begginers,
                        text: "Memulai perjalanan seni bela diri Anda? Jangan ragu. Panduan komprehensif di Golden Fist akan membimbing Anda melalui prinsip-prinsip dasar, teknik-teknik penting, dan berbagai pengalaman menarik yang menanti para pendatang baru dalam dunia seni bela diri.",
                        tags: ["esensi", "pemula", "fundamental"]
                    },
                    {
                        id: "self_defense",
                        title: "Seni dalam Pertahanan Diri",
                        img: self_defense,
                        text: "Terjunlah dalam dunia menarik bela diri dan pertahanan diri melalui Golden Fist Academy. Dalam artikel ini, kita akan mengulas secara mendalam berbagai disiplin seni bela diri yang kami tawarkan, memberikan pemahaman tentang bagaimana latihan ini tidak hanya meningkatkan kekuatan fisik tetapi juga mendorong ketangguhan mental dan pertumbuhan pribadi.",
                        tags: ["pertahanan_diri", "akademi"]
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
                                    Oleh Admin | {getDate(7 * index + 1)}
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
                                <div className="date">{getDate(7 * index + 1)}</div>
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