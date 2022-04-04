import React from "react";
import Cover from "../common/Cover";
import PrivacyPolicyBlk from "./section/PrivacyPolicyBlk";

function PrivacyPolicy() {
	const privacy = {
		cover: {
			sec_bg: "/images/assets-N9JBSFN-1536x1025.jpg",
			heading: "Privacy Policy",
		},
	};
	return (
		<>
			<Cover data={privacy.cover} />
			<PrivacyPolicyBlk />
		</>
	);
}

export default PrivacyPolicy;
