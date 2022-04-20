import React from 'react'
import './media.scss'
import GreyStars from '../../UI/stars/GreyStars.jsx'
import { Link } from 'react-router-dom'

const Media = () => {
  return (
    <div className='media'>
      <div className='container'>
        <div className='media__inner'>
          <div className='media__inner-decorations'></div>
          <div className='media__inner-text'>
            <h3>Україна - понад усе. Морська піхота - вільні завжди. Там де ми - там перемога.</h3>
            <GreyStars />
            <h6>З відео та фото контетом, можливо ознайомитись за посиланнями</h6>
            <p>Фото матеріл морської піхоти <Link to='/photos'>Батальон Штурм</Link></p>
            <p>Відео матеріл зафіксований небайдужими <Link to='/videos'>під час бойових дій на території України</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Media