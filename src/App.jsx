import React, { useState } from "react";
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";

import ScrollToTop from "./components/common/ScrollToTop";
import Header from "./components/includes/Header";
import Footer from "./components/includes/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Courses from "./components/pages/Courses";
import CourseDetail from "./components/pages/CourseDetail";
import Blog from "./components/pages/Blog";
import BlogDetail from "./components/pages/BlogDetail";
import Contact from "./components/pages/Contact";
import Faq from "./components/pages/Faq";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import Disclaimer from "./components/pages/Disclaimer";
import TermsConditions from "./components/pages/TermsConditions";
import Error from "./components/pages/Error";

import VideoPopup from "./components/pages/popup/Video";

function App() {
	const [state, setState] = useState({
		VideoPopup: false,
	});
	const showVideoPopup = () => {
		setState({ ...state, VideoPopup: true });
	};
	const closeVideoPopup = () => {
		setState({ ...state, VideoPopup: false });
	};
	const PageLayout = () => (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
	return (
		<>
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route element={<PageLayout />}>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/about" element={<About popup={showVideoPopup} />} />
						<Route exact path="/courses" element={<Courses />} />
						<Route exact path="/courses/course-detail" element={<CourseDetail />} />
						<Route exact path="/blog" element={<Blog />} />
						<Route exact path="/blog/blog-detail" element={<BlogDetail />} />
						<Route exact path="/contact" element={<Contact />} />
						<Route exact path="/faq" element={<Faq />} />
						<Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
						<Route exact path="/disclaimer" element={<Disclaimer />} />
						<Route exact path="/terms-conditions" element={<TermsConditions />} />
					</Route>
					<Route path="*" element={<Error />} />
				</Routes>
				{state.VideoPopup === true ? <VideoPopup close={closeVideoPopup} /> : ""}
			</BrowserRouter>
		</>
	);
}

export default App;
