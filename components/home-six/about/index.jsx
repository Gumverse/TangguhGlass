"use client";
import FadeInUp from "@/components/animation/FadeInUp";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import Thumb1Img from "../../../public/images/v6/content-img-11.jpg";
import Thumb2Img from "../../../public/images/v6/content-img-22.jpg";
function About() {
	return (
		<div className="section dark-bg2 aximo-section-padding position-relative">
			<div id="aximo-counter">
				<div className="container">
					{/* Visually hidden h1 for SEO */}
					<h1 className="sr-only">
						Tentang Kami - Spesialis Kaca Patri, Kaca Inlay, Kaca Dekorasi, dan Kaca Aluminium Berkualitas
					</h1>
					{/* Visually hidden descriptive paragraph for SEO */}
					<p className="sr-only">
						Tangguh Glass adalah tim profesional yang berfokus pada desain dan pembuatan kaca patri, kaca inlay, kaca dekorasi, dan kaca aluminium berkualitas untuk hunian, tempat ibadah, dan ruang komersial. Kami mengutamakan ketelitian, kreativitas, dan dedikasi dalam setiap proyek.
					</p>
					{/* SEO Hidden Content */}
					<div style={{ display: "none" }}>
						<p>
							Layanan Tangguh Glass meliputi konsultasi desain, pembuatan kaca patri custom, kaca inlay, kaca dekorasi, dan kaca aluminium untuk berbagai kebutuhan rumah, tempat ibadah, dan ruang komersial di Indonesia. Kami mengutamakan kualitas, estetika, dan kepuasan pelanggan.
						</p>
					</div>
					{/* End SEO Hidden Content */}
					<div className="aximo-section-title light playfair center max-width-xl">
						<h2>Tentang kami</h2>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 order-lg-2">
							<FadeInUp className="aximo-v6-thumb1" style={{ position: "relative", width: "100%", marginLeft: 0, marginRight: 0, transform: "none" }}>
								<Image
									src={Thumb1Img}
									alt="Tim profesional kaca patri dan aluminium Tangguh Glass"
									style={{ width: "100%", height: "auto", borderRadius: "12px" }}
									sizes="(max-width: 992px) 100vw, 50vw"
								/>
							</FadeInUp>
						</div>
						<div className="col-lg-6 d-flex align-items-center">
							<div className="aximo-default-content-wrap">
								<div className="aximo-default-content light large">
									<p>
										Kami adalah tim profesional yang berfokus pada desain dan
										pembuatan kaca patri, kaca inlay, kaca dekorasi, dan kaca aluminium berkualitas.
									</p>
									<p>
										Kami mengerjakan berbagai proyek, mulai dari hunian pribadi,
										rumah ibadah, hingga ruang komersial seperti kafe, kantor,
										dan galeri.
									</p>
								</div>
								<div className="aximo-counter-wrap6">
									<div className="aximo-counter-data6">
										<h2>
											<span className="aximo-counter">
												<CountUp
													end={15}
													duration={3}
													redraw={true}
													enableScrollSpy
												/>
											</span>
											+
										</h2>
										<p>
											Years of work <br /> experience
										</p>
									</div>
									<div className="aximo-counter-data6">
										<h2>
											<span className="aximo-counter">
												<CountUp
													end={2}
													duration={3}
													redraw={true}
													enableScrollSpy
												/>
											</span>
											k
										</h2>
										<p>
											successful <br /> projects done
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className="row"
						style={{ marginTop: "5rem" }}
					>
						<div className="col-lg-6 ">
							<FadeInUp className="aximo-v6-thumb2" style={{ position: "relative", width: "100%", marginLeft: 0, marginRight: 0, transform: "none" }}>
								<Image
									src={Thumb2Img}
									alt="Proyek kaca patri dan dekorasi oleh Tangguh Glass"
									style={{ width: "100%", height: "auto", borderRadius: "12px" }}
									sizes="(max-width: 992px) 100vw, 50vw"
								/>
							</FadeInUp>
						</div>
						<div className="col-lg-6 d-flex align-items-center">
							<div className="aximo-default-content-wrap">
								<div className="aximo-default-content light large">
									<p>
										Layanan kami mencakup konsultasi desain kaca patri,
										penyesuaian motif sesuai karakter ruang, pemilihan warna dan
										jenis kaca, hingga pemasangan dengan standar kualitas
										tinggi.
									</p>
									<p>
										Setiap proyek kami kerjakan dengan ketelitian, kreativitas,
										dan dedikasi—menggabungkan nilai fungsional dan artistik
										sesuai kebutuhan klien.
									</p>
									<p>Tujuan kami adalah menghadirkan karya kaca patri yang tidak hanya memperindah ruang, tetapi juga mencerminkan nilai, identitas, dan gaya hidup klien.</p>
								</div>
								<div className="aximo-extra-mt text-right">
									<Link
										className="aximo-default-btn green-btn pill shadow-white"
										href="/tentang-kami"
									>
										<span>Read Our Story</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
