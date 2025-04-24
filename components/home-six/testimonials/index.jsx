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
				<div className="aximo-bottom-center">
					<Link className="aximo-default-btn green-btn pill" href="/#">
						<span>Explore All Reviews</span>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Testimonials;
