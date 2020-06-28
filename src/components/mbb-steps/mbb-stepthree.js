import PropTypes from "prop-types"
import React from "react"

import imgOp1 from "../../images/make-balanced-bowl/step3/1.png";
import imgOp2 from "../../images/make-balanced-bowl/step3/2.png";
import imgOp3 from "../../images/make-balanced-bowl/step3/3.png";
import imgOp4 from "../../images/make-balanced-bowl/step3/4.png";
import imgOp5 from "../../images/make-balanced-bowl/step3/5.png";
import imgOp6 from "../../images/make-balanced-bowl/step3/6.png";
import imgOp7 from "../../images/make-balanced-bowl/step3/7.png";
import imgOp8 from "../../images/make-balanced-bowl/step3/8.png";
import imgOp9 from "../../images/make-balanced-bowl/step3/9.png";
import imgOp10 from "../../images/make-balanced-bowl/step3/10.png";

const MbbStepThree = ({ selection, selectHandle, lang }) => {
	const wrapStyle = {
		display: 'flex',
	}
	const options = {
		1: imgOp1,
		2: imgOp2,
		3: imgOp3,
		4: imgOp4,
		5: imgOp5,
		6: imgOp6,
		7: imgOp7,
		8: imgOp8,
		9: imgOp9,
		10: imgOp10,
	}
	return (
		<div className="stepx-wp step3-wrapper" style={wrapStyle}>
			{
				[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(index => (
					<div key={index} className={`__item ${selection.indexOf(index) > -1 ? 'active' : ''}`} onClick={() => selectHandle(index)} >
						<img src={options[index]} alt=""></img>
						<span className="step-text-des" dangerouslySetInnerHTML={{ __html: lang[`STEP3_OP${index}_TITLE`] }}>

						</span>
						<span className="st-tooltip">
							<span dangerouslySetInnerHTML={{ __html: lang[`STEP3_OP${index}_TOOLTIP`] }}>
							</span>
							<span className="__arrow"></span>
						</span>
					</div>
				))
			}
		</div>
	);
}

MbbStepThree.propTypes = {
	selection: PropTypes.array,
	selectHandle: PropTypes.func
}

MbbStepThree.defaultProps = {
	selection: [],
}

export default MbbStepThree
