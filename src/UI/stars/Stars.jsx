import React from 'react'
import star from '../../assets/icons/black-star-silhouette.png'
import './stars.scss'

const Stars = () => {
  return (
    <div className='stars'>
      <img src={star} alt='star' />
      <img src={star} alt='star' />
      <img src={star} alt='star' />
    </div>
  )
}

export default Stars
