import Image from "next/image";
import Link from "next/link";
import ArrowDarkImg from "../../../public/images/v6/arrow-dark.svg";
import ArrowWhiteImg from "../../../public/images/v6/arrow-white.svg";
function ServiceCard({ service: { title, description, img, bgColor, slug } }) {
	// Select the arrow image based on bgColor
	const isWhiteArrow =
		bgColor === "green-bg2" ||
		bgColor === "dark-bg3" ||
		bgColor === "dark-bg2";
	const ArrowImg = isWhiteArrow ? ArrowWhiteImg : ArrowDarkImg;

	return (
		<div className={`aximo-iconbox-wrap8 ${bgColor} service-card-equal-height`}>
			<div className="aximo-iconbox-icon8">
				<Image src={img} alt={`Ikon layanan ${title} dari Tangguh Glass`} />
			</div>
			<div className="aximo-iconbox-data8">
				<h3>{title}</h3>
				<p>{description}</p>
				<Link href={`/layanan/${slug}`} aria-label={`Baca selengkapnya tentang ${title}`}>
					<Image src={ArrowImg} alt={`Selengkapnya tentang ${title}`} />
				</Link>
			</div>
		</div>
	);
}

export default ServiceCard;
