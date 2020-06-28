import PropTypes from "prop-types"
import React from "react"

import imgOp1 from "../../images/make-balanced-bowl/step2/1.png";
import imgOp2 from "../../images/make-balanced-bowl/step2/2.png";
import imgOp3 from "../../images/make-balanced-bowl/step2/3.png";
import imgOp4 from "../../images/make-balanced-bowl/step2/4.png";
import imgOp5 from "../../images/make-balanced-bowl/step2/5.png";
import imgOp6 from "../../images/make-balanced-bowl/step2/6.png";

const MbbStepTwo = ({ selection, selectHandle, lang }) => {
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
	}
	return (
		<div className="stepx-wp step2-wrapper" style={wrapStyle}>
			{
				[1, 2, 3, 4, 5, 6].map(index => (
					<div key={index} className={`__item ${selection.indexOf(index) > -1 ? 'active' : ''}`} onClick={() => selectHandle(index)} >
						<img src={options[index]} alt=""></img>
						<span className="step-text-des" dangerouslySetInnerHTML={{ __html: lang[`STEP2_OP${index}_TITLE`] }}>

						</span>
						<span className="st-tooltip">
							<span dangerouslySetInnerHTML={{ __html: lang[`STEP2_OP${index}_TOOLTIP`] }}>
							</span>
							<span className="__arrow"></span>
						</span>
					</div>
				))
			}
		</div>
	);
}

MbbStepTwo.propTypes = {
	selection: PropTypes.array,
	selectHandle: PropTypes.func
}

MbbStepTwo.defaultProps = {
	selection: [],
}

export default MbbStepTwo
