import React from "react";
import { Link } from "react-router-dom";

function Choose({ data }) {
	return (
		<>
			<section id="serve" style={{ backgroundImage: "url(" + data.sec_bg + ")" }}>
				<div className="contain text-center">
					<div className="content">
						<h1>
							{data.heading}
							<strong>{data.heading_ex}</strong>
						</h1>
					</div>
					<div className="flex_row">
						{data.block.map((val) => {
							return (
								<div className="col" key={val.id}>
									<div className="serve_blk">
										<div className="fig">
											<img src={val.src} alt="" />
										</div>
										<div className="txt">
											<h5>
												<Link to={val.link}>{val.title}</Link>
											</h5>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}

export default Choose;
