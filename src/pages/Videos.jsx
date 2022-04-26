import React, { useState } from 'react'
import '../index.scss'
import { motion } from 'framer-motion'
import videos from '../api/videos.json';
import Movies from '../components/movies/Movies';

const Videos = () => {
  const [ data, setData ] = useState(videos)

  return (
    <motion.div
      className='videos'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Movies 
        data={data} 
        title='Відео'
      /> 
    </motion.div>
  )
}

export default Videos