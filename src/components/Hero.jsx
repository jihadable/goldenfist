import "../style/Hero.scss"

export default function Hero({ text, page }){

    return (
        <section className={`hero ${page}-page`}>
            <div className="tagline">{text}</div>
        </section>
    )
}