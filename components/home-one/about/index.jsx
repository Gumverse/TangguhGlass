import Image from "next/image";
import AboutCounter from "./AboutCounter";
import Video from "./Video";

function About() {
	return (
		<div className="section aximo-section-padding">
			<div id="aximo-counter"></div>
			<div className="container">
				<div className="aximo-section-title">
					<div className="row">
						<div className="col-lg-7">
							<h2>
								<span className="aximo-title-animation">
								Tentang Kami
								</span><br />
								Tangguh Glass Lestari Makmur
							</h2>
						</div>
						<div className="col-lg-4 offset-lg-1 d-flex align-items-center">
							<p>
							Kami adalah spesialis kaca patri dan kaca aluminium nomor satu di Indonesia yang telah berpengalaman sejak tahun 2008. Berawal dari sebuah tim kecil dengan semangat tinggi, kami terus tumbuh seiring meningkatnya permintaan pelanggan di seluruh Indonesia.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-8">
						<Video />
					</div>
					<div className="col-lg-4">
						<AboutCounter />
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
