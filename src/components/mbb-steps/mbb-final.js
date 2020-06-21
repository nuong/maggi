import PropTypes from "prop-types"
import React from "react"

import imgBowl from "../../images/make-balanced-bowl/final/bowl-op.png";


const MbbFinal = ({ lang }) => {
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
