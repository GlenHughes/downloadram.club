import React from "react"
import PropTypes from "prop-types"

const Footer = ({ copyright }) => {
  return (
    <footer
      style={{
        background: `#33b5e6`,
        position: `absolute`,
        bottom: 0,
        width: `100%`,
        textAlign: `center`,
        color: `#ffffff`,
      }}
    >
      <p>
        {copyright} {new Date().getFullYear()}
      </p>
      <p>
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
