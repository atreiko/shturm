import React from 'react'
import './menu.scss'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Menu = ({ isOpen }) => {

  return (
    <div className={!isOpen ? 'menu' : 'menu active'}>
      <ul className='menu__list'>
        <li className='menu__item'>
          <h3>Про нас</h3>
          <div className='menu__item-links'>
            <Link className='menu__item-link' to='/about'>Опис</Link>
            <Link className='menu__item-link' to='/about'>Наші військові</Link>
            <Link className='menu__item-link' to='/about'>Вічна пам'ять</Link>
          </div>
        </li>
        <li className='menu__item'>
          <h3>Мультимедіа</h3>
          <div className='menu__item-links'>
            <Link className='menu__item-link' to='/about'>Фото</Link>
            <Link className='menu__item-link' to='/about'>Відео</Link>
          </div>
        </li>
        <li className='menu__item'>
          <h3>Соціальні мережі</h3>
          <div className='menu__item-links socials'>
            <Link to='/about'><BsFacebook /></Link>
            <Link to='/about'><BsInstagram /></Link>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Menu