import React from 'react'
import PropTypes from 'prop-types'
import icon from '../images/chip.svg'

const Chip = ({ altText }) => (
  <>
    <img src={icon} className='chip' alt={altText} />
  </>
)

Chip.propTypes = {
  altText: PropTypes.string
}

Chip.defaultProps = {
  altText: ``
}

export default Chip
