import PropTypes from "prop-types"
import React from "react"

import imgBowl from "../../images/make-balanced-bowl/final/bowl-op.png";
// import imgBowl from "../../images/make-balanced-bowl/final/bowl-op.png";
// import imgBowl from "../../images/make-balanced-bowl/final/bowl-op.png";
// import imgBowl from "../../images/make-balanced-bowl/final/bowl-op.png";

// import imgOp1 from "../../images/make-balanced-bowl/step1/1.png";
// import imgOp2 from "../../images/make-balanced-bowl/step1/2.png";
// import imgOp3 from "../../images/make-balanced-bowl/step1/3.png";


const MbbFinal = ({ lang, selection }) => {
	// const wrapStyle = {
	// 	display: 'flex',
	// }
	// const options = {
	// 	1: imgOp1,
	// 	2: imgOp2,
	// 	3: imgOp3
	// }
	return (
		<div className="stepx-wp step-final">
			<span className="result-img">
				<img src={imgBowl} alt="" />
			</span>
			<div className="result-content">
				<div className="result-selection">
					<div>
						<div className="line-title">
							{lang.CARBOHYDRATES}
						</div>
						<div className="line-content">
							<div className="criteria">
								<div>
									<img src={require(`../../images/make-balanced-bowl/final/palmful.png`)} />
								</div>
								<span>{lang.PALMFUL}</span>
							</div>
							<div className="cri-result">
								{
									selection[1].map((item, index) => (
										<div key={index}>
											<img src={require(`../../images/make-balanced-bowl/step1/${item}.png`)} />
											<span dangerouslySetInnerHTML={{ __html: lang[`STEP1_OP${item}_TITLE`] }}></span>
										</div>
									))
								}
							</div>
						</div>
					</div>

					<div>
						<div className="line-title">
							{lang.PROTEIN}
						</div>
						<div className="line-content">
							<div className="criteria">
								<div>
									<img src={require(`../../images/make-balanced-bowl/final/fistful.png`)} />
								</div>
								<span>{lang.FISTFUL}</span>
							</div>
							<div className="cri-result">
								{
									selection[2].map((item, index) => (
										<div key={index}>
											<img src={require(`../../images/make-balanced-bowl/step2/${item}.png`)} />
											<span dangerouslySetInnerHTML={{ __html: lang[`STEP2_OP${item}_TITLE`] }}>{}</span>
										</div>
									))
								}
							</div>
						</div>
					</div>

					<div>
						<div className="line-title">
							{lang.VEGETABLES}
						</div>
						<div className="line-content">
							<div className="criteria">
								<div>
									<img src={require(`../../images/make-balanced-bowl/final/handful.png`)} />
								</div>
								<span>{lang.HANDFUL}</span>
							</div>
							<div className="cri-result">
								{
									selection[3].map((item, index) => (
										<div key={index}>
											<img src={require(`../../images/make-balanced-bowl/step3/${item}.png`)} />
											<span dangerouslySetInnerHTML={{ __html: lang[`STEP3_OP${item}_TITLE`] }}>{}</span>
										</div>
									))
								}
							</div>
						</div>
					</div>
				</div>
				<div className="result-calc">

				</div>

			</div>
		</div>
	);
}

MbbFinal.propTypes = {
	selection: PropTypes.array,
	selectHandle: PropTypes.func
}

MbbFinal.defaultProps = {
	selection: [],
}

export default MbbFinal
