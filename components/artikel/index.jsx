import Categories from "./Categories";
import RecentPosts from "./RecentPosts";
import Search from "./Search";
import Tags from "./Tags";

import Blog1Img from "../../public/images/blog/artikel-1.png";
import Blog2Img from "../../public/images/blog/artikel-2.jpg";

import FadeInStagger from "../animation/FadeInStagger";
import BlogCard from "./BlogCard";
import Navigation from "./Navigation";

const blogData = [
	{
		id: crypto.randomUUID(),
		title: "Jenis-Jenis Kaca Patri dan Variasinya: Kaca Dekoratif untuk Hunian Elegan",
		content:
			"CV. Tangguh Glass Lestari Makmur adalah spesialis kaca dekoratif terpercaya sejak tahun 2008. Kami melayani pembuatan dan pemasangan berbagai jenis kaca patri dan variasinya, seperti kaca inlay (diamond glass), kaca lukis (painted glass), cermin dekorasi, dan kaca aluminium.",
		category: "Kaca Dekoratif ",
		date: "April 24, 2025",
		img: Blog1Img,
		slug: "jenis-jenis-kaca-patri-dan-variasinya",
	},
	{
		id: crypto.randomUUID(),
		title: "Panduan Memilih Jenis Kaca Dekoratif yang Tepat untuk Rumah dan Bangunan Komersial",
		content:
			"Kaca dekoratif bukan hanya berfungsi sebagai elemen estetika, tetapi juga dapat meningkatkan kenyamanan dan nilai properti. Bagi Anda yang sedang membangun rumah, merenovasi interior, atau mendesain tempat ibadah dan hotel, memilih jenis kaca yang tepat bisa menjadi keputusan penting.",
		category: "Kaca Dekoratif ",
		date: "April 23, 2025",
		img: Blog2Img,
		slug: "panduan-memilih-jenis-kaca-dekoratif",
	},

];
function Blog() {
	return (
		<div className="section aximo-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						{blogData.map((blog, index) => (
							<FadeInStagger className="single-post-item" key={blog.id} index={index}>
								<BlogCard key={blog.id} blog={blog} />
							</FadeInStagger>
						))}
						<Navigation />
					</div>
					<div className="col-lg-4">
						<div className="right-sidebar">
							<Search />
							{/* <Categories /> */}
							<RecentPosts posts={blogData} />
							<Tags />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Blog;
