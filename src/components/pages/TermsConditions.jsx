import React from "react";
import Cover from "../common/Cover";
import TermsConditionsBlk from "./section/TermsConditionsBlk";

function TermsConditions() {
	const terms = {
		cover: {
			sec_bg: "/images/assets-N9JBSFN-1536x1025.jpg",
			heading: "Terms & Conditions",
		},
	};
	return (
		<>
			<Cover data={terms.cover} />
			<TermsConditionsBlk />
		</>
	);
}

export default TermsConditions;
