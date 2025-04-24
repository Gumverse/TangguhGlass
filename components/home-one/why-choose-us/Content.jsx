import Image from "next/image";
import Star2Img from "./star2.png";

function Content() {
	return (
		<div className="aximo-default-content">
			<h2>
				<span className="aximo-title-animation">
				Proses Kerja Kami
					<span className="aximo-title-icon">
						<Image src={Star2Img} alt="Star2Img" />
					</span>
				</span>
			</h2>
			<p>
			setiap proyek dimulai dengan konsultasi mendalam untuk memahami kebutuhan dan keinginan pelanggan. Tim desain kami kemudian membuat sketsa dan rancangan yang detail, menggabungkan unsur seni tradisional kaca patri maupun inovasi modern agar hasil akhir sesuai ekspektasi.
			</p>
			<p>
			Setelah desain disetujui, proses produksi dimulai dengan pemilihan bahan kaca berkualitas tinggi dan teknik pengerjaan presisi oleh para pengrajin berpengalaman. Kami memastikan setiap tahap diawasi ketat demi menjaga standar mutu terbaik sebelum produk dikirim ke seluruh Indonesia.
			</p>
		</div>
	);
}

export default Content;
