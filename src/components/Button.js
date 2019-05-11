import React from "react"
import PropTypes from "prop-types"

const Button = ({ text, classes, onClick }) => (
  <>
    <button className={classes} onClick={onClick}>
      {text}
    </button>
  </>
)

Button.propTypes = {
  text: PropTypes.string,
  classes: PropTypes.string,
}

Button.defaultProps = {
  text: ``,
  classes: `button`,
  onClick: () => {
    // nothing
  },
}

export default Button
