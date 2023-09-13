import "../../style/Testimonials.scss"
import test1 from "../../assets/test1.jpg"
import test2 from "../../assets/test2.jpg"
import test3 from "../../assets/test3.jpg"
import quote from "../../assets/quote.png"
import { useState } from "react"

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
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-left" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M5 12l14 0"></path>
                        <path d="M5 12l6 6"></path>
                        <path d="M5 12l6 -6"></path>
                    </svg>
                </div>
                <div className="right" onClick={() => {changeTestIndex("right")}}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M5 12l14 0"></path>
                        <path d="M13 18l6 -6"></path>
                        <path d="M13 6l6 6"></path>
                    </svg>
                </div>
            </div>
        </section>
    )   
}