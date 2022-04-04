import React from "react";
import Cover from "../common/Cover";
import Service from "./section/Service";

function CourseDetail() {
	const detail = {
		cover: {
			sec_bg: "/images/Businesstraining_Gespraechsfuehrung.jpg",
			heading: "Course Detail",
		},
		service: {
			heading: "Low Voltage Cabling",
			subtitle: "All of our services are backed by our 100% satisfaction guarantee.",
			para: "Odit sint debitis soluta perferendis totam aperiam hic eum numquam dolore laboriosam eius id odio commodi, expedita accusamus amet obcaecati ipsum dicta, fuga maxime reiciendis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. At recusandae quia dicta eligendi illo delectus numquam, sit ut nostrum nobis itaque culpa omnis ratione debitis nulla non ex sed dolor? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At recusandae quia dicta eligendi illo delectus numquam, sit ut nostrum nobis itaque culpa omnis ratione debitis nulla non ex sed dolor?",
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
				{
					id: 5,
					li: "Full-service electrical layout, design",
				},
				{
					id: 6,
					li: "Wiring and installation/upgrades",
				},
			],
			src: "/images/Businesstraining_Gespraechsfuehrung.jpg",
		},
	};
	return (
		<>
			<Cover data={detail.cover} />
			<Service data={detail.service} />
		</>
	);
}

export default CourseDetail;
