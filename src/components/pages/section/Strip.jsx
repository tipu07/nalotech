import React from "react";
import { Link } from "react-router-dom";

function Strip({ data }) {
	return (
		<>
			<section id="strip">
				<div className="contain">
					<div className="blk">
						<div className="title">
							<h1>{data.heading}</h1>
						</div>
						<div className="txt">
							<h4>{data.sub_heading}</h4>
							<p>{data.para}</p>
							<div className="btn_blk">
								<Link to={data.btn_link} className="site_btn lg simple round">
									{data.btn}
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Strip;
