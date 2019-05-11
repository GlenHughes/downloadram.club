/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./Header"
import "../assets/css/layout.css"
import "../assets/css/site.css"
import "../assets/css/lib/animated.css"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            copyright
          }
        }
      }
    `}
    render={data => (
      <>
        <div className="site">
          <Header siteTitle={data.site.siteMetadata.title} />
          <main
            className="site-content"
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            {children}
          </main>
          <Footer copyright={data.site.siteMetadata.copyright} />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
