import FadeInStagger from "@/components/animation/FadeInStagger";
import Portfolio1Img from "../../../public/images/galeri/000.jpg";
import Portfolio2Img from "../../../public/images/galeri/00.jpg";
import Portfolio3Img from "../../../public/images/galeri/01.jpg";
import Portfolio4Img from "../../../public/images/galeri/02.jpg";
import Portfolio5Img from "../../../public/images/galeri/03.jpg";
import Portfolio6Img from "../../../public/images/galeri/04.jpg";
import Portfolio7Img from "../../../public/images/galeri/05.jpg";
import Portfolio8Img from "../../../public/images/galeri/06.jpg";
import Portfolio9Img from "../../../public/images/galeri/07.jpg";
import Portfolio10Img from "../../../public/images/galeri/09.jpg";
import Portfolio11Img from "../../../public/images/galeri/10.jpg";
import Portfolio12Img from "../../../public/images/galeri/11.jpg";
import Portfolio13Img from "../../../public/images/galeri/12.jpg";
import Portfolio14Img from "../../../public/images/galeri/13.jpg";
import Portfolio15Img from "../../../public/images/galeri/14.jpg";
import Portfolio16Img from "../../../public/images/galeri/15.jpg";
import Portfolio17Img from "../../../public/images/galeri/16.jpg";
import Portfolio18Img from "../../../public/images/galeri/17.jpg";
import Portfolio19Img from "../../../public/images/galeri/18.jpg";
import Portfolio20Img from "../../../public/images/galeri/08.jpg";
import Portfolio21Img from "../../../public/images/galeri/19.jpg";
import Portfolio22Img from "../../../public/images/galeri/20.jpeg";
import Portfolio23Img from "../../../public/images/galeri/21.jpg";
import Portfolio24Img from "../../../public/images/galeri/22.jpg";
import Portfolio25Img from "../../../public/images/galeri/23.jpg";
import Portfolio26Img from "../../../public/images/galeri/24.jpg";

import PortfolioCard from "./PortfolioCard";
import styles from "./PortfolioList.module.css"; // Import the CSS module

const portfolioListData = [
	{
		id: crypto.randomUUID(),
		title: "Kaca Inlay Diamond",
		description: "Kaca inlay diamond dengan motif bunga klasik, cocok untuk jendela ruang tamu dan pintu utama.",
		img: Portfolio2Img,
		alt: "Galeri kaca inlay diamond motif bunga klasik untuk jendela dan pintu - Tangguh Glass",
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri Logo",
		description: "Kaca patri custom dengan desain logo perusahaan, memperkuat identitas visual bisnis Anda.",
		img: Portfolio1Img,
		alt: "Kaca patri logo perusahaan custom - Tangguh Glass",
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri Modern",
		description: "Kaca patri modern untuk partisi ruangan dan dekorasi interior rumah maupun kantor.",
		img: Portfolio3Img,
		alt: "Kaca patri modern untuk partisi ruangan dan dekorasi interior - Tangguh Glass",
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri Artistik",
		description: "Kaca patri artistik dengan motif unik untuk memperindah ruang keluarga atau ruang tamu.",
		img: Portfolio4Img,
		alt: "Kaca patri artistik motif unik untuk ruang keluarga dan ruang tamu - Tangguh Glass",
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri Pameran",
		description: "Kaca patri dekoratif untuk booth pameran, event, dan instalasi seni.",
		img: Portfolio5Img,
		alt: "Kaca patri dekoratif untuk booth pameran dan instalasi seni - Tangguh Glass",
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri Eksklusif",
		description: "Kaca patri eksklusif untuk ruang pameran, galeri seni, dan hotel.",
		img: Portfolio6Img,
		alt: "Kaca patri eksklusif untuk galeri seni dan hotel - Tangguh Glass",
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri Dekorasi",
		description: "Kaca patri dekorasi untuk dinding, pintu, dan jendela rumah modern.",
		img: Portfolio7Img,
		alt: "Kaca patri dekorasi untuk dinding, pintu, dan jendela rumah modern - Tangguh Glass",
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri Website",
		description: "Inspirasi kaca patri untuk desain interior kantor dan ruang kerja.",
		img: Portfolio8Img,
		alt: "Inspirasi kaca patri untuk desain interior kantor dan ruang kerja - Tangguh Glass",
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri Minimalis",
		description: "Kaca patri minimalis untuk rumah modern dan apartemen.",
		img: Portfolio9Img,
		alt: "Kaca patri minimalis untuk rumah modern dan apartemen - Tangguh Glass",
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri Klasik",
		description: "Kaca patri klasik dengan motif elegan untuk pintu utama dan jendela.",
		img: Portfolio10Img,
		alt: "Kaca patri klasik motif elegan untuk pintu utama dan jendela - Tangguh Glass",
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri Motif Bunga",
		description: "Kaca patri motif bunga untuk dekorasi ruang tamu dan ruang keluarga.",
		img: Portfolio11Img,
		alt: "Kaca patri motif bunga untuk dekorasi ruang tamu dan keluarga - Tangguh Glass",
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri Motif Geometris",
		description: "Kaca patri dengan motif geometris untuk desain interior modern.",
		img: Portfolio12Img,
		alt: "Kaca patri motif geometris untuk desain interior modern - Tangguh Glass",
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri Lukis",
		description: "Kaca patri lukis dengan warna-warna cerah untuk memperindah ruangan.",
		img: Portfolio13Img,
		alt: "Kaca patri lukis warna cerah untuk memperindah ruangan - Tangguh Glass",
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri Painted",
		description: "Kaca patri painted dengan desain custom sesuai permintaan pelanggan.",
		img: Portfolio14Img,
		alt: "Kaca patri painted custom sesuai permintaan - Tangguh Glass",
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri Motif Alam",
		description: "Kaca patri motif alam untuk nuansa natural pada rumah dan villa.",
		img: Portfolio15Img,
		alt: "Kaca patri motif alam untuk rumah dan villa - Tangguh Glass",
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri Motif Abstrak",
		description: "Kaca patri motif abstrak untuk dekorasi ruang tamu dan ruang makan.",
		img: Portfolio16Img,
		alt: "Kaca patri motif abstrak untuk ruang tamu dan ruang makan - Tangguh Glass",
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri Motif Daun",
		description: "Kaca patri motif daun untuk jendela dan pintu rumah.",
		img: Portfolio17Img,
		alt: "Kaca patri motif daun untuk jendela dan pintu rumah - Tangguh Glass",
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri Motif Floral",
		description: "Kaca patri motif floral untuk dekorasi interior rumah klasik.",
		img: Portfolio18Img,
		alt: "Kaca patri motif floral untuk interior rumah klasik - Tangguh Glass",
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri Motif Ornamen",
		description: "Kaca patri motif ornamen untuk pintu utama dan jendela besar.",
		img: Portfolio19Img,
		alt: "Kaca patri motif ornamen untuk pintu utama dan jendela besar - Tangguh Glass",
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri Masjid",
		description: "Kaca patri masjid dengan motif islami untuk jendela dan kubah.",
		img: Portfolio20Img,
		alt: "Kaca patri masjid motif islami untuk jendela dan kubah - Tangguh Glass",
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri Aluminium",
		description: "Kaca patri dengan frame aluminium untuk desain modern dan minimalis.",
		img: Portfolio21Img,
		alt: "Kaca patri dengan frame aluminium untuk desain modern - Tangguh Glass",
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri Masjid Klasik",
		description: "Kaca patri masjid motif klasik untuk tempat ibadah dan mushola.",
		img: Portfolio22Img,
		alt: "Kaca patri masjid motif klasik untuk tempat ibadah dan mushola - Tangguh Glass",
	},
	{
		id: crypto.randomUUID(),
		title: "Cermin Dekorasi",
		description: "Cermin dekorasi dengan sentuhan kaca patri untuk mempercantik ruangan.",
		img: Portfolio23Img,
		alt: "Cermin dekorasi dengan kaca patri untuk mempercantik ruangan - Tangguh Glass",
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri Motif Daerah",
		description: "Kaca patri motif daerah dan budaya Indonesia untuk hotel dan restoran.",
		img: Portfolio24Img,
		alt: "Kaca patri motif daerah dan budaya Indonesia untuk hotel dan restoran - Tangguh Glass",
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri Motif Batik",
		description: "Kaca patri motif batik untuk dekorasi rumah dan kantor.",
		img: Portfolio25Img,
		alt: "Kaca patri motif batik untuk dekorasi rumah dan kantor - Tangguh Glass",
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri Motif Custom",
		description: "Kaca patri custom sesuai permintaan untuk berbagai kebutuhan dekorasi.",
		img: Portfolio26Img,
		alt: "Kaca patri custom untuk berbagai kebutuhan dekorasi - Tangguh Glass",
	},
];
function PortfolioList() {
	return (
		<div className="section aximo-project-page aximo-section-padding5">
			<div className="container">
				{/* SEO Hidden Content */}
				<div style={{ display: "none" }}>
					<h1>Galeri Portfolio Kaca Patri & Kaca Inlay - Tangguh Glass</h1>
					<p>
						Lihat koleksi hasil kerja terbaik Tangguh Glass dalam bidang kaca patri, kaca inlay, dan kaca dekoratif lainnya. Temukan inspirasi desain kaca untuk rumah, masjid, gereja, dan bangunan komersial di seluruh Indonesia.
					</p>
					<ul>
						<li>Portofolio kaca patri motif klasik dan modern</li>
						<li>Kaca inlay diamond untuk jendela dan pintu</li>
						<li>Kaca patri masjid dan tempat ibadah</li>
						<li>Desain kaca dekoratif untuk berbagai kebutuhan</li>
					</ul>
				</div>
				{/* End SEO Hidden Content */}
				<div className="aximo-section-title center">
					<h2>
						Galeri Hasil Kerja Kami
					</h2>
				</div>
				{/* Masonry wrapper */}
				<div className={styles["portfolio-masonry"]}>
					{portfolioListData.map((portfolio, index) => (
						<div key={portfolio.id} className={styles["masonry-item"]}>
							<FadeInStagger index={index}>
								<PortfolioCard portfolio={portfolio} />
							</FadeInStagger>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default PortfolioList;
