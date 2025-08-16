import Image from "next/image";
import TextImg from "../../../public/images/v6/hero-inner-text-img-tg.png";
import Shape2Img from "../../../public/images/elements/shape-yellow-stars.svg";
// import ArrowWhite from "../../../public/images/v6/next-white.svg"; // Remove this line

function Hero() {
	return (
		<div className="aximo-hero-section5 bg-light7 position-relative">
			<div className="container">
				{/* SEO Hidden Content */}
				<div className="sr-only">
					<p>
						Tangguh Glass adalah spesialis kaca patri dan kaca aluminium berkualitas tinggi untuk berbagai kebutuhan rumah, kantor, tempat ibadah, dan bangunan komersial. Kami menawarkan desain custom, pengerjaan profesional, dan pengiriman ke seluruh Indonesia.
					</p>
					<ul>
						<li>Jasa pembuatan kaca patri dan kaca aluminium</li>
						<li>Desain kaca dekoratif custom</li>
						<li>Pengalaman lebih dari satu dekade di bidang kaca</li>
						<li>Layanan konsultasi dan pemasangan profesional</li>
					</ul>
				</div>
				{/* End SEO Hidden Content */}
				<div className="aximo-hero-content6 overflow-hidden">
					<h1 className="sr-only">
						Spesialis Kaca Patri & Kaca Aluminium Berkualitas - Tangguh Glass
					</h1>
					<div className="aximo-hero-title">
						<div className="aximo-hero-text">Spesialis Kaca Patri &</div>
					</div>
					<div className="aximo-hero-title">
						<Image src={TextImg} alt="Tangguh Glass - Hero Inner Text: Kaca Patri dan Kaca Aluminium" />
						<div className="aximo-hero-text">Kaca Aluminium</div>
					</div>
					<p className="sr-only">
						Tangguh Glass adalah spesialis kaca patri dan kaca aluminium berkualitas tinggi untuk rumah, kantor, dan tempat ibadah. Kami mengutamakan desain, kekuatan, dan keindahan pada setiap proyek.
					</p>
					<div className="aximo-hero-title">
						<div className="aximo-hero-text">Berkualitas</div>
						<div className="aximo-marquee-two">
							<div className="aximo-infinite two">
								{[...Array(18)].map(() => (
									<a key={crypto.randomUUID()} href="/tentang-kami">
										View Our Work{" "}
										<svg
											width="34"
											height="28"
											viewBox="0 0 34 28"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											style={{ display: "inline-block", verticalAlign: "middle", marginLeft: "8px" }}
											aria-label="Arrow icon for View Our Work"
										>
											<path
												d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
												stroke="#F3EDE8"
												strokeWidth="4"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="aximo-p-shape z-index">
				<Image src={Shape2Img} alt="Shape" />
			</div>
		</div>
	);
}

export default Hero;
