import React from "react";
import TeamBlock from "../../common/TeamBlock";

function Instructor({ data }) {
	return (
		<>
			<section id="instructor">
				<div className="contain text-center">
					<div className="content">
						<h1>{data.heading}</h1>
						<p>{data.para}</p>
					</div>
					<div className="main_row flex_row">
						{data.block.map((val) => {
							return (
								<div className="col" key={val.id}>
									<TeamBlock val={val} />
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}

export default Instructor;
