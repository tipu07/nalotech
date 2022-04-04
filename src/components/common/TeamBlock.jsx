import React from "react";
import Image from "../common/Image";
import SocialLinks from "../includes/SocialLinks";

function TeamBlock({ val }) {
	return (
		<>
			<div className="team_blk">
				<div className="fig">
					<Image src={val.src} alt="" />
				</div>
				<div className="txt">
					<h5>{val.title} </h5>
					<p>{val.subtitle} </p>
					<SocialLinks />
				</div>
			</div>
		</>
	);
}

export default TeamBlock;
