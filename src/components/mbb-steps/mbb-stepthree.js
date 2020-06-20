import PropTypes from "prop-types"
import React from "react"

import imgOp1 from "../../images/make-balanced-bowl/step3/1.png";
import imgOp2 from "../../images/make-balanced-bowl/step3/2.png";
import imgOp3 from "../../images/make-balanced-bowl/step3/3.png";
import bgStep from "../../images/make-balanced-bowl/step3/bg.png"

const MbbStepThree = ({ selection, selectHandle, lang }) => {
	const wrapStyle = {
		display: 'flex',
	}
	const activeStyle = {
		backgroundImage: `url(${bgStep})`,
	}
	return (
		<div className="stepx-wp step3-wrapper" style={wrapStyle}>
			<div className="__item" onClick={() => selectHandle(1)} style={selection.indexOf(1) > -1 ? activeStyle : {}}>
				<img src={imgOp1} alt=""></img>
				<span dangerouslySetInnerHTML={{ __html: lang.STEP1_OP1_TITLE }}>

				</span>
			</div>
			<div className="__item" onClick={() => selectHandle(2)} style={selection.indexOf(2) > -1 ? activeStyle : {}}>
				<img src={imgOp2} alt=""></img>
				<span dangerouslySetInnerHTML={{ __html: lang.STEP1_OP2_TITLE }}>
				</span>
			</div>
			<div className="__item" onClick={() => selectHandle(3)} style={selection.indexOf(3) > -1 ? activeStyle : {}}>
				<img src={imgOp3} alt=""></img>
				<span dangerouslySetInnerHTML={{ __html: lang.STEP1_OP3_TITLE }}>
				</span>
			</div>
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
