import React from 'react'
import './modal.scss'

const Modal = ({ clickedImage, handleRotationRight, setClickedImage }) => {

  const handleClick = e => {
    if (e.target.classList.contains('cancel')) {
      setClickedImage(null)
    }
  }

  return ( 
    <>
      <div className='overlay cancel' onClick={handleClick}>
        <img src={clickedImage} alt='bigger-picture' />
        <span className='cancel' onClick={handleClick}> x </span>
      </div>
      <div onClick={handleRotationRight}>
        {' '}
        {/* <svg></svg> */}
      </div>
    </>
  )
}

export default Modal