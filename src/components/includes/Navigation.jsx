import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navigation({ active, toggle }) {
	const [show, setShow] = useState(false);
	const SubNav = () => {
		setShow(!show);
	};
	return (
		<>
			<nav className="ease">
				<div id="nav" className={active ? "active" : ""}>
					<ul id="lst">
						<li>
							<NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggle}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggle}>
								About us
							</NavLink>
						</li>
						<li className="drop">
							<Link to="?" onClick={() => SubNav(show)}>
								Courses
							</Link>
							<ul className={show ? "sub active" : "sub"}>
								<li>
									<Link to="/courses" onClick={toggle}>
										AWS
									</Link>
								</li>
								<li>
									<Link to="/courses" onClick={toggle}>
										DevOps Cloud Automation
									</Link>
								</li>
							</ul>
						</li>
						<li>
							<NavLink to="/faq" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggle}>
								FAQ's
							</NavLink>
						</li>
						<li>
							<NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggle}>
								Blog
							</NavLink>
						</li>
						<li>
							<NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggle}>
								Contact us
							</NavLink>
						</li>
					</ul>
					{/* <ul id="cta">
						<li>
							<Link to="/contact" className="site_btn long round" onClick={toggle}>
								Contact us
							</Link>
						</li>
					</ul> */}
				</div>
			</nav>
		</>
	);
}

export default Navigation;
