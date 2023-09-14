import "../../style/PricingSection.scss";
import img1 from "../../assets/pricing1.jpg"
import img2 from "../../assets/pricing2.jpg"
import img3 from "../../assets/pricing3.jpg"

export default function PricingSection(){

    const priceData = [
        {
            title: "Basic",
            img: img1,
            price: 40,
            meeting: 1,
            benefits: ["Expert instruction", "Structured curriculum", "Progress tracking", "Access to workshops and events", "Personalized training plans"]
        },
        {
            title: "Advanced",
            img: img2,
            price: 65,
            meeting: 2,
            benefits: ["Expert instruction", "Structured curriculum", "Progress tracking", "Access to workshops and events", "Personalized training plans", "Discounts on merchandise", "Certification", "Exclusive master classes"]
        },
        {
            title: "Premium",
            img: img3,
            price: 100,
            meeting: 3,
            benefits: ["Expert instruction", "Structured curriculum", "Progress tracking", "Access to workshops and events", "Personalized training plans", "Discounts on merchandise", "Certification", "Exclusive master classes", "Priority support", "Special events and retreats"]
        }
    ]

    return (
        <section className="pricing">
            <div className="pricing-header">Pricing Chart</div>
            <div className="pricing-content">
            {
                priceData.map((item, index) => {
                    return (
                        <div className="price" key={index}>
                            <div className="price-top">
                                <div className="img">
                                    <img src={item.img} alt="Martial Art" />
                                </div>
                                <div className="title">{item.title}</div>
                            </div>
                            <div className="price-price"><span>${item.price}</span>/month</div>
                            <div className="price-benefits">
                            {
                                item.benefits.map((benefit, index) => {
                                    return <div className="benefit" key={index}>{benefit}</div>
                                })
                            }
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </section>
    )
}