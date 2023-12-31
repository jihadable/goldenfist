import { useState } from "react"
import "../../style/Faqs.scss"

export default function Faqs(){

    const faqs = [
        {
            question: "What is Golden Fist?",
            answer: "Golden Fist is a martial arts training center dedicated to helping individuals reach the highest level of proficiency in various martial arts disciplines.",
        },
        {
            question: "Are there age restrictions for joining Golden Fist?",
            answer: "No, Golden Fist welcomes martial arts enthusiasts of all ages. We have programs designed for children, teenagers, and adults, ensuring a tailored experience for everyone."
        },
        {
            question: "What types of martial arts are taught at Golden Fist?",
            answer: "We teach a variety of martial arts disciplines including Karate, Taekwondo, Judo, Kung Fu, and more.",
        },
        {
            question: "Who are the instructors at Golden Fist?",
            answer: "Our instructors are martial arts experts with extensive experience in their respective disciplines. They are dedicated to helping you achieve your maximum potential.",
        },
        {
            question: "Is Golden Fist suitable for beginners?",
            answer: "Yes, Golden Fist welcomes all levels of experience, including beginners. Our instructors will work with you to build a strong foundation.",
        },
        {
            question: "What are the benefits of learning martial arts at Golden Fist?",
            answer: "Learning martial arts at Golden Fist not only enhances your physical skills but also helps develop discipline, confidence, and focus.",
        }
    ]

    const [showFaq, setShowFaq] = useState([])

    const handleFaqs = (index) => {
        if (!showFaq.includes(index)){
            setShowFaq(showFaq => [...showFaq, index])
        }
        else {
            let array = [...showFaq]
            
            let indexArray
            for (let i = 0 ; i < array.length ; i++){
                if (array[i] === index){
                    indexArray = i
                }
            }

            delete array[indexArray]

            setShowFaq([...array])
        }
    }

    return (
        <section className="faqs">
            <div className="faqs-header">FAQs</div>
            <div className="faqs-content">
            {
                faqs.map((faq, index) => {
                    return (
                        <div className="faq" key={index}>
                            <div className="faq-question">{faq.question}</div>
                            <div className="faq-answer">{faq.answer}</div>
                        </div>
                    )
                })
            }
            </div>
        </section>
    )
}