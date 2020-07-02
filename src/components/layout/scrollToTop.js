import React, { Component } from "react";

export default class ScrollToTop extends Component {
	checkScrollTimeout = null;
	state = { isShowScrollBtn: false };

	updateState(key, value) {
		this.setState({
			[key]: value
		})
	}
	onScroll = () => {
		if (this.checkScrollTimeout) clearTimeout(this.checkScrollTimeout)
		this.checkScrollTimeout = setTimeout(() => {
			if (window.scrollY < 200) {
				this.updateState('isShowScrollBtn', false)
			} else if (!this.isShowScrollBtn) this.updateState('isShowScrollBtn', true)
		}, 100)
	}

	watchScroll = () => {
		const scrollEventName = 'scroll' // this.isMobile ? 'scroll' : 'wheel'
		window.addEventListener(scrollEventName, this.onScroll, {
			capture: true,
			passive: true
		})
	}
	unwatchScroll = () => {
		const scrollEventName = 'scroll' // this.isMobile ? 'scroll' : 'wheel'
		window.removeEventListener(scrollEventName, this.onScroll, {
			capture: true,
			passive: true
		})
	}
	scrollToTop = () => {
		window.scrollTo({
			'behavior': 'smooth',
			'top': 0
		})
	}
	componentDidMount() {
		this.watchScroll();
	}
	componentWillUnmount() {
		this.unwatchScroll();
	}

	render() {
		if (typeof window === "undefined") return null;
		return (
			<div className="scroll-top-btn">
				{
					this.state.isShowScrollBtn ? (
						<button onClick={this.scrollToTop}>
							<svg width="26" height="14" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<line y1="-1" x2="16.1686" y2="-1" transform="matrix(0.732904 -0.680332 0.766549 0.642186 2 13)" stroke="white" stroke-width="2" />
								<line y1="-1" x2="15.8326" y2="-1" transform="matrix(0.759259 0.650789 -0.740604 0.671942 11.979 3)" stroke="white" stroke-width="2" />
							</svg>

						</button>
					) : null
				}

			</div>
		)
	}
}