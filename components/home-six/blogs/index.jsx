import Link from "next/link";
import Blog1Img from "../../../public/images/blog/artikel-1.png";
import Blog2Img from "../../../public/images/blog/artikel-2.jpg";
import BlogCard from "./BlogCard";
const blogsData = [
	{
		id: crypto.randomUUID(),
		title: "Jenis-Jenis Kaca Patri dan Variasinya",
		content:
			"Kami melayani pembuatan dan pemasangan berbagai jenis kaca patri dan variasinya, seperti kaca inlay (diamond glass), kaca lukis, cermin dekorasi, dan kaca aluminium.",
		category: "Kaca Dekoratif ",
		date: "April 24, 2025",
		img: Blog1Img,
		slug: "jenis-jenis-kaca-patri-dan-variasinya",
	},
	{
		id: crypto.randomUUID(),
		title: "Panduan Memilih Jenis Kaca Dekoratif yang Tepat",
		content:
			"Bagi Anda yang sedang membangun rumah, merenovasi interior, atau mendesain tempat ibadah dan hotel, memilih jenis kaca yang tepat bisa menjadi keputusan penting.",
		category: "Kaca Dekoratif ",
		date: "April 23, 2025",
		img: Blog2Img,
		slug: "panduan-memilih-jenis-kaca-dekoratif",
	},
];
function Blogs() {
	return (
		<div className="section aximo-section-padding3">
			<div className="container">
				<div className="aximo-section-title playfair">
					<div className="row">
						<div className="col-lg-8">
							<h2>Check berita dan artikel terbaru kami</h2>
						</div>
						<div className="col-lg-4 d-flex align-items-center">
							<div className="aximo-title-btn">
								<Link className="aximo-default-btn green-btn pill" href="/artikel">
									<span>Explore All Blogs</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					{blogsData.map((blog) => (
						<BlogCard key={blog.id} blog={blog} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Blogs;
