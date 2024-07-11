import "../../style/Faqs.scss"

export default function Faqs(){

    const faqs = [
        {
            question: "Apa itu Golden Fist?",
            answer: "Golden Fist adalah pusat pelatihan bela diri. Golden Fist berdedikasi untuk membantu individu meraih potensi terbaik mereka.",
        },
        {
            question: "Apa ada batasan usia untuk bisa bergabung dengan Golden Fist?",
            answer: "Tidak ada, Golden Fist siap menerima setiap orang dari segala usia. Kami memiliki program untuk setiap kalangan mulai dari anak-anak, remaja, dan orang dewasa."
        },
        {
            question: "Apa saja bela diri yang diajarkan di Golden Fist?",
            answer: "Kami mengajar beberapa bela diri seperti Karate, Taekwondo, Judo, Kung Fu.",
        },
        {
            question: "Siapa saja pelatih di Golden Fist?",
            answer: "Pelatih kami merupakan ahli dari bela diri dan memiliki segudang pengalaman. Mereka berdedikasi untuk membantu Anda mencapai potensi maksimal.",
        },
        {
            question: "Apakah Golden Fist ramah dengan pemula?",
            answer: "Tentu saja!, Golden Fist menerima semua level pengalaman termasuk pemula. Pelatih kami akan mambantumu untuk membangun pondasi bela diri yang kuat.",
        },
        {
            question: "Apa saja manfaat dari belajar bela diri di Golden Fist?",
            answer: "Belajar bela diri di Golden Fist tidak hanya meningkatkan kemampuan skill namun juga meningkatkan sifat disiplin, percaya diri, dan fokus.",
        }
    ]

    return (
        <section className="faqs">
            <div className="faqs-header">Pertanyaan yang Sering Ditanyakan</div>
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