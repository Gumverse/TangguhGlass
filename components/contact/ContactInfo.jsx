import Image from "next/image";
import Call2Img from "../../public/images/icon/call2.svg";
import EmailImg from "../../public/images/icon/icon-buttery-white-mail.svg";
import MapImg from "../../public/images/icon/map.svg";
import styles from "./ContactInfo.module.css"; // Import the CSS module

import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../animation/FadeInStaggerTwo";
function ContactInfo() {
	return (
		<div className="aximo-contact-info-section">
			<div className="container">
				{/* SEO Hidden Content */}
				<div style={{ display: "none" }}>
					<h1>Kontak Tangguh Glass - Spesialis Kaca Patri & Aluminium</h1>
					<p>
						Hubungi Tangguh Glass untuk kebutuhan kaca patri, kaca inlay, dan kaca aluminium terbaik di Indonesia. Alamat, nomor telepon, dan email resmi kami tersedia di halaman ini untuk konsultasi, pemesanan, dan informasi lebih lanjut.
					</p>
					<ul>
						<li>Alamat: Jl. Ciater Raya BSD No.2, RT.5/RW.9 Ciater, Kec. Serpong, Kota Tangerang Selatan, Banten 15310</li>
						<li>Telepon: +62 857-1883-3106</li>
						<li>Email: tangguhglass@gmail.com</li>
					</ul>
				</div>
				{/* End SEO Hidden Content */}
				<div className="aximo-contact-info-title">
					<h2>
						<span
							className="aximo-title-animation"
							style={{ color: "var(--light-color5)" }}
						>
							Kontak Kami
						</span>
					</h2>
				</div>
				<FadeInStaggerTwo className="row">
					<FadeInStaggerTwoChildren className="col-xl-4 col-md-6">
						<div className="aximo-contact-info-box">
							<div className={`${styles["icon-inline"]} aximo-contact-info-icon`}>
								<Image src={MapImg} alt="Map" />
								<span>Alamat Kami</span>
							</div>
							<div className="aximo-contact-info-data">
								<p>Jl. Ciater Raya BSD No.2
									RT.5/RW.9 Ciater
									Kec. Serpong Kota Tangerang Selatan Banten 15310</p>
							</div>
						</div>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="col-xl-4 col-md-6">
						<div className="aximo-contact-info-box">
							<div className={`${styles["icon-inline"]} aximo-contact-info-icon`}>
								<Image src={Call2Img} alt="Call Img" />
								<span>Kontak Kami</span>
							</div>
							<div className="aximo-contact-info-data">
								<p>+62 857-1883-3106</p>
								<p>+62 857-1883-3106</p>
							</div>
						</div>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="col-xl-4 col-md-6">
						<div className="aximo-contact-info-box">
							<div className={`${styles["icon-inline"]} aximo-contact-info-icon`}>
								<Image src={EmailImg} alt="Email" />
								<span>Email Kami</span>
							</div>
							<div className="aximo-contact-info-data">
								<p>tangguhglass@gmail.com</p>
							</div>
						</div>
					</FadeInStaggerTwoChildren>
				</FadeInStaggerTwo>
			</div>
		</div>
	);
}

export default ContactInfo;
