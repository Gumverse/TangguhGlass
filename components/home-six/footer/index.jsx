import Image from "next/image";
import Link from "next/link";
import LogoWhiteImg from "../../../public/images/logo/logo-buttery-white.png";
import ShapeImg from "../../../public/images/v6/shapes.png";

import FooterCopyright from "./FooterCopyright";
import FooterSocial from "./FooterSocial";
import ContactInfo from "@/components/contact/ContactInfo";
function Footer() {

	return (
		<footer className="section dark-bg2 position-relative">
			<div className="container">
				{/* SEO Hidden Content */}
				<div style={{ display: "none" }}>
					<p>
						Tangguh Glass menyediakan layanan kaca patri, kaca inlay, dan kaca aluminium untuk rumah, kantor, tempat ibadah, dan bangunan komersial di seluruh Indonesia. Hubungi kami untuk konsultasi, pemesanan, atau informasi lebih lanjut mengenai produk dan layanan kaca dekoratif berkualitas.
					</p>
					<ul>
						<li>Alamat: Jl. Ciater Raya BSD No.2, Tangerang Selatan, Banten 15310</li>
						<li>Telepon: +62 857-1883-3106</li>
						<li>Email: tangguhglass@gmail.com</li>
					</ul>
				</div>
				{/* End SEO Hidden Content */}
				<div className="aximo-footer-extra-top">
					<ContactInfo />
					<div className="row">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3965.602702744903!2d106.7050912!3d-6.3158055!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e56b114c3e31%3A0x140262a4661ae7ee!2sBerkah%20Mika!5e0!3m2!1sen!2sid!4v1745146336852!5m2!1sen!2sid"
							width="600"
							height="500"
							style={{ border: "1px solid #000", width: "100%", borderRadius: "20px" }}
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>
				<div className="aximo-footer-top6">
					<div className="row">
						<div className="col-xl-4 col-lg-12">
							<div className="aximo-footer-textarea light-two">
								<Link href="/">
									<Image src={LogoWhiteImg} alt="logo" sizes="100vw" width={200}/>
								</Link>
								<p>
									Kami adalah spesialis kaca patri dan aluminium yang berdedikasi menghadirkan sentuhan seni pada setiap ruang. Mengutamakan kualitas, keindahan, dan kepuasan pelanggan.
									<br/><br/>Seluruh Hak Dilindungi oleh<br/>
									CV. Tangguh Glass Lestari Makmur
								</p>
								<FooterCopyright />
							</div>
						</div>
						<div className="col-xl-3 col-md-4">
							
						</div>
						<div className="col-xl-3 col-md-4">
							<div className="aximo-footer-menu light-two">
								<div className="aximo-footer-title light-two">
									<p>About us</p>
								</div>
								<ul>
									<li>
										<Link href="/tentang-kami">Tentang Kami</Link>
									</li>
									<li>
										<Link href="/layanan">Layanan</Link>
									</li>
									<li>
										<Link href="/galeri">Galeri</Link>
									</li>
									<li>
										<Link href="/artikel">Artikel</Link>
									</li>
									<li>
										<Link href="/kontak">Kontak</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-2 col-md-4">
							<FooterSocial />
						</div>
					</div>
				</div>
			</div>
			<div className="aximo-footer-shapev6">
				<Image src={ShapeImg} alt="shape" />
			</div>

		</footer>
	);
}

export default Footer;
