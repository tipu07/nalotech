import React from "react";
import Cover from "../common/Cover";
import BlogPostsDetail from "./section/BlogPostsDetail";

function Blog() {
	const detail = {
		cover: {
			sec_bg: "/images/Businesstraining_Gespraechsfuehrung.jpg",
			heading: "Blog Detail",
		},
		posts: {
			details: {
				title: "9 of the best professional biological examples we have ever seen",
				date: "28 February, 2022",
				src: "/images/hero16.jpg",
			},
			category: {
				title: "Categories",
				ul: [
					{
						id: 1,
						li: "Science",
						link: "/blog/blog-detail",
					},
					{
						id: 2,
						li: "Information Technology",
						link: "/blog/blog-detail",
					},
					{
						id: 3,
						li: "Artificial Intelligence",
						link: "/blog/blog-detail",
					},
					{
						id: 4,
						li: "Craftsmanship",
						link: "/blog/blog-detail",
					},
					{
						id: 5,
						li: "Professional Beauty",
						link: "/blog/blog-detail",
					},
					{
						id: 6,
						li: "Agriculture",
						link: "/blog/blog-detail",
					},
				],
			},
		},
	};
	return (
		<>
			<Cover data={detail.cover} />
			<BlogPostsDetail data={detail.posts} />
		</>
	);
}

export default Blog;
