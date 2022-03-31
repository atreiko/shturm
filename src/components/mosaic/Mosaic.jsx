import React from 'react'
import '../../index.scss';
import { imagesFirstRow, imagesSecondRow } from '../../api/home/home-render'

const Mosaic = () => {
  return (
    <div className='mosaic'>
      <ul className='mosaic__list list__row-1'>
        { imagesFirstRow }
        { imagesSecondRow }
      </ul>
    </div>
  )
}

export default Mosaic

