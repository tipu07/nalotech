import React from "react";
import { Link } from "react-router-dom";
import Image from "../common/Image";

function BlogBlock({ val }) {
	return (
		<>
			<div className="blog_blk">
				<div className="fig">
					<Link to={val.btn_link}>
						<Image src={val.src} alt="" />
					</Link>
				</div>
				<div className="txt">
					<div className="date">{val.date}</div>
					<h4 className="fancy">
						<Link to={val.btn_link}>{val.title}</Link>
					</h4>
					<p>{val.para}</p>
					<Link to={val.btn_link} className="site_btn text">
						{val.btn}
					</Link>
				</div>
			</div>
		</>
	);
}

export default BlogBlock;
