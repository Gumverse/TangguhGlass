import BreadCrumb from "@/components/common/Breadcrumb";
import TwoColumnFaq from "@/components/contact/TwoColumnFaq";
import AutoSlider from "@/components/home-one/auto-slider";
import Services from "@/components/home-one/services";
import WhyChooseUs from "@/components/home-one/why-choose-us";
import IconPatri from "../../../public/images/v6/kaca-patri-logo1.png"
import IconInlay from "../../../public/images/v6/kaca-inlay-logo1.png"
import IconLukis from "../../../public/images/v6/kaca-painted-logo1.png"
import IconCermin from "../../../public/images/v6/kaca-mirror-logo1.png"
import IconAluminium from "../../../public/images/v6/kaca-aluminium-logo1.png"

const services = [
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri",
		description:
			"Kaca dekoratif dengan motif warna-warni yang dibuat secara custom—ideal untuk hunian, tempat ibadah, atau bangunan komersial.",
		icon: IconPatri,
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Inlay (Diamond Glass)",
		description:
			"Kaca dengan pola geometris elegan yang memberikan kesan mewah pada pintu, jendela, dan partisi.",
		icon: IconInlay,
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Lukis (Painted Glass)",
		description:
			"Kaca dengan gambar atau ornamen yang dilukis langsung di permukaannya, menciptakan kesan personal dan artistik.",
		icon: IconLukis,
	},
	{
		id: crypto.randomUUID(),
		title: "Cermin Dekoratif",
		description:
			"Cermin estetik dengan ornamen artistik yang memperluas ruang sekaligus mempercantik tampilan interior.",
		icon: IconCermin,
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Aluminium",
		description:
			"Kombinasi kaca dan rangka aluminium yang kuat dan minimalis, cocok untuk kebutuhan modern dan fungsional.",
		icon: IconAluminium,
	},
];
function ServicePage() {
	return (
		<>
			<BreadCrumb title="Layanan Kami" />
			<Services services={services} />
			<WhyChooseUs />
			<TwoColumnFaq />
		</>
	);
}

export default ServicePage;
