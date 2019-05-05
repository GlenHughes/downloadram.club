import React from "react"
import PropTypes from "prop-types"

import Chip from "../Chip"
import Button from "../Button"

const Upgrade = ({ title, description }) => (
  <>
    <Chip alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <Button text="Choose Upgrade" />
  </>
)

Upgrade.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

Upgrade.defaultProps = {
  title: ``,
  description: ``,
}

export default Upgrade
