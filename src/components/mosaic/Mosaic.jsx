import React from 'react'
// import '../../index.scss';
import './mosaic.scss';
import { smallPosts, largePosts } from '../../api/home/home-posts';
import { renderHomeImages } from '../../api/home/home-render';

const Mosaic = () => {
  return (
    <div className='mosaic'>
      <ul className='mosaic__list list__row-1'>
        {renderHomeImages(largePosts, smallPosts)}
      </ul>
    </div>
  )
}

export default Mosaic
