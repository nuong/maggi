import PropTypes from "prop-types"
import React from "react"

const WarningModal = ({ message, closeModal }) => {
	return (
		<div className="warning-modal">
			<div className="warning-modal-content">
				<p>{message}</p>
				<button className="btn btn-primary" onClick={() => closeModal()}>
					Ok
				</button>
			</div>
		</div>
	);
}

WarningModal.propTypes = {
	message: PropTypes.string,
	closeModal: PropTypes.func
}

export default WarningModal
