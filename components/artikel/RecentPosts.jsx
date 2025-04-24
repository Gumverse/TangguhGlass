import Image from "next/image";
import Link from "next/link";

function RecentPosts({ posts = [] }) {
	return (
		<div className="widget aximo_recent_posts_Widget">
			<h3 className="wp-block-heading">Recent Posts:</h3>
			{posts.map((post) => {
				const shortTitle =
					post.title.length > 35
						? post.title.slice(0, 35) + "..."
						: post.title;
				return (
					<div className="post-item" key={post.id}>
						<div className="post-thumb">
							<Link href={`/artikel/${post.slug}`}>
								<Image src={post.img} alt={post.title} sizes="100vw" />
							</Link>
						</div>
						<div className="post-text">
							<div className="post-date">{post.date}</div>
							<Link className="post-title" href={`/artikel/${post.slug}`}>
								{shortTitle}
							</Link>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default RecentPosts;
