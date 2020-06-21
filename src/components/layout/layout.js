/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "bulma/css/bulma.css";
import "./layout.scss"

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const height = 3609 - ((1920 - window.innerWidth)*2);
	return (
		<div className="landing-page">
      <div className="landing-page-container" style={{ height, width: window.innerWidth}}>
				<Header siteTitle={data.site.siteMetadata.title} />
				<div className="landing-page-container_main-content">
					<main>{children}</main>
				</div>
			</div>
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
