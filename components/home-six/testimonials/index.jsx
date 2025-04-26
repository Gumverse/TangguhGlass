import FadeInStagger from "@/components/animation/FadeInStagger";
import Link from "next/link";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
	{
		id: 1,
		title: "Estetik & Rapih!",
		text: "Sebagai desainer interior, saya sangat selektif dalam memilih vendor. Saya Puas dengan hasil kaca patrinya dan juga eksekusinya yang sangat rapi saat pemasangan, saya yakin akan terus bekerja sama.",
		rating: 5,
		author: {
			name: "Melati Pranowo",
			designation: "Desainer Interior",
		},
	},
	{
		id: 2,
		title: "Ramah & Memuaskan",
		text: "Dari awal konsultasi hingga pemasangan, tim ini memberikan pelayanan ramah dan sangat terbuka terhadap kebutuhan desain kami. Kami memesan kaca inlay untuk jendela utama masjid, dan hasilnya benar-benar memuaskan.",
		rating: 5,
		author: {
			name: "Ahmad Yusuf",
			designation: "Pengurus DKM Masjid",
		},
	},
	{
		id: 3,
		title: "Kualistas Premium",
		text: "Saya sangat terkesan dan puas dengan detail dari setiap karya kaca patri studio ini. Proyek renovasi ruang ibadah yang saya tangani terasa jauh lebih hidup dan sakral berkat elemen kaca patri custom yang mereka buat.",
		rating: 5,
		author: {
			name: "Cristina Ellen",
			designation: "Design Interior",
		},
	},
];

function Testimonials() {
	return (
		<div className="section bg-light7 aximo-section-padding5">
			<div className="container">
				{/* SEO Hidden Content */}
				<div style={{ display: "none" }}>
					<p>
						Testimoni pelanggan Tangguh Glass membuktikan kualitas layanan kaca patri, kaca inlay, dan kaca dekoratif yang profesional, ramah, dan memuaskan untuk berbagai kebutuhan rumah, tempat ibadah, dan ruang komersial di Indonesia.
					</p>
					<ul>
						<li>Testimoni dari desainer interior, pengurus masjid, dan klien proyek komersial</li>
						<li>Kepuasan terhadap hasil kaca patri, pemasangan rapi, dan pelayanan ramah</li>
						<li>Rekomendasi untuk layanan kaca dekoratif custom berkualitas</li>
					</ul>
				</div>
				{/* End SEO Hidden Content */}
				<div className="aximo-section-title playfair center">
					<h2>Testimoni Apa Kata Pelanggan Kami</h2>
				</div>
				<div className="row">
					{testimonialsData.map((testimonial, index) => (
						<FadeInStagger className="col-xl-4 col-md-6" index={index} key={testimonial.id}>
							<TestimonialCard testimonial={testimonial} />
						</FadeInStagger>
					))}
				</div>
				{/* <div className="aximo-bottom-center">
					<Link className="aximo-default-btn green-btn pill" href="/#">
						<span>Explore All Reviews</span>
					</Link>
				</div> */}
			</div>
		</div>
	);
}

export default Testimonials;
