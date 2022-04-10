import React from 'react'
import { Link } from 'react-router-dom'
import './nav.scss'
import { Squeeze as Hamburger } from 'hamburger-react'

const Nav = ({ isOpen, setIsOpen }) => {
  return (
    <nav className='navbar'>
      <div className='navbar__container'>
        <Link to='/#'><Hamburger toggled={isOpen} toggle={setIsOpen} /></Link>
        <Link to='/'><span>ШТУРМ</span></Link>
        {/* <Link to='tel:+380934200990'>(093) 420 09 90</Link> */}
      </div>
    </nav>
  )
}

export default Nav