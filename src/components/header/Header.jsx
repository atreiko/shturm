import React, { useState }  from 'react'
import './header.scss'
import { Navigation, Menu } from '../index'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header>
      <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
      <Menu isOpen={isOpen} />
    </header>
  )
}

export default Header

