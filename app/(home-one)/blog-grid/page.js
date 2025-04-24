import GridBlog from "@/components/artikel/grid-blog";
import BreadCrumb from "@/components/common/Breadcrumb";

function BlogGridPage() {
	return (
		<>
			<BreadCrumb title="Blog Grid" />
			<GridBlog />
		</>
	);
}

export default BlogGridPage;
