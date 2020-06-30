import PropTypes from "prop-types"
import React from "react"

// import imgBowl from "../../images/make-balanced-bowl/final/bowl-op.png";
// import imgBowl from "../../images/make-balanced-bowl/final/bowl-op.png";
// import imgBowl from "../../images/make-balanced-bowl/final/bowl-op.png";
// import imgBowl from "../../images/make-balanced-bowl/final/bowl-op.png";

// import imgOp1 from "../../images/make-balanced-bowl/step1/1.png";
// import imgOp2 from "../../images/make-balanced-bowl/step1/2.png";
// import imgOp3 from "../../images/make-balanced-bowl/step1/3.png";
const INGREDIENT_CAL = {
	1: {
		1: 352,
		2: 345,
		3: 358,
	},
	2: {
		1: 66,
		2: 150,
		3: 156,
		4: 60.8,
		5: 75,
		6: 74.4,
	},
	3: {
		1: 17.4,
		2: 35,
		3: 32,
		4: 25.8,
		5: 29,
		6: 10.2,
		7: 33,
		8: 29,
		9: 22,
		10: 23,
	},
}
const NEEDED_CAL = {
	CHIDLREN: 2000,
	SENIOR: 1500,
	FEMALE: 2000,
	MALE: 2500
}


const MbbFinal = ({ lang, selection }) => {
	// const wrapStyle = {
	// 	display: 'flex',
	// }
	// const options = {
	// 	1: imgOp1,
	// 	2: imgOp2,
	// 	3: imgOp3
	// }
	const totalCalMaggi = selection[1].reduce((sum, item) => {
		return sum + INGREDIENT_CAL[1][item]
	}, 0)
	const proLength = selection[2].length;
	const totalCalPro = selection[2].reduce((sum, item) => {
		return sum + (proLength === 1 ? INGREDIENT_CAL[2][item] : INGREDIENT_CAL[2][item] / 2)
	}, 0);

	const vegLength = selection[3].length;
	const totalCalVeg = selection[3].reduce((sum, item) => {
		return sum + (vegLength === 1 ? INGREDIENT_CAL[3][item] : INGREDIENT_CAL[3][item] / 2)
	}, 0)
	const totalCal = totalCalMaggi + totalCalPro + totalCalVeg;

	const margiBowl = require(`../../images/make-balanced-bowl/final/bow-ing/step1/${selection[1][0]}.png`);
	let proBowls = [], vegBowls = [];
	if (selection[2].length > 1) {
		proBowls.push(`${selection[2][0]}a`);
		proBowls.push(`${selection[2][1]}b`);
	} else {
		proBowls.push(`${selection[2][0]}ab`);
	}

	if (selection[3].length > 1) {
		vegBowls.push(`${selection[3][0]}a`);
		vegBowls.push(`${selection[3][1]}b`);
	} else {
		vegBowls.push(`${selection[3][0]}ab`);
	}

	return (
		<div className="stepx-wp step-final">
			<span className="result-img">
				<img src={margiBowl} alt="Maggi" />
				{
					proBowls.map(item => (
						<img src={require(`../../images/make-balanced-bowl/final/bow-ing/step2/${item}.png`)} alt={lang[`STEP2_OP${item}_TITLE`]} />
					))
				}
				{
					vegBowls.map(item => (
						<img src={require(`../../images/make-balanced-bowl/final/bow-ing/step3/${item}.png`)} alt={lang[`STEP3_OP${item}_TITLE`]} />
					))
				}
			</span>
			<div className="result-content">
				<div className="result-selection">
					<span className="bd-right"></span>
					<div>
						<div className="line-title">
							{lang.CARBOHYDRATES}
						</div>
						<div className="line-content">
							<div className="criteria">
								<div>
									<img src={require(`../../images/make-balanced-bowl/final/palmful.png`)} />
								</div>
								<span className="__des">{lang.PALMFUL}</span>
							</div>
							<div className="cri-result">
								{
									selection[1].map((item, index) => (
										<div key={index}>
											<img src={require(`../../images/make-balanced-bowl/step1/${item}.png`)} />
											<span className="step-text-des" dangerouslySetInnerHTML={{ __html: lang[`STEP1_OP${item}_TITLE`] }}></span>
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
								<span className="__des">{lang.FISTFUL}</span>
							</div>
							<div className="cri-result">
								{
									selection[2].map((item, index) => (
										<div key={index}>
											<img src={require(`../../images/make-balanced-bowl/step2/${item}.png`)} />
											<span className="step-text-des" dangerouslySetInnerHTML={{ __html: lang[`STEP2_OP${item}_TITLE`] }}>{}</span>
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
								<span className="__des">{lang.HANDFUL}</span>
							</div>
							<div className="cri-result">
								{
									selection[3].map((item, index) => (
										<div key={index}>
											<img src={require(`../../images/make-balanced-bowl/step3/${item}.png`)} />
											<span className="step-text-des" dangerouslySetInnerHTML={{ __html: lang[`STEP3_OP${item}_TITLE`] }}>{}</span>
										</div>
									))
								}
							</div>
						</div>
					</div>
				</div>
				<div className="result-calc">
					<div className="row-line row-title">
						<div className="col1">
							{lang.TOTAL_ENERGY}
						</div>
						<div className="col2">
							{lang.ENERGY_EXPLAIN}
						</div>
					</div>
					<div className="row-line row-content">
						<div className="col1">
							<span className="cal-number">{totalCal.toFixed(2)}</span>
							<span className="kcal">{lang.KCAL}</span>
						</div>
						<div className="col2 percent-detail">
							<div>
								<span className="per-label">{lang.CHILDREN}</span>
								<span className="cal-number">{(totalCal / NEEDED_CAL.CHIDLREN * 100).toFixed(2)}%</span>
							</div>
							<div>
								<span className="per-label">{lang.SENIORS}</span>
								<span className="cal-number">{(totalCal / NEEDED_CAL.SENIOR * 100).toFixed(2)}%</span>
							</div>
							<div>
								<span className="per-label">{lang.FEMALE}</span>
								<span className="cal-number">{(totalCal / NEEDED_CAL.FEMALE * 100).toFixed(2)}%</span>
							</div>
							<div>
								<span className="per-label">{lang.MALE}</span>
								<span className="cal-number">{(totalCal / NEEDED_CAL.MALE * 100).toFixed(2)}%</span>
							</div>
						</div>
					</div>
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
