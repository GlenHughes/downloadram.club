import React from "react"
import PropTypes from "prop-types"

const Footer = ({ copyright }) => {
  return (
    <footer
      style={{
        background: `#33b5e6`,
        width: `100%`,
        textAlign: `center`,
        color: `#fff`,
        padding: `1rem`,
      }}
    >
      <p style={{ margin: `0` }}>
        {copyright} {new Date().getFullYear()}
      </p>
      <p style={{ margin: `0` }}>
        Icons made by
        <a
          href="https://www.freepik.com/"
          title="Freepik"
          target="_blank"
          className="link"
          rel="noopener noreferrer"
        >
          Freepik
        </a>
      </p>
    </footer>
  )
}

Footer.propTypes = {
  copyright: PropTypes.string,
}

Footer.defaultProps = {
  copyright: "",
}

export default Footer
