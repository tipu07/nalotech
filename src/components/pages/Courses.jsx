import React from "react";
import Cover from "../common/Cover";
import AllCourses from "./section/AllCourses";

function Courses() {
	const course = {
		cover: {
			sec_bg: "/images/digital-marketing-courses.jpg",
			heading: "Our Courses",
		},
		all_course: {
			category: {
				title: "Categories",
				ul: [
					{
						id: 1,
						li: "AWS",
						link: "/courses/course-detail",
					},
					{
						id: 2,
						li: "DevOps Cloud Automation",
						link: "/courses/course-detail",
					},
				],
			},
			block: [
				{
					id: 1,
					title: "9 of the best professional biological examples we have ever seen",
					para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus illum dolorum consectetur Officia delectus illum dolorum consectetur.",
					duration: "28.30 Minutes",
					src: "/images/Online-Learning.jpg",
					btn: "Learn More",
					btn_link: "/courses/course-detail",
				},
				{
					id: 2,
					title: "Blog SEO: How to optimize the search engines for your blog content",
					para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus illum dolorum consectetur Officia delectus illum dolorum consectetur.",
					duration: "07.30 Minutes",
					src: "/images/hero16.jpg",
					btn: "Learn More",
					btn_link: "/courses/course-detail",
				},
				{
					id: 3,
					title: "Email forwarding tips you must know by 2020",
					para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus illum dolorum consectetur Officia delectus illum dolorum consectetur.",
					duration: "19.30 Minutes",
					src: "/images/b3.jpg",
					btn: "Learn More",
					btn_link: "/courses/course-detail",
				},
				{
					id: 4,
					title: "The best newsletter templates and resources for download right now",
					para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus illum dolorum consectetur Officia delectus illum dolorum consectetur.",
					duration: "17.30 Minutes",
					src: "/images/b4.jpg",
					btn: "Learn More",
					btn_link: "/courses/course-detail",
				},
				{
					id: 5,
					title: "Google Doc features you didn't know existed (but absolutely needed)",
					para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus illum dolorum consectetur Officia delectus illum dolorum consectetur.",
					duration: "30.30 Minutes",
					src: "/images/Businesstraining_Gespraechsfuehrung.jpg",
					btn: "Learn More",
					btn_link: "/courses/course-detail",
				},
				{
					id: 6,
					title: "Spoken and repeated jokes to satisfy your inner grammar",
					para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus illum dolorum consectetur Officia delectus illum dolorum consectetur.",
					duration: "19.30 Minutes",
					src: "/images/couple-with-groceries.jpg",
					btn: "Learn More",
					btn_link: "/courses/course-detail",
				},
				{
					id: 7,
					title: "The Instagram profile anatomy is perfect",
					para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus illum dolorum consectetur Officia delectus illum dolorum consectetur.",
					duration: "17.30 Minutes",
					src: "/images/digital-marketing-courses.jpg",
					btn: "Learn More",
					btn_link: "/courses/course-detail",
				},
				{
					id: 8,
					title: "25 Tips and Tricks for Marketing on Facebook",
					para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus illum dolorum consectetur Officia delectus illum dolorum consectetur.",
					duration: "30.30 Minutes",
					src: "/images/group-young-business-377106.jpg",
					btn: "Learn More",
					btn_link: "/courses/course-detail",
				},
				{
					id: 9,
					title: "How to create infographic in less than an hour ",
					para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus illum dolorum consectetur Officia delectus illum dolorum consectetur.",
					duration: "19.30 Minutes",
					src: "/images/hero16.jpg",
					btn: "Learn More",
					btn_link: "/courses/course-detail",
				},
				{
					id: 10,
					title: "The best time to post on Instagram, Facebook, Twitter and Pinterest",
					para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus illum dolorum consectetur Officia delectus illum dolorum consectetur.",
					duration: "07.30 Minutes",
					src: "/images/www.usnews.jpg",
					btn: "Learn More",
					btn_link: "/courses/course-detail",
				},
				{
					id: 11,
					title: "13 Blogs Most mistakes bloggers start making",
					para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus illum dolorum consectetur Officia delectus illum dolorum consectetur.",
					duration: "07.30 Minutes",
					src: "/images/Online-Learning.jpg",
					btn: "Learn More",
					btn_link: "/courses/course-detail",
				},
			],
		},
	};
	return (
		<>
			<Cover data={course.cover} />
			<AllCourses data={course.all_course} />
		</>
	);
}

export default Courses;
