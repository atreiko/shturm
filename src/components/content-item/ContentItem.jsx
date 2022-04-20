import React from 'react'
import './content-item.scss'

const ContentItem = ({ children }) => {
  return (
    <li className='content__item'>
      {children}
    </li>
  )
}

export default ContentItem