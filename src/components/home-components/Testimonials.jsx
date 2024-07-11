import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"
import { useState } from "react"
import quote from "../../assets/quote.png"
import test1 from "../../assets/test1.jpg"
import test2 from "../../assets/test2.jpg"
import test3 from "../../assets/test3.jpg"
import "../../style/Testimonials.scss"

export default function Testimonials(){

    const testimonials = [
        {
            name: "Richar Wilson",
            job: "Dosen",
            text: "Golden Fist tidak hanya meningkatkan kemampuan bela diri saya, tapi juga meningkatkan rasa percaya diri.",
            img: test1
        },
        {
            name: "Robert Davis",
            job: "Pemadam Kebakaran",
            text: "Golden Fist mengajarkanku disiplin dan fokus sehingga bisa menjadi seorang Pemadam Kebakaran.",
            img: test2
        },
        {
            name: "William Miller",
            job: "Polisi",
            text: "Ketangguhan merukan kunci yang saya ambil dari Golden Fist. Itu membantuku melewati rintangan kehidupan.",
            img: test3
        }
    ]

    const [testIndex, setTestIndex] = useState(0)

    const changeTestIndex = (direction) => {
        if (direction === "left" && testIndex > 0){
            setTestIndex(testIndex - 1)
        }
        else if (direction === "right" && testIndex < 2){
            setTestIndex(testIndex + 1)
        }
    }

    return (
        <section className="testimonials">
            <div className="testimonials-header">Testimoni</div>
            <div className="testimonials-container">
                <div className={`testimonial-content test${testIndex}`}>
                {
                    testimonials.map((test, index) => {
                        return (
                            <div className="testimonial" key={index}>
                                <div className="img">
                                    <img src={test.img} alt={test.name} />
                                </div>
                                <div className="test-info">
                                    <img src={quote} alt="Quote" />
                                    <div className="text">{test.text}</div>
                                    <div className="name">{test.name}</div>
                                    <div className="job">{test.job}</div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <div className="btns">
                <div className="left" onClick={() => {changeTestIndex("left")}}>
                    <IconArrowLeft stroke={1.5} />
                </div>
                <div className="right" onClick={() => {changeTestIndex("right")}}>
                    <IconArrowRight stroke={1.5} />
                </div>
            </div>
        </section>
    )   
}