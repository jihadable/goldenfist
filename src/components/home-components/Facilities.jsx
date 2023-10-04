import { IconYoga } from "@tabler/icons-react"
import { IconAccessible } from "@tabler/icons-react"
import { IconMilk } from "@tabler/icons-react"
import { IconBarbell } from "@tabler/icons-react"
import facilitiesImg from "../../assets/facilities.jpg"
import "../../style/Facilities.scss"
import { Link } from "react-router-dom"
import goTop from "../goTop"
import { IconArrowRight } from "@tabler/icons-react"

export default function Facilities(){

    const facilitiesData = [
        {
            title: "Spacious Training Area",
            svg: <IconAccessible stroke={1.5} />
        },
        {
            title: "State-of-the-Art Equipment",
            svg: <IconBarbell stroke={1.5} />
        },
        {
            title: "Hydration Stations",
            svg: <IconMilk stroke={1.5} />
        },
        {
            title: "Meditation and Yoga Studio",
            svg: <IconYoga stroke={1.5} />
        }
    ]

    return (
        <div className="facilities">
            <div className="img">
                <img src={facilitiesImg} alt="Image" />
            </div>
            <div className="content">
                <div className="title">World-Class Training Facilities</div>
                <div className="text">At Golden Fist, we take pride in providing world-class training facilities to support your martial arts journey.Explore the range of facilities we offer to discover how we are dedicated to your growth and success in the martial arts discipline.</div>
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
                        <span>Classes</span>
                        <IconArrowRight stroke={1.5} />
                    </Link>
                </div>
            </div>
        </div>
    )
}