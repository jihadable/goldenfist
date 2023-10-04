import "../../style/Testimonials.scss"
import test1 from "../../assets/test1.jpg"
import test2 from "../../assets/test2.jpg"
import test3 from "../../assets/test3.jpg"
import quote from "../../assets/quote.png"
import { useState } from "react"
import { IconArrowRight } from "@tabler/icons-react"
import { IconArrowLeft } from "@tabler/icons-react"
import { useRef } from "react"
import { useEffect } from "react"

export default function Testimonials(){

    const testimonials = [
        {
            name: "Richar Wilson",
            job: "College Lecturer",
            text: "Golden Fist not only improved my martial arts skills but also boosted my confidence.",
            img: test1
        },
        {
            name: "Robert Davis",
            job: "Firefighter",
            text: "Golden Fist taught me discipline and focus that I now apply to my career.",
            img: test2
        },
        {
            name: "William Miller",
            job: "Cop",
            text: "Resilience was my key takeaway at Golden Fist. It helped me overcome life's challenges.",
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
            <div className="testimonials-header">Testimonials</div>
            <div className="testimonials-container">
                <div className={`testimonial-content test${testIndex}`}>
                {
                    testimonials.map((test, index) => {
                        return (
                            <div className="testimonial" key={index}>
                                <div className="testimonial-info">
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