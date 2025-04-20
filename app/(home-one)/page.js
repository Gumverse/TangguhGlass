import About from "@/components/home-six/about";
import Hero from "@/components/home-six/hero";
import Projects from "@/components/home-six/projects";
import Testimonials from "@/components/home-six/testimonials";
import Blogs from "@/components/home-six/blogs";
import Team4Img from "@/public/images/team/team4.png";
import Video from "@/components/home-six/video";
import Features from "@/components/home-six/features";
import Services from "@/components/home-six/services";

// Teams images
import Team1Img from "@/public/images/team/team1.png";
import Team2Img from "@/public/images/team/team2.png";
import Team3Img from "@/public/images/team/team3.png";


const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "UI/UX Design",
		description:
			"Focusing on user interface (UI) and user experience (UX) design enhance the usability and accessibility of digital products & app.",
		icon: "icon-design-tools",
	},
	{
		id: crypto.randomUUID(),
		title: "Graphic Design",
		description:
			"Creating visual elements such as logos, branding materials, page layout techniques, brochures, & other marketing collateral.",
		icon: "icon-branding",
	},
	{
		id: crypto.randomUUID(),
		title: "Web Design",
		description:
			"Designing and developing websites to ensure they are visually look and appealing, user-friendly, and functional your website.",
		icon: "icon-web",
	},
	{
		id: crypto.randomUUID(),
		title: "Motion Graphics",
		description:
			"Creating animate graphics, videos for various purposes, including marketing and entertainment. To help sell a product or service.",
		icon: "icon-design-thinking",
	},
];
const teamsData = [
	{
		id: crypto.randomUUID(),
		name: "Andrew Mark",
		designation: "Creative Director",
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Jack Taylor",
		designation: "Senior Designer",
		img: Team2Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Martine Joy",
		designation: "Project Manager",
		img: Team3Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Adam Straw",
		designation: "Web Developer",
		img: Team4Img,
	},
];
export default function HomeOne() {
	return (
		<>
			<Hero />
			<Video />
			<Features />
			<About />
			<Services />
			<Projects />
			<Testimonials />
			<Blogs />
		</>
	);
}
