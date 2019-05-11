import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Bolt from './Bolt'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#33b5e6`,
      marginBottom: `1.45rem`,
      textAlign: `center`,
      height: `100px`,
      borderBottom: `20px solid white`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.5rem 1.0875rem`,
        position: `relative`
      }}
    >
      <h1
        style={{
          margin: `0 0 0 -75px`,
          display: `inline-block`,
          borderRadius: `50%`,
          width: `150px`,
          position: `absolute`,
          left: `50%`
        }}
      >
        <Link
          to='/'
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          <Bolt alt={siteTitle} />
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
