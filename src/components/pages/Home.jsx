import React from "react";
import Banner from "./section/Banner";
import Strip from "./section/Strip";
import Serve from "./section/Serve";
import Intro from "./section/Intro";
// import Choose from "./section/Choose";
// import Folio from "./section/Folio";
import Instructor from "./section/Instructor";
import Posts from "./section/Posts";
// import Assets from "./section/Assets";

function Home() {
	const home = {
		banner: {
			sec_bg: "/images/hero16.jpg",
			heading: "Take your learning organization to the next level",
			para: "Knowledge to people",
			btn_01: "Learn More",
			btn_link_01: "/about",
			btn_02: "Contact us",
			btn_link_02: "/contact",
		},
		strip: {
			heading: "We do things differently",
			sub_heading: "All of our services are backed by our 100% satisfaction guarantee.",
			para: "Quo, deleniti vel, id reprehenderit, ullam sit quas minus odit voluptates iusto corrupti odio nesciunt ut temporibus voluptatem suscipit molestias! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quae eos facilis voluptas, blanditiis nisi doloribus quaerat similique adipisci debitis sequi rerum eius laudantium numquam!",
			btn: "Learn More",
			btn_link: "/about",
		},
		serve: {
			sec_bg: "/images/layer_2.svg",
			heading: "Courses we ",
			heading_ex: "are Offering",
			block: [
				{
					id: 1,
					src: "/images/www.usnews.jpg",
					title: "Online Learning Courses",
					link: "/",
				},
				{
					id: 2,
					src: "/images/digital-marketing-courses.jpg",
					title: "Marketing Learning Courses",
					link: "/",
				},
				{
					id: 3,
					src: "/images/couple-with-groceries.jpg",
					title: "Lifestyle Learning Courses",
					link: "/",
				},
				{
					id: 4,
					src: "/images/Businesstraining_Gespraechsfuehrung.jpg",
					title: "Business Learning Courses",
					link: "/",
				},
				{
					id: 5,
					src: "/images/Online-Learning.jpg",
					title: "Online Learning Courses",
					link: "/",
				},
				{
					id: 6,
					src: "/images/introduction-to-digital.jpg",
					title: "Marketing Learning Courses",
					link: "/",
				},
			],
		},
		intro: {
			sec_bg: "/images/layer_3.svg",
			heading: "What are ",
			heading_ex: "we doing",
			subtitle: "Hosting opens up a world of opportunity",
			para: "Odit sint debitis soluta perferendis totam aperiam hic eum numquam dolore laboriosam eius id odio commodi, expedita accusamus amet obcaecati ipsum dicta, fuga maxime reiciendis.",
			ul: [
				{
					id: 1,
					li: "Full-service electrical layout, design",
				},
				{
					id: 2,
					li: "Wiring and installation/upgrades",
				},
				{
					id: 3,
					li: "Emergency power solutions (generators)",
				},
				{
					id: 4,
					li: "Virtually any electrical needs you have – just ask!",
				},
			],
			btn: "Learn More",
			btn_link: "/about",
			src: "/images/group-young-business-377106.jpg",
		},
		choose: {
			heading: "We are residential & ",
			heading_ex: "commercial electricians",
			block: [
				{
					id: 1,
					icon: "/images/icon-electric.svg",
					title: "Electrical Installation",
					para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				},
				{
					id: 2,
					icon: "/images/icon-bulb.svg",
					title: "Light Installation",
					para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				},
				{
					id: 3,
					icon: "/images/icon-switch.svg",
					title: "Electrical Switches",
					para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				},
				{
					id: 4,
					icon: "/images/icon-wiring.svg",
					title: "Electrical Wiring",
					para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				},
				{
					id: 5,
					icon: "/images/icon-tool.svg",
					title: "Electrical Repair",
					para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				},
				{
					id: 6,
					icon: "/images/icon-safety.svg",
					title: "Electrical Safety",
					para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				},
			],
		},
		assets: {
			sec_bg: "/images/box01-bg-desktop.jpg",
			heading: "We are qualified and experienced in providing a range of electric services.",
			para: "A video is worth 1.8 million words.",
			btn_img_src: "/images/play_icon.svg",
		},
		instructor: {
			heading: "Experienced Teachers",
			para: "Odit sint debitis soluta perferendis totam aperiam hic eum numquam dolore laboriosam eius id odio commodi, expedita accusamus amet obcaecati ipsum dicta, fuga maxime reiciendis.",
			block: [
				{
					id: 1,
					title: "August Dueholm",
					subtitle: "Presidents",
					src: "/images/01.jpg",
				},
				{
					id: 2,
					title: "Carl Vinter",
					subtitle: "Co-President",
					src: "/images/02.jpg",
				},
				{
					id: 3,
					title: "Sofus Koba",
					subtitle: "Head of Partner Relations",
					src: "/images/03.jpg",
				},
				{
					id: 4,
					title: "Simone Holm",
					subtitle: "Partner Relations Team",
					src: "/images/04.jpg",
				},
			],
		},
		folio: {
			heading: "See what ",
			heading_ex: "they're saying",
			para: "We are very proud of the service we provide and stand by every product we carry.",
			block: [
				{
					id: 1,
					src: "/images/01.jpg",
					name: "Sasha Bonds",
					label: "Businesswoman",
					para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At recusandae quia dicta eligendi illo delectus numquam, sit ut nostrum nobis itaque culpa omnis ratione debitis nulla non ex sed dolor?",
				},
				{
					id: 2,
					src: "/images/02.jpg",
					name: "John Wick",
					label: "Businessman",
					para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At recusandae quia dicta eligendi illo delectus numquam, sit ut nostrum nobis itaque culpa omnis ratione debitis nulla non ex sed dolor?",
				},
				{
					id: 3,
					src: "/images/03.jpg",
					name: "Jennifer Kem",
					label: "Businesswoman",
					para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At recusandae quia dicta eligendi illo delectus numquam, sit ut nostrum nobis itaque culpa omnis ratione debitis nulla non ex sed dolor?",
				},
			],
		},
		posts: {
			heading: "See ",
			heading_ex: "Our Blogs",
			block: [
				{
					id: 1,
					title: "9 of the best professional biological examples we have ever seen",
					para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus illum dolorum consectetur Officia delectus illum dolorum consectetur.",
					date: "28 February, 2022",
					src: "/images/Online-Learning.jpg",
					btn: "Learn More",
					btn_link: "/blog/blog-detail",
				},
				{
					id: 2,
					title: "Blog SEO: How to optimize the search engines for your blog content",
					para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus illum dolorum consectetur Officia delectus illum dolorum consectetur.",
					date: "07 July, 2021",
					src: "/images/hero16.jpg",
					btn: "Learn More",
					btn_link: "/blog/blog-detail",
				},
				{
					id: 3,
					title: "Email forwarding tips you must know by 2020",
					para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus illum dolorum consectetur Officia delectus illum dolorum consectetur.",
					date: "19 May 2020",
					src: "/images/b3.jpg",
					btn: "Learn More",
					btn_link: "/blog/blog-detail",
				},
			],
		},
	};
	return (
		<>
			<Banner data={home.banner} />
			<Strip data={home.strip} />
			<Serve data={home.serve} />
			<Intro data={home.intro} />
			{/* <Choose data={home.choose} /> */}
			{/* <Folio data={home.folio} /> */}
			<Instructor data={home.instructor} />
			<Posts data={home.posts} />
		</>
	);
}

export default Home;
