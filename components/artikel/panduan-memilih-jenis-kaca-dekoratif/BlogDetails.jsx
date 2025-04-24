import FadeInUp from "@/components/animation/FadeInUp";
import Image from "next/image";
import Blog3Img from "../../../public/images/blog/artikel-2.jpg";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import PostMeta from "./PostMeta";
import PostTags from "./PostTags";
function BlogDetails() {
	return (
		<>
			<FadeInUp className="post-thumbnail">
				<Image src={Blog3Img} alt="Jenis Jenis Kaca Patri dan Variasinya" sizes="100vw" />
			</FadeInUp>
			<div className="single-post-content-wrap">
				<PostMeta />
				<div className="entry-content">
					<h2>Panduan Memilih Jenis Kaca Dekoratif</h2>
					<blockquote>
						<p><em>Temukan kaca terbaik untuk rumah dan bangunan Anda bersama CV. Tangguh Glass Lestari Makmur</em></p>
					</blockquote>

					<h3>Mengapa Penting Memilih Jenis Kaca yang Tepat?</h3>
					<p>
						Kaca dekoratif bukan hanya estetika — ia memengaruhi pencahayaan, privasi, dan nilai properti.
						Memilih kaca yang tepat berarti menciptakan suasana yang ideal di setiap ruangan Anda.
					</p>

					<h3>Jenis-Jenis Kaca Dekoratif</h3>

					<h4>1. Kaca Patri</h4>
					<p>
						Sempurna untuk tempat ibadah dan rumah klasik. Membawa nuansa religius dan artistik dengan warna-warna indah.
					</p>

					<h4>2. Kaca Lukis</h4>
					<p>
						Cocok untuk interior artistik seperti dapur, kamar mandi, atau partisi dekoratif. Motif bisa disesuaikan sesuai gaya.
					</p>

					<h4>3. Kaca Inlay (Diamond Glass)</h4>
					<p>
						Elegan dan modern. Ideal untuk pintu kaca atau partisi dengan gaya minimalis dan profesional.
					</p>

					<h4>4. Cermin Dekorasi</h4>
					<p>
						Memperluas ruangan secara visual. Sangat cocok untuk foyer, kamar tidur, dan area sempit.
					</p>

					<h4>5. Kaca Aluminium</h4>
					<p>
						Fungsional dan tahan lama. Digunakan untuk pintu, jendela, dan fasad bangunan modern.
					</p>

					<h3>Tips Memilih Kaca Dekoratif</h3>
					<blockquote>
						<p><strong>Tips praktis dari tim ahli CV. Tangguh Glass:</strong></p>
					</blockquote>
					<ul>
						<li>Sesuaikan dengan desain interior Anda</li>
						<li>Utamakan kebutuhan pencahayaan dan privasi</li>
						<li>Pilih penyedia jasa terpercaya dan profesional</li>
						<li>Pastikan kualitas material dan ketahanan</li>
					</ul>

					<h3>Tentang CV. Tangguh Glass Lestari Makmur</h3>
					<p>
						Sejak 2008, kami telah melayani ratusan klien di seluruh Indonesia untuk proyek kaca dekoratif —
						dari rumah pribadi, gedung perkantoran, tempat ibadah, hingga hotel bintang lima. Kami
						menyediakan jasa desain dan instalasi
						<strong>kaca patri, kaca lukis, kaca inlay, cermin dekorasi, dan kaca aluminium</strong>.
					</p>
					<blockquote>
						<p><strong>Hubungi kami</strong> sekarang untuk konsultasi gratis dan penawaran khusus!</p>
					</blockquote>
					<PostTags />
					{/* <CommentList />
					<CommentForm /> */}
				</div>
			</div>
		</>
	);
}

export default BlogDetails;
