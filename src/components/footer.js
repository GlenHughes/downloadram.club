import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ copyright }) => {
  return (
    <footer
      style={{
        background: `rebeccapurple`
      }}
    >
      <p>
        {copyright} {new Date().getFullYear()}
      </p>
      <p>
        Icons made by
        <a href='https://www.freepik.com/' title='Freepik' target='_blank' className='link' rel='noopener noreferrer'>
          Freepik
        </a>
      </p>
    </footer>
  )
}

Footer.propTypes = {
  copyright: PropTypes.string
}

Footer.defaultProps = {
  copyright: ''
}

export default Footer
