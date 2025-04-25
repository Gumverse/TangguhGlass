import Image from "next/image";
import Link from "next/link";
import NextWhiteImg from "../../../public/images/v6/next-white.svg";
function ProjectCard({ project: { title, img } }) {
	return (
		<div className="aximo-project-thumb5">
			{/* SEO Hidden Content */}
			<div style={{ display: "none" }}>
				<p>
					{title} adalah salah satu karya kaca patri, kaca inlay, atau kaca dekoratif dari Tangguh Glass yang dikerjakan dengan material berkualitas dan desain estetik untuk berbagai kebutuhan rumah, tempat ibadah, atau bangunan komersial.
				</p>
			</div>
			{/* End SEO Hidden Content */}
			<Image src={img} alt={title} sizes="100vw" />
			<div className="aximo-marquee-two">
				<div className="aximo-infinite two">
					{[...Array(18)].map(() => (
						<Link key={crypto.randomUUID()} href="/galeri">
							{title} <Image src={NextWhiteImg} alt="Next" />
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
