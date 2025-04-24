import Story from "@/components/about/story";
import BreadCrumb from "@/components/common/Breadcrumb";
import About from "@/components/home-one/about";
import AutoSlider from "@/components/home-one/auto-slider";
import Teams from "@/components/home-one/teams";

import Team1Img from "../../../public/images/team/team1.png";
import Team2Img from "../../../public/images/team/team2.png";
import Team3Img from "../../../public/images/team/team3.png";
import Team4Img from "../../../public/images/team/team4.png";



function AboutUs() {
	return (
		<>
			<BreadCrumb title="Tentang Kami" />
			<About />
			<Story />			
		</>
	);
}

export default AboutUs;
