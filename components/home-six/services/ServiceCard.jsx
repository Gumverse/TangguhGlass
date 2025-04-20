import Image from "next/image";
import Link from "next/link";
import ArrowDarkImg from "../../../public/images/v6/arrow-dark.svg";
import ArrowWhiteImg from "../../../public/images/v6/arrow-white.svg";
function ServiceCard({ service: { title, description, img, bgColor } }) {
	// Select the arrow image based on bgColor
	const isWhiteArrow =
		bgColor === "green-bg2" ||
		bgColor === "dark-bg3" ||
		bgColor === "dark-bg2";
	const ArrowImg = isWhiteArrow ? ArrowWhiteImg : ArrowDarkImg;

	return (
		<div className={`aximo-iconbox-wrap8 ${bgColor}`}>
			<div className="aximo-iconbox-icon8">
				<Image src={img} alt="icon" />
			</div>
			<div className="aximo-iconbox-data8">
				<h3>{title}</h3>
				<p>{description}</p>
				<Link href="/single-service">
					<Image src={ArrowImg} alt="Arrow" />
				</Link>
			</div>
		</div>
	);
}

export default ServiceCard;
