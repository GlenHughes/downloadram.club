import React from "react"
import PropTypes from "prop-types"

const Button = ({ text, classes }) => (
  <>
    <button className={classes}>{text}</button>
  </>
)

Button.propTypes = {
  text: PropTypes.string,
  classes: PropTypes.string,
}

Button.defaultProps = {
  text: ``,
  classes: `button`,
}

export default Button
