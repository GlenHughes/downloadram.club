import React from "react"
import PropTypes from "prop-types"
import icon from "../images/bolt.svg"

const download = event => {
  const image = event.target
  image.classList.toggle("spining")
}

const bolt = ({ altText }) => (
  <>
    <img src={icon} className="bolt" alt={altText} onClick={download} />
  </>
)

bolt.propTypes = {
  altText: PropTypes.string,
}

bolt.defaultProps = {
  altText: `Click to start RAM download`,
}

export default bolt
