import Accordion from "./Accordion";
import Content from "./Content";
import styles from "./WhyChooseUs.module.css";
function WhyChooseUs() {
	return (
		<div className="section">
			<div className="container">
				<div className="aximo-faq-wrap">
					<div className="row mb-5">
						<div className="col-lg-7 d-flex align-items-center">
							<Content />
						</div>
						<div className="col-lg-5">
							<Accordion />
						</div>
					</div>
					{/* CTA Row */}
					<div className={`row justify-content-center ${styles.ctaRowMargin}`}>
						<div className="col-lg-10 text-center">
							<h2 className="mb-3" style={{ fontWeight: 800, color: "#e63946" }}>
								Pesan Kaca Patri Sekarang, Stok & Jadwal Produksi Terbatas!
							</h2>
							<p className="mb-4" style={{ fontSize: "1.2rem" }}>
								Jangan lewatkan kesempatan memperindah ruangan Anda dengan kaca patri eksklusif dari Tangguh Glass. Hubungi kami sekarang juga sebelum slot produksi penuh, dan dapatkan konsultasi GRATIS untuk kebutuhan kaca patri impian Anda!
							</p>
							<div className="aximo-bottom-center">
								<a
									className="aximo-default-btn green-btn pill"
									href="https://wa.me/6285718833106?text=Halo%2C%20saya%20ingin%20memesan%20kaca%20patri%20di%20Tangguh%20Glass.%20Mohon%20info%20jadwal%20dan%20penawaran%20terbaiknya."
									target="_blank"
									rel="noopener noreferrer"
									style={{ display: "inline-flex", alignItems: "center", fontWeight: 600, fontSize: "1.1rem" }}
								>
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
										<path d="M13.601 2.326A7.872 7.872 0 0 0 8 0C3.582 0 0 3.582 0 8a7.944 7.944 0 0 0 1.15 4.133L.058 15.924l3.887-1.02A7.939 7.939 0 0 0 8 16c4.418 0 8-3.582 8-8 0-2.122-.84-4.122-2.399-5.674ZM8 14.5a6.5 6.5 0 0 1-3.313-.898l-.237-.141-2.307.606.62-2.245-.154-.232A6.467 6.467 0 0 1 1.5 8c0-3.589 2.911-6.5 6.5-6.5 1.735 0 3.364.676 4.591 1.904A6.46 6.46 0 0 1 14.5 8c0 3.589-2.911 6.5-6.5 6.5Zm3.061-4.104c-.167-.083-.988-.488-1.142-.544-.154-.056-.266-.083-.378.083-.111.167-.433.544-.53.656-.098.111-.195.125-.362.042a5.328 5.328 0 0 1-1.568-.963 5.882 5.882 0 0 1-1.086-1.313c-.111-.195-.012-.3.083-.396.085-.085.195-.222.293-.333.098-.111.13-.194.195-.323.065-.13.033-.243-.016-.333-.05-.089-.378-.91-.518-1.246-.136-.328-.274-.283-.378-.288l-.323-.006a.62.62 0 0 0-.448.208c-.154.167-.586.572-.586 1.397 0 .824.6 1.621.683 1.733.083.111 1.174 1.793 2.848 2.513 1.675.72 1.675.48 1.976.45.3-.028.988-.403 1.126-.792.138-.389.138-.722.097-.792-.04-.07-.154-.111-.321-.194Z" />
									</svg>
									&nbsp;&nbsp;Chat WhatsApp Sekarang
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WhyChooseUs;
