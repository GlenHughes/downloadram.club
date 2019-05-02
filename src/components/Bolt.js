import React from 'react'
import icon from '../images/bolt.svg'

const download = event => {
  const image = event.target
  image.classList.add('downloading')
}

const bolt = () => (
  <>
    <img src={icon} className='bolt' alt='Click to start RAM download' onClick={download} />
  </>
)

export default bolt
