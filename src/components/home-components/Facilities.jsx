import { IconAccessible, IconArrowRight, IconBarbell, IconMilk, IconYoga } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import facilitiesImg from "../../assets/facilities.jpg"
import "../../style/Facilities.scss"
import goTop from "../goTop"

export default function Facilities(){

    const facilitiesData = [
        {
            title: "Area Latihan Luas",
            svg: <IconAccessible stroke={1.5} />
        },
        {
            title: "Peralatan Modern",
            svg: <IconBarbell stroke={1.5} />
        },
        {
            title: "Penyediaan Air Minum",
            svg: <IconMilk stroke={1.5} />
        },
        {
            title: "Meditasi dan Yoga",
            svg: <IconYoga stroke={1.5} />
        }
    ]

    return (
        <div className="facilities">
            <div className="img">
                <img src={facilitiesImg} alt="Image" />
            </div>
            <div className="content">
                <div className="title">Fasilitas Latihan Kelas Dunia</div>
                <div className="text">Kami bangga menyediakan fasilitas latihan kelas dunia untuk mendukung perjalanan seni bela diri Anda. Jelajahi berbagai fasilitas yang kami tawarkan untuk menemukan bagaimana kami berkomitmen pada pertumbuhan dan kesuksesan Anda dalam disiplin seni bela diri.</div>
                <div className="facilities-content">
                    <div className="facilities-items">
                    {facilitiesData.map((item, index) => (
                        <div className="item" key={index}>
                            <div className="svg">
                                {item.svg}
                            </div>
                            <div className="item-title">{item.title}</div>
                        </div>
                    ))}
                    </div>
                    <Link to={"/classes"} onClick={goTop} className="btn">
                        <span>Semua kelas</span>
                        <IconArrowRight stroke={1.5} />
                    </Link>
                </div>
            </div>
        </div>
    )
}