import FadeInUp from "@/components/animation/FadeInUp";
import Image from "next/image";
import Blog3Img from "../../../public/images/blog/artikel-1.png";
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
					<h3>Jenis-Jenis Kaca Patri dan Variasinya: Kaca Dekoratif untuk Hunian Elegan</h3>

					<p><strong>CV. Tangguh Glass Lestari Makmur</strong> adalah spesialis kaca dekoratif terpercaya sejak tahun 2008. Kami melayani pembuatan dan pemasangan berbagai jenis <strong>kaca patri</strong> dan variasinya, seperti <strong>kaca inlay</strong> (diamond glass), <strong>kaca lukis</strong>, <strong>cermin dekorasi</strong>, dan <strong>kaca aluminium</strong>.</p>

					<h3 class="mt-5">1. Kaca Patri: Seni Kaca Berwarna Bernilai Estetik Tinggi</h3>
					<p>Kaca patri dibuat dari potongan kaca berwarna yang dirangkai membentuk motif. Proses ini menggunakan timah atau kuningan sebagai penyambung antar potongan.</p>
					<ul className="custom-disc-list">
						<li>🔹 Menambah nilai estetika pada jendela, pintu, dan partisi</li>
						<li>🔹 Menciptakan efek cahaya warna-warni</li>
						<li>🔹 Cocok untuk rumah ibadah, hotel, dan rumah klasik</li>
					</ul>

					<h3 class="mt-5">2. Kaca Inlay (Diamond Glass): Sentuhan Elegan dengan Efek Berlian</h3>
					<p>Kaca inlay memiliki potongan logam atau kaca dekoratif yang disisipkan ke dalam kaca utama, menciptakan tampilan mewah dan berkelas.</p>
					<ul className="custom-disc-list">
						<li>🔹 Tampilan eksklusif dan elegan</li>
						<li>🔹 Cocok untuk pintu, dinding kaca, dan partisi</li>
					</ul>

					<h3 class="mt-5">3. Kaca Lukis (Painted Glass): Kreasi Artistik pada Media Kaca</h3>
					<p>Kaca lukis dilukis langsung dengan cat tahan panas, lalu dibakar agar warnanya menyatu permanen dengan kaca.</p>
					<ul className="custom-disc-list">
						<li>🔹 Motif bisa custom sesuai tema</li>
						<li>🔹 Digunakan untuk dinding, pintu, dan panel interior</li>
					</ul>

					<h3 class="mt-5">4. Cermin Dekorasi: Fungsional Sekaligus Estetis</h3>
					<p>Cermin dekorasi berfungsi memperluas visual ruangan sekaligus mempercantik interior dengan desain artistik seperti bevel dan ukiran.</p>

					<h3 class="mt-5">5. Kaca Aluminium: Kombinasi Fungsional dan Tampilan Modern</h3>
					<p>Kaca aluminium menggabungkan keindahan kaca dengan rangka aluminium, cocok untuk pintu dan jendela bergaya minimalis.</p>
					<ul className="custom-disc-list">
						<li>🔹 Tahan cuaca dan ringan</li>
						<li>🔹 Tampilan modern dan profesional</li>
					</ul>

					<h3 class="mt-5">Kenapa Memilih CV. Tangguh Glass Lestari Makmur?</h3>
					<blockquote className="mt-2">Spesialis Kaca Patri, Kaca Dekorasi dan Kaca Aluminium Terbaik Se-Indonesia </blockquote>
					<ul className="custom-disc-list">
						<li>🔹 Lebih dari 15 tahun pengalaman</li>
						<li>🔹 Tim profesional dan berpengalaman</li>
						<li>🔹 Desain custom sesuai kebutuhan</li>
						<li>🔹 Proses cepat dan hasil berkualitas</li>
					</ul>
					

					<p class="mt-4">📞 Hubungi kami sekarang untuk konsultasi gratis atau lihat galeri proyek kami untuk inspirasi desain kaca terbaik!</p>
					<PostTags />
					{/* <CommentList />
					<CommentForm /> */}
				</div>
			</div>
		</>
	);
}

export default BlogDetails;
