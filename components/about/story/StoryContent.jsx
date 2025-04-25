function StoryContent() {
	return (
		<div className="row">
			{/* SEO Hidden Content */}
			<div style={{ display: "none" }}>
				<h1>Profil Perusahaan Tangguh Glass</h1>
				<p>
					Tangguh Glass adalah perusahaan spesialis kaca patri dan kaca aluminium di Indonesia yang berkomitmen pada kualitas dan pelayanan terbaik. Visi dan misi kami mendukung keunggulan produk serta kepuasan pelanggan di seluruh Indonesia.
				</p>
				<ul>
					<li>Visi: Menjadi perusahaan terdepan di bidang kaca patri dan kaca aluminium di Indonesia.</li>
					<li>Misi: Menghasilkan karya seni kaca berkualitas, membangun hubungan jangka panjang, memperluas jangkauan pengiriman, dan mengembangkan tim ahli.</li>
				</ul>
			</div>
			{/* End SEO Hidden Content */}
			<div className="col-lg-6">
				<h3>Visi Kami</h3>
				<p>
					Menjadi perusahaan terdepan di bidang kaca patri dan kaca aluminium di Indonesia yang dikenal karena kualitas produk unggulan serta pelayanan terbaik bagi pelanggan.
				</p>
			</div>
			<div className="col-lg-6">
				<h3>Misi Kami</h3>
				<ul className="story-bullet">
					<li>🔹 Menghasilkan karya seni kaca berkualitas tinggi dengan sentuhan inovasi dan tradisi.</li>
					<li>🔹 Membangun hubungan jangka panjang dengan pelanggan melalui layanan profesional dan responsif.</li>
					<li>🔹 Memperluas jangkauan pengiriman agar dapat melayani seluruh wilayah Indonesia secara optimal.</li>
					<li>🔹 Mengembangkan tim ahli berdedikasi demi menjaga standar mutu terbaik.</li>
				</ul>
			</div>
		</div>
	);
}

export default StoryContent;
