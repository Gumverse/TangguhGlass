import Image from "next/image";
import Link from "next/link";
import ArrowRightImg from "../../../public/images/icon/arrow-right.svg";
function ServiceCard({ service: { title, description, icon } }) {
	return (
		<div className="aximo-iconbox-wrap">
			<div className="aximo-iconbox-icon">
				<Image src={icon} alt={title + " icon"} fill={false} width={48} height={48} />
			</div>
			<div className="aximo-iconbox-data">
				<h3>{title}</h3>
				<p>{description}</p>
				<Link href="/single-service" className="aximo-icon">
					<Image src={ArrowRightImg} alt="arrow right" />
				</Link>
			</div>
		</div>
	);
}

export default ServiceCard;
