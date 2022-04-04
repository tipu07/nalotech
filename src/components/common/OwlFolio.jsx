import React from "react";
import OwlCarousel from "react-owl-carousel";

function OwlFolio({ owlData }) {
	const option = {
		margin: 0,
		loop: true,
		dots: true,
		smartSpeed: 1000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			580: {
				items: 2,
			},
		},
	};
	return (
		<>
			<OwlCarousel id="owl-folio" className="owl-theme" {...option}>
				{owlData.map((val) => {
					return (
						<div className="folio_blk" key={val.id}>
							<div className="ico fill round">
								<img src={val.src} alt="" />
							</div>
							<div className="txt">
								<p>{val.para}</p>
								<h5>
									{val.name} <small>{val.label}</small>
								</h5>
							</div>
						</div>
					);
				})}
			</OwlCarousel>
		</>
	);
}

export default OwlFolio;
