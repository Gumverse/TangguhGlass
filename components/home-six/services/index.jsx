"use client";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import IconPatri from "../../../public/images/v6/kaca-patri-logo1.png"
import IconInlay from "../../../public/images/v6/kaca-inlay-logo1.png"
import IconLukis from "../../../public/images/v6/kaca-painted-logo1.png"
import IconCermin from "../../../public/images/v6/kaca-mirror-logo1.png"
import IconAluminium from "../../../public/images/v6/kaca-aluminium-logo1.png"


import ServiceCard from "./ServiceCard";

const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri",
		slug: "kaca-patri",
		description:
			" Kaca dekoratif dengan motif warna-warni yang dibuat secara custom—ideal untuk hunian, tempat ibadah, atau bangunan komersial.",
		img: IconPatri,
		bgColor: "cornflower-bg",
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Inlay (Diamond Glass)",
		slug: "kaca-inlay",
		description:
			"Kaca dengan pola geometris elegan yang memberikan kesan mewah pada pintu, jendela dan partisi.",
		img: IconInlay,
		bgColor: "bg-light7",
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Lukis (Painted Glass)",
		slug: "kaca-lukis",
		description:
			"Kaca dengan gambar atau ornamen yang dilukis langsung di permukaan kaca, menciptakan kesan personal dan artistik.",
		img: IconLukis,
		bgColor: "green-bg2",
	},
	{
		id: crypto.randomUUID(),
		title: "Cermin Dekoratif",
		slug: "cermin-dekoratif",
		description:
			"Cermin estetik dengan ornamen artistik yang memperluas ruang sekaligus mempercantik tampilan interior.",
		img: IconCermin,
		bgColor: "dark-bg3",
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Aluminium",
		slug: "kaca-aluminium",
		description:
			"Kombinasi kaca dan rangka aluminium yang kuat dan minimalis, cocok untuk kebutuhan modern dan fungsionalistas",
		img: IconAluminium,
		bgColor: "dark-bg2",
	},
	
];

const swiperSettings = {
	loop: true,
	spaceBetween: 30,
	grabCursor: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	modules: [Navigation],
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		900: {
			slidesPerView: 1.5,
		},
		1200: {
			slidesPerView: 1.5,
		},
		1400: {
			slidesPerView: 2.5,
		},
	},
};
function Services() {
	return (
		<div className="section aximo-section-padding4">
			<div className="container">
				{/* Visually hidden h1 for SEO */}
				<h1 className="sr-only">
					Layanan dan Keahlian Kaca Patri, Inlay, Lukis, Cermin Dekoratif, dan Kaca Aluminium - Tangguh Glass
				</h1>
				{/* Visually hidden descriptive paragraph for SEO */}
				<p className="sr-only">
					Tangguh Glass menawarkan layanan kaca patri, kaca inlay, kaca lukis, cermin dekoratif, dan kaca aluminium berkualitas tinggi untuk hunian, tempat ibadah, dan ruang komersial. Setiap layanan kami dikerjakan dengan keahlian dan dedikasi untuk hasil terbaik.
				</p>
				{/* SEO Hidden Content */}
				<div style={{ display: "none" }}>
					<p>
						Layanan utama Tangguh Glass meliputi pembuatan kaca patri custom, kaca inlay (diamond glass), kaca lukis, cermin dekoratif, dan kaca aluminium untuk berbagai kebutuhan rumah, tempat ibadah, dan ruang komersial di Indonesia. Setiap proyek dikerjakan dengan material terbaik dan tenaga profesional.
					</p>
					<ul>
						<li>Kaca Patri: kaca dekoratif custom untuk hunian dan bangunan komersial</li>
						<li>Kaca Inlay: motif geometris elegan untuk pintu dan jendela</li>
						<li>Kaca Lukis: ornamen artistik langsung di permukaan kaca</li>
						<li>Cermin Dekoratif: memperluas dan memperindah interior</li>
						<li>Kaca Aluminium: kombinasi kaca dan rangka aluminium minimalis</li>
					</ul>
				</div>
				{/* End SEO Hidden Content */}
				<div className="row aximo_screenfix_right">
					<div className="swiper aximo-iconbox-slider">
						<div className="row">
							<div className="col-lg-6">
								<div className="aximo-section-title playfair">
									<h2>Layanan dan Keahlian Kami</h2>
								</div>
							</div>
						</div>
						<Swiper {...swiperSettings}>
							{servicesData.map((service) => (
								<SwiperSlide key={service.id}>
									<ServiceCard service={service} />
								</SwiperSlide>
							))}
						</Swiper>
						<div className="aximo-iconbox-slider-arrows">
							<div className="swiper-button-prev"></div>
							<div className="swiper-button-next"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Services;
