import React, { useState } from 'react'
import '../index.scss';
import { motion } from 'framer-motion'
import Content from '../components/content/Content';
import photos from '../api/photos.json';

const Photos = () => {
  const [ data, setData ] = useState(photos)

  return (
    <motion.div className='photos'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Content 
        data={data} 
        title='Фото'
      />
    </motion.div>
  )
}

export default Photos