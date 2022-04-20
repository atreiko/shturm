import React, { useState, useEffect } from 'react'
import Card from '../card/Card'
import './gallery.scss'

const Gallery = ({ cards }) => {
  return (
    <>
      <ul className='gallery'>
        {
          cards?.map(item => (
            <Card
              id={item.id}
              key={item.id} 
              title={item.title} 
              subtitle={item.rank} 
              img={item.img} 
            />
          ))
        }
      </ul>
    </>
  )
}

export default Gallery