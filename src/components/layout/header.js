import PropTypes from "prop-types"
import React from "react"

const header_data = [
  {
    title: "Make a Balanced Bowl",
    action: 0,
  },
  {
    title: "Why MAGGI®?",
    action: 1,
  },
  {
    title: "Delicious Recipes",
    action: 2,
  },
];

const Header = ({ siteTitle }) => (
  <header>
    <div className="main-header">
      <div className="main-header_logo" />
      <div className="main-header_menu">
        {header_data.map((item, index) => (
          <div className="main-header_menu-item" key={index}>
            <span>{item.title}</span>
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
