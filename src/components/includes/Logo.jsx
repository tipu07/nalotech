import React from "react";
import { Link } from "react-router-dom";

function Logo() {
	return (
		<>
			<div className="logo">
				<Link to="/">
					<img src="/images/logo.png" alt="" />
				</Link>
			</div>
		</>
	);
}

export default Logo;
