import Image from "next/image";
import QuestionImg from "../../public/images/icon/question.svg";
import Star2Img from "../../public/images/v1/star2.png";
const faqData = {
	faq1: [
		{
			id: crypto.randomUUID(),
			title: "Apa itu kaca patri dan apa keunggulannya?",
			text: "Kaca patri adalah seni menyusun potongan kaca berwarna menjadi pola atau gambar dekoratif, sering digunakan pada jendela, pintu, dan partisi ruangan. Keunggulannya terletak pada nilai estetika tinggi, kesan mewah, dan kemampuannya menciptakan permainan cahaya yang indah di ruangan Anda.",
		},
		{
			id: crypto.randomUUID(),
			title: "Apakah saya bisa memesan desain kaca patri custom sesuai keinginan?",
			text: "Tentu. Kami menyediakan layanan desain custom kaca patri, kaca inlay, dan kaca painted. Anda bisa membawa desain sendiri atau berkonsultasi dengan tim kami untuk merancang motif sesuai kebutuhan estetika dan fungsi ruang Anda.",
		},
		{
			id: crypto.randomUUID(),
			title: "Berapa lama waktu produksi untuk satu proyek kaca dekoratif?",
			text: "Waktu pengerjaan bervariasi tergantung tingkat kompleksitas desain dan ukuran proyek. Rata-rata produksi memakan waktu antara 1 hingga 4 minggu. Untuk proyek besar atau desain khusus, estimasi waktu akan kami sampaikan setelah proses konsultasi.",
		},
	],
	faq2: [
		{
			id: crypto.randomUUID(),
			title: "Berapa harga kaca patri atau kaca dekoratif per meter?",
			text: "Harga kaca patri dan kaca dekoratif bervariasi tergantung jenis kaca, tingkat kerumitan desain, ukuran, serta teknik pengerjaan (patri, inlay, painted, dll). Untuk desain custom, kami akan memberikan estimasi harga setelah proses konsultasi dan desain awal selesai.",
		},
		{
			id: crypto.randomUUID(),
			title: "Apakah kaca dekoratif cocok untuk rumah tinggal atau hanya untuk tempat ibadah?",
			text: "Kaca dekoratif sangat fleksibel dan cocok digunakan di berbagai tempat — mulai dari rumah pribadi, cafe, hotel, kantor, hingga tempat ibadah. Kami memiliki beragam gaya, dari klasik hingga modern, yang bisa disesuaikan dengan tema interior Anda.",
		},
		{
			id: crypto.randomUUID(),
			title: "Di mana lokasi layanan Anda dan apakah bisa kirim ke luar kota?",
			text: "Kami berbasis di Jln. Ciater Raya no 2,Tanggerang Selatan, namun kami melayani pengiriman dan pemasangan ke seluruh Indonesia, termasuk Jakarta, Surabaya, Bandung, Yogyakarta, dan kota lainnya. Kami pastikan kemasan dan pengiriman aman hingga produk sampai di tempat Anda.",
		},
	],
};
function TwoColumnFaq() {
	return (
		<div className="section aximo-section-padding">
			<div className="container">
				{/* SEO Hidden Content */}
				<div style={{ display: "none" }}>
					<p>
						FAQ kaca patri dan kaca dekoratif Tangguh Glass: temukan jawaban seputar proses pemesanan, desain custom, estimasi harga, waktu produksi, pengiriman, serta keunggulan produk kaca patri untuk rumah, tempat ibadah, dan bangunan komersial di Indonesia.
					</p>
					<ul>
						<li>Apa itu kaca patri dan keunggulannya?</li>
						<li>Bisakah memesan desain kaca patri custom?</li>
						<li>Berapa lama waktu produksi kaca dekoratif?</li>
						<li>Bagaimana harga kaca patri per meter?</li>
						<li>Apakah kaca dekoratif cocok untuk rumah tinggal?</li>
						<li>Apakah layanan pengiriman tersedia ke luar kota?</li>
					</ul>
				</div>
				{/* End SEO Hidden Content */}
				<div className="aximo-section-title center">
					<h2>
						FAQs
						<span className="aximo-title-animation">
							Pertanyaan Umum Pelanggan
							<span className="aximo-title-icon">
								<Image src={Star2Img} alt="Star" />
							</span>
						</span>
					</h2>
				</div>
				<div className="row">
					<div className="col-lg-6">
						<div className="aximo-accordion-normal-wrap responsive-margin">
							{faqData.faq1.map((faq) => (
								<div key={faq.id} className="aximo-accordion-normal-item">
									<div className="aximo-accordion-normal-icon">
										<Image src={QuestionImg} alt="QuestionImg" />
									</div>
									<div className="aximo-accordion-normal-data">
										<h3>{faq.title}</h3>
										<p>{faq.text}</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="col-lg-6">
						<div className="aximo-accordion-normal-wrap">
							{faqData.faq2.map((faq) => (
								<div key={faq.id} className="aximo-accordion-normal-item">
									<div className="aximo-accordion-normal-icon">
										<Image src={QuestionImg} alt="QuestionImg" />
									</div>
									<div className="aximo-accordion-normal-data">
										<h3>{faq.title}</h3>
										<p>{faq.text}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TwoColumnFaq;
