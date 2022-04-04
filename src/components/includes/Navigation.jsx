import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navigation({ active }) {
	return (
		<>
			<nav className="ease">
				<div id="nav" className={active ? "active" : ""}>
					<ul id="lst">
						<li>
							<NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
								About us
							</NavLink>
						</li>
						<li>
							<NavLink to="/courses" className={({ isActive }) => (isActive ? "active" : "")}>
								Courses
							</NavLink>
						</li>
						<li>
							<NavLink to="/faq" className={({ isActive }) => (isActive ? "active" : "")}>
								FAQ's
							</NavLink>
						</li>
						<li>
							<NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>
								Blog
							</NavLink>
						</li>
					</ul>
					<ul id="cta">
						<li>
							<Link to="/contact" className="site_btn long round">
								Contact us
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navigation;
