import FadeInStagger from "@/components/animation/FadeInStagger";
import Link from "next/link";
import Box1Img from "../../../public/images/v6/features-img-11.png";
import Box1Img2 from "../../../public/images/v6/features-img-22.png";
import Box1Img3 from "../../../public/images/v6/features-img-44.png";
import Box1Img4 from "../../../public/images/v6/features-img-55.png";
import Box1Img5 from "../../../public/images/v6/features-img-66.png";
import Box1Img6 from "../../../public/images/v6/features-img-33.png";
import FeatureCard from "./FeatureCard";
const featuresData = [
	{
		id: crypto.randomUUID(),
		title: "Desain Estetik",
		description:
			"Kami percaya, desain yang baik bukan hanya soal visual—tapi juga soal rasa dan makna yang dibawanya ke dalam ruang Anda.",
		img: Box1Img,
	},
	// {
	// 	id: crypto.randomUUID(),
	// 	title: "Harga Terjangkau",
	// 	description: "Kami selalu menawarkan kualitas terbaik dengan harga yang tetap terjangkau—tanpa mengorbankan hasil akhir.",
	// 	img: Box1Img2,
	// },
	{
		id: crypto.randomUUID(),
		title: "Material Terbaik",
		description:
			"Kami memilih material kaca patri dan aluminium terbaik yang tahan lama, kuat, dan tampil estetik.",
		img: Box1Img3,
	},
	// {
	// 	id: crypto.randomUUID(),
	// 	title: "Tepat Waktu",
	// 	description:
	// 		"Dengan manajemen proyek yang rapi dan tim yang berpengalaman, kami pastikan setiap pesanan selesai tepat waktu tanpa mengorbankan kualitas",
	// 	img: Box1Img4,
	// },
	{
		id: crypto.randomUUID(),
		title: "Jasa Terpercaya",
		description:
			"Dari rumah pribadi, Ruang Komersial hingga bangunan ibadah, kami telah dipercaya oleh banyak pelanggan karena hasil kerja yang rapi, proses transparan, dan layanan yang ramah",
		img: Box1Img5,
	},
	// {
	// 	id: crypto.randomUUID(),
	// 	title: "Tim Profesional",
	// 	description:
	// 		"Proyek Anda akan ditangani oleh tim profesional berpengalaman—mulai dari desainer, hingga teknisi ahli.",
	// 	img: Box1Img6,
	// },
];
function Features() {
	return (
		<div className="section aximo-section-padding2">
			<div className="container">
				<div className="row">
					{featuresData.map((feature, index) => (
						<FadeInStagger className="col-lg-4 col-md-6" index={index} key={feature.id}>
							<FeatureCard feature={feature} />
						</FadeInStagger>
					))}
				</div>
				<div className="aximo-bottom-center">
					<Link className="aximo-default-btn green-btn pill" href="/layanan">
						<span>Explore More Features</span>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Features;
