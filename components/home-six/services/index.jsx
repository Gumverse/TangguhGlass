"use client";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import IconPatri from "../../../public/images/v6/kaca-patri-logo.png"
import IconInlay from "../../../public/images/v6/kaca-inlay-logo.png"
import IconLukis from "../../../public/images/v6/kaca-painted-logo.png"
import IconCermin from "../../../public/images/v6/kaca-mirror-logo.png"
import IconAluminium from "../../../public/images/v6/kaca-aluminium-logo.png"


import ServiceCard from "./ServiceCard";

const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "Kaca Patri",
		description:
			" Kaca dekoratif dengan motif warna-warni yang dibuat secara custom—ideal untuk hunian, tempat ibadah, atau bangunan komersial.",
		img: IconPatri,
		bgColor: "cornflower-bg",
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Inlay (Diamond Glass)",
		description:
			"Kaca dengan pola geometris elegan yang memberikan kesan mewah pada pintu, jendela dan partisi.",
		img: IconInlay,
		bgColor: "bg-light7",
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Lukis (Painted Glass)",
		description:
			"Kaca dengan gambar atau ornamen yang dilukis langsung di permukaan kaca, menciptakan kesan personal dan artistik.",
		img: IconLukis,
		bgColor: "green-bg2",
	},
	{
		id: crypto.randomUUID(),
		title: "Cermin Dekoratif",
		description:
			"Cermin estetik dengan ornamen artistik yang memperluas ruang sekaligus mempercantik tampilan interior.",
		img: IconCermin,
		bgColor: "dark-bg3",
	},
	{
		id: crypto.randomUUID(),
		title: "Kaca Aluminium",
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
