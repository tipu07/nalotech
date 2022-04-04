import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

function Footer() {
	const data = {
		sec_bg: "/images/footer.svg",
		block_01: {
			title: "Explore",
			list: [
				{
					id: 1,
					text: "About us",
					link: "/about",
				},
				{
					id: 2,
					text: "Courses",
					link: "/courses",
				},
				{
					id: 3,
					text: "FAQ's",
					link: "/faq",
				},
				{
					id: 4,
					text: "Contact us",
					link: "/contact",
				},
			],
		},
		block_02: {
			title: "Contact",
			list: [
				{
					id: 1,
					text: "(518) 930-0035",
					link: "tel:(518) 930-0035",
				},
				{
					id: 2,
					text: "info@nalotech.com",
					link: "mailto:info@nalotech.com",
				},
			],
		},
		block_03: {
			title: "Support",
			list: [
				{
					id: 1,
					text: "Privacy Policy",
					link: "/privacy-policy",
				},
				{
					id: 2,
					text: "Terms & conditions",
					link: "/terms-conditions",
				},
				{
					id: 3,
					text: "Disclaimer",
					link: "/disclaimer",
				},
			],
		},
	};
	return (
		<>
			<footer style={{ backgroundImage: "url(" + data.sec_bg + ")" }}>
				<div className="contain">
					{/* <Newsletter /> */}
					<div className="flex_row main_row">
						<div className="col">
							<div className="in_col text-end">
								<Logo />
								<SocialLinks />
							</div>
						</div>
						<div className="col">
							<div className="in_col">
								<h5 className="fancy">{data.block_01.title}</h5>
								<ul className="list">
									{data.block_01.list.map((val) => {
										return (
											<li key={val.id}>
												<Link to={val.link}>{val.text}</Link>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
						<div className="col">
							<div className="in_col">
								<h5 className="fancy">{data.block_02.title}</h5>
								<ul className="list">
									{data.block_02.list.map((val) => {
										return (
											<li key={val.id}>
												<a href={val.link}>{val.text}</a>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
						<div className="col">
							<div className="in_col">
								<h5 className="fancy">{data.block_03.title}</h5>
								<ul className="list">
									{data.block_03.list.map((val) => {
										return (
											<li key={val.id}>
												<Link to={val.link}>{val.text}</Link>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
					</div>
					<div className="copyright text-center">
						<p>
							Copyright © 2022 <Link to="/">Nalo Tech Academy.</Link> All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
