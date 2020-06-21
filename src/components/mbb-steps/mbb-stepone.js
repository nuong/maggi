import PropTypes from "prop-types"
import React from "react"

import imgOp1 from "../../images/make-balanced-bowl/step1/1.png";
import imgOp2 from "../../images/make-balanced-bowl/step1/2.png";
import imgOp3 from "../../images/make-balanced-bowl/step1/3.png";

const MbbStepOne = ({ selection, selectHandle, lang }) => {
	const wrapStyle = {
		display: 'flex',
	}
	const options = {
		1: imgOp1,
		2: imgOp2,
		3: imgOp3
	}
	return (
		<div className="stepx-wp step1-wrapper" style={wrapStyle}>
			{
				[1, 2, 3].map(index => (
					<div key={index} className={`__item ${selection.indexOf(index) > -1 ? 'active' : ''}`} onClick={() => selectHandle(index)} >
						<img src={options[index]} alt=""></img>
						<span dangerouslySetInnerHTML={{ __html: lang[`STEP1_OP${index}_TITLE`] }}>

						</span>
					</div>
				))
			}
		</div>
	);
}

MbbStepOne.propTypes = {
	selection: PropTypes.array,
	selectHandle: PropTypes.func
}

MbbStepOne.defaultProps = {
	selection: [],
}

export default MbbStepOne
