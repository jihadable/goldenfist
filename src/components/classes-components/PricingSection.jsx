import "../../style/PricingSection.scss";

export default function PricingSection(){

    const priceData = [
        {
            name: "Basic",
            price: 40,
            meeting: 1,
            benefits: ["Expert instruction", "Structured curriculum", "Progress tracking", "Access to workshops and events", "Personalized training plans"]
        },
        {
            name: "Advanced",
            price: 65,
            meeting: 2,
            benefits: ["Expert instruction", "Structured curriculum", "Progress tracking", "Access to workshops and events", "Personalized training plans", "Discounts on merchandise", "Certification", "Exclusive master classes"]
        },
        {
            name: "Premium",
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
                            <div className="price-name">{item.name}</div>
                            <div className="price-price"><span>${item.price}</span>/month</div>
                            <div className="line"></div>
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