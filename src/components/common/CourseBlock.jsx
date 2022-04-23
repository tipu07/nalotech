import React from "react";
import { Link } from "react-router-dom";
import Image from "../common/Image";

function CourseBlock({ val }) {
	return (
		<>
			<div className="course_blk">
				<div className="fig">
					<Link to={val.btn_link}>
						<Image src={val.src} alt="" />
					</Link>
				</div>
				<div className="txt">
					<div className="duration">{val.duration}</div>
					<h4 className="fancy">
						<Link to={val.btn_link}>{val.title}</Link>
					</h4>
					<div className="rating">
						<i className="star"></i>
						<i className="star"></i>
						<i className="star"></i>
						<i className="star"></i>
						<i className="star"></i>
						<span>4.5(120)</span>
					</div>
					<p>{val.para}</p>
					<Link to={val.btn_link} className="site_btn text">
						{val.btn}
					</Link>
				</div>
			</div>
		</>
	);
}

export default CourseBlock;
