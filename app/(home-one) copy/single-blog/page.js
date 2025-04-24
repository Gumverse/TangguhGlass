import SingleBlog from "@/components/artikel/single-blog";
import BreadCrumb from "@/components/common/Breadcrumb";

function SingleBlogPage() {
	return (
		<>
			<BreadCrumb title="Blog Details" />
			<SingleBlog />
		</>
	);
}

export default SingleBlogPage;
