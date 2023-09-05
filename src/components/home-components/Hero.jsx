import "../../style/Hero.scss"

export default function Hero(){
    return (
        <section className="hero">
            <div className="tagline">
                Unleash Your <span>Inner Warrior</span>
            </div>
            <Principles />
        </section>
    )
}

function Principles(){

    const principles = [
        {
            svg: 
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-focus-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="12" cy="12" r=".5" fill="currentColor"></circle>
                <path d="M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                <path d="M12 3l0 2"></path>
                <path d="M3 12l2 0"></path>
                <path d="M12 19l0 2"></path>
                <path d="M19 12l2 0"></path>
            </svg>,
            header: "Focus",
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa accusamus maiores sit quisquam fugit repudiandae corrupti obcaecati dolorum dolore omnis.`
        },
        {
            svg: 
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-24-hours" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"></path>
                <path d="M4 13a8.094 8.094 0 0 0 3 5.24"></path>
                <path d="M11 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2"></path>
                <path d="M17 15v2a1 1 0 0 0 1 1h1"></path>
                <path d="M20 15v6"></path>
            </svg>,
            header: "Discipline",
            text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi unde sapiente sit praesentium obcaecati illo, fugiat ab similique itaque nihil.`
        },
        {
            svg: 
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hand-grab" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8 11v-3.5a1.5 1.5 0 0 1 3 0v2.5"></path>
                <path d="M11 9.5v-3a1.5 1.5 0 0 1 3 0v3.5"></path>
                <path d="M14 7.5a1.5 1.5 0 0 1 3 0v2.5"></path>
                <path d="M17 9.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"></path>
            </svg>,
            header: "Resilience",
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minima fugiat veniam nulla porro officia velit delectus libero ut illum.`
        }
    ]

    return (
        <div className="principles">
        {
            principles.map((principle, index) => {
                return (
                    <div className="principle" key={index}>
                        {principle.svg}
                        <div className="principle-header">{principle.header}</div>
                        <div className="principle-text">{principle.text}</div>
                    </div>
                )
            })
        }
        </div>
    )
}