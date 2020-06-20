import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby";

const header_data = [
	{
		title: "Make a Balanced Bowl",
		action: 0,
		link: '/make-balanced-bowl'
	},
	{
		title: "Why MAGGI®?",
		action: 1,
		link: '/#why-maggi'
	},
	{
		title: "Delicious Recipes",
		action: 2,
		link: '/#delicious-recipes'
	},
];

const Header = ({ siteTitle }) => (
	<header>
		<div className="main-header">
			<div className="main-header_logo" />
			<div className="main-header_menu">
				{header_data.map((item, index) => (
					<div className="main-header_menu-item" key={index}>
						<Link to={item.link}><span>{item.title}</span></Link>

					</div>
				))}
			</div>
		</div>
	</header>
);

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
