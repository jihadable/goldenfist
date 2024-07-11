import aboutImg1 from "../../assets/about-img1.jpg"
import aboutImg2 from "../../assets/about-img2.jpg"
import "../../style/AboutSection.scss"

export default function AboutSection(){
    return (
        <section className="about">
            <div className="about-header">Tentang Kami</div>
            <div className="about-content">
                <div className="item">
                    <div className="text">
                        <p>Kami adalah kekuatan di balik perubahan, pelopor dalam merancang visi yang tak tergoyahkan dan mengubahnya menjadi kenyataan yang luar biasa. Golden Fist mewujudkan semangat yang tak kenal menyerah, menggema di seluruh ranah bisnis, seni bela diri, dan keberanian tanpa batas. Seperti tarian indah sinar matahari saat senja, kami menerangi jalan menuju keagungan.</p>
                        <p>Dengan keahlian yang tak tertandingi, kebijaksanaan yang tak terhingga, dan semangat yang melampaui batas, kami menetapkan standar baru dalam setiap langkah yang kami ambil. Bersama mitra kami, kami membuka pintu menuju kesuksesan yang belum pernah terjadi sebelumnya. Memotivasi dan memberdayakan mereka yang berani bermimpi besar adalah esensi sejati dari Golden Fist.</p>
                    </div>
                    <div className="img">
                        <img src={aboutImg1} alt="Image" />
                    </div>
                </div>
                <div className="item">
                    <div className="text">
                        <p>Kami mengangkat mereka yang berani untuk menghadapi tantangan diri, menaklukkan ketakutan, dan mencapai puncak kejayaan. Seperti pahlawan legendaris yang mengayunkan tinju dengan semangat, kami menyalurkan energi kami untuk mengubah dunia, satu langkah luar biasa pada satu waktu.</p>
                        <p>Bergabunglah dengan kami dalam perjalanan luar biasa ini, karena bersama-sama, kita akan menorehkan sejarah dan meninggalkan jejak emas yang tak terhapuskan di dunia ini. Golden Fist, bukan hanya sebuah perusahaan, tetapi mimpi yang hidup dan semangat yang tak terkalahkan. Mari kita jalin ikatan dan bersama-sama, meraih masa depan cerah yang tak terduga di depan.</p>
                    </div>
                    <div className="img img2">
                        <img src={aboutImg2} alt="Image" />
                    </div>
                </div>
            </div>
        </section>
    )
}