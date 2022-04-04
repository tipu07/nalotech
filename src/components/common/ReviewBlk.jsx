import React from "react";

function ReviewBlk({ dp, name, para, date }) {
	// const { dp, name, para, date } = val;
	return (
		<>
			<div className="review">
				<div className="ico fill">
					<img src={dp} alt="" />
				</div>
				<div className="txt">
					<div className="ico_txt">
						<div className="title">
							<h6>{name}</h6>
							<div className="rating">
								<i className="star"></i>
								<i className="star"></i>
								<i className="star"></i>
								<i className="star"></i>
								<i className="star"></i>
							</div>
						</div>
						<div className="date">{date}</div>
					</div>
					<p>{para}</p>
				</div>
			</div>
		</>
	);
}

export default ReviewBlk;
