import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";

function Accordion() {
	return (
		<FadeInStaggerTwo className="accordion aximo-accordion-wrap" id="aximo-accordion">
			{/* SEO Hidden Content */}
			<div className="sr-only">
				<p>
					Tahapan layanan Tangguh Glass meliputi konsultasi, desain, dan produksi kaca patri serta kaca aluminium. Setiap proses dikerjakan oleh tim profesional untuk memastikan hasil terbaik dan kepuasan pelanggan di seluruh Indonesia.
				</p>
				<ol>
					<li>Konsultasi: Diskusi kebutuhan dan konsep desain bersama klien.</li>
					<li>Desain: Pembuatan sketsa, pemilihan warna, dan bahan terbaik.</li>
					<li>Produksi: Proses pembuatan dan pemasangan kaca patri secara presisi.</li>
				</ol>
			</div>
			{/* End SEO Hidden Content */}
			<FadeInStaggerTwoChildren className="accordion-item">
				<h3 className="accordion-header">
					<button
						className="accordion-button"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseOne"
					>
						01/ Konsultasi
					</button>
				</h3>
				<div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
					Kami memulai dengan diskusi mendalam untuk memahami visi, kebutuhan, dan konsep desain yang diinginkan klien.
					</div>
				</div>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren className="accordion-item">
				<h3 className="accordion-header" id="headingOne">
					<button
						className="accordion-button"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseTwo"
					>
						02/ Desain
					</button>
				</h3>
				<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
					Kami membuat sketsa atau mockup awal, memberikan saran desain, warna, dan bahan terbaik untuk hasil yang optimal.
					</div>
				</div>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren className="accordion-item">
				<h3 className="accordion-header">
					<button
						className="accordion-button collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseThree"
					>
						03/ Produksi
					</button>
				</h3>
				<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
					Setelah desain disetujui, kami mulai proses produksi kaca patri dengan presisi, lalu mengatur pemasangan dengan rapi dan profesional.
					</div>
				</div>
			</FadeInStaggerTwoChildren>
		</FadeInStaggerTwo>
	);
}

export default Accordion;
