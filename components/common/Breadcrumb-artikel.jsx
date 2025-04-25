import Link from "next/link";
function BreadCrumb({ title }) {
	return (
		<div className="aximo-breadcrumb">
			<div className="container">
				{/* SEO Hidden Content */}
				<div style={{ display: "none" }}>
					<h1>{title} | Tangguh Glass</h1>
					<p>
						Halaman ini menampilkan artikel "{title}" dari Tangguh Glass, spesialis kaca patri dan kaca aluminium di Indonesia. Temukan informasi, tips, dan inspirasi seputar kaca dekoratif untuk hunian maupun bangunan komersial.
					</p>
				</div>
				{/* End SEO Hidden Content */}
				<h1 className="post__title">{title}</h1>
				<nav className="breadcrumbs">
					<ul>
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/artikel">Artikel</Link>
						</li>
						<li aria-current="page"> {title}</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default BreadCrumb;
