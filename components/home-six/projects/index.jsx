import FadeInStagger from "@/components/animation/FadeInStagger";
import Image from "next/image";
import Project1Img from "../../../public/images/v6/project-img-1.jpg";
import Project2Img from "../../../public/images/v6/project-img-2.jpg";
import Project3Img from "../../../public/images/v6/project-img-33.jpg";
import Project4Img from "../../../public/images/v6/project-img-4.jpg";
import Project5Img from "../../../public/images/v6/project-img-5.jpg";
import Project6Img from "../../../public/images/v6/project-img-6.jpg";
import Shape2Img from "../../../public/images/v6/shapes2.png";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

const projectsData = [
	{
		id: crypto.randomUUID(),
		title: "Luxury Diamon Glass",
		img: Project1Img,
		colSize: "6",
	},
	{
		id: crypto.randomUUID(),
		title: "Luxury Kaca Patri",
		img: Project2Img,
		colSize: "6",
	},
	
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri Masjid",
		img: Project5Img,
		colSize: "8",
	},
	{
		id: crypto.randomUUID(),
		title: "Paca Patri Pintu Gereja",
		img: Project4Img,
		colSize: "4",
	},
	{
		id: crypto.randomUUID(),
		title: "Diamon Glass Masjid",
		img: Project6Img,
		colSize: "4",
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri Jendela utama Gereja",
		img: Project3Img,
		colSize: "8",
	},
	
];
function Projects() {
	return (
		<div className="section aximo-section-padding5 position-relative">
			<div className="container">
				<div className="aximo-section-title playfair center max-width-xl">
					<h2>Galeri Karya Terbaru Kami</h2>
				</div>
				<div className="row">
					{projectsData.map((project, index) => (
						<FadeInStagger className={`col-md-${project.colSize}`} index={index} key={project.id}>
							<ProjectCard project={project} />
						</FadeInStagger>
					))}
				</div>
			</div>
			<div className="aximo-bottom-center">
				<Link className="aximo-default-btn green-btn pill" href="/galeri">
					<span>Explore More Galeri</span>
				</Link>
			</div>
			<div className="aximo-p-shape">
				<Image src={Shape2Img} alt="Shape" />
			</div>
		</div>
	);
}

export default Projects;
