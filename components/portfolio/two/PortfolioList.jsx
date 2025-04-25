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
		description: "Kaca patri inlay motif bunga klasik untuk jendela ruang tamu—menambah sentuhan mewah dan artistik pada interior rumah.",
		img: Portfolio2Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri",
		description: "Creating or refreshing a companys logo and developing a cohesive visual identity.",
		img: Portfolio1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri",
		description: "Designing the UI/UXe for mobile apps and web applications to ensure usability & engagement.",
		img: Portfolio3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri",
		description: "Creating packaging solutions for products that not only protect attract customers on store.",
		img: Portfolio4Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri",
		description:
			"Designing trade show booths, exhibition spaces, and immersive installations for events and conferences.",
		img: Portfolio5Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri",
		description:
			"Designing trade show booths, exhibition spaces, and immersive installations for events and conferences.",
		img: Portfolio6Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri",
		description:
			"Developing creative concepts for print, digital, and video advertising campaigns, including ad design and copywriting",
		img: Portfolio7Img,
	},
	{
		id: crypto.randomUUID(),
		title: "WKaca Patri",
		description:
			"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: Portfolio8Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri",
		description:
			"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: Portfolio9Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri",
		description: "Creating packaging solutions for products that not only protect attract customers on store.",
		img: Portfolio10Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri",
		description: "Creating packaging solutions for products that not only protect attract customers on store.",
		img: Portfolio11Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri",
		description: "Creating packaging solutions for products that not only protect attract customers on store.",
		img: Portfolio12Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri",
		description: "Creating packaging solutions for products that not only protect attract customers on store.",
		img: Portfolio13Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri",
		description: "Creating packaging solutions for products that not only protect attract customers on store.",
		img: Portfolio14Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri",
		description: "Creating packaging solutions for products that not only protect attract customers on store.",
		img: Portfolio15Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri",
		description: "Creating packaging solutions for products that not only protect attract customers on store.",
		img: Portfolio16Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri",
		description: "Creating packaging solutions for products that not only protect attract customers on store.",
		img: Portfolio17Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri",
		description: "Creating packaging solutions for products that not only protect attract customers on store.",
		img: Portfolio18Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri",
		description: "Creating packaging solutions for products that not only protect attract customers on store.",
		img: Portfolio19Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri Masjid",
		description: "Creating packaging solutions for products that not only protect attract customers on store.",
		img: Portfolio20Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri",
		description: "Creating packaging solutions for products that not only protect attract customers on store.",
		img: Portfolio21Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri Masjid",
		description: "Creating packaging solutions for products that not only protect attract customers on store.",
		img: Portfolio22Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri",
		description: "Creating packaging solutions for products that not only protect attract customers on store.",
		img: Portfolio23Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri",
		description: "Creating packaging solutions for products that not only protect attract customers on store.",
		img: Portfolio24Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri",
		description: "Creating packaging solutions for products that not only protect attract customers on store.",
		img: Portfolio25Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri",
		description: "Creating packaging solutions for products that not only protect attract customers on store.",
		img: Portfolio26Img,
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
