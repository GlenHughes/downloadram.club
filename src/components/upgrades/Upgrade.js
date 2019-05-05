import React from "react"
import PropTypes from "prop-types"

import Chip from "../Chip"
import Button from "../Button"

const Upgrade = ({ title, size, description }) => (
  <>
    <Chip alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <Button text="Choose Upgrade" />
  </>
)

Upgrade.propTypes = {
  title: PropTypes.string,
  size: PropTypes.string,
  description: PropTypes.string,
}

Upgrade.defaultProps = {
  title: ``,
  size: ``,
  description: ``,
}

export default Upgrade
