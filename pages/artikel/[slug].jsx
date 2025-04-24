import { useRouter } from "next/router";
import Categories from "../../components/artikel/Categories";
import RecentPosts from "../../components/artikel/RecentPosts";
import Search from "../../components/artikel/Search";
import Tags from "../../components/artikel/Tags";
import BlogDetails from "../../components/artikel/single-blog/BlogDetails";

// Dummy data for demonstration
const blogPosts = [
  {
    slug: "first-post",
    title: "First Blog Post",
    content: "This is the content of the first blog post."
  },
  {
    slug: "second-post",
    title: "Second Blog Post",
    content: "This is the content of the second blog post."
  }
];

function SingleBlog() {
  const router = useRouter();
  const { slug } = router.query;
  const blog = blogPosts.find(post => post.slug === slug);

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="section post-details-page aximo-section-padding2">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <BlogDetails blog={blog} />
          </div>
          <div className="col-lg-4">
            <div className="right-sidebar">
              <Search />
              <Categories />
              <RecentPosts />
              <Tags />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;