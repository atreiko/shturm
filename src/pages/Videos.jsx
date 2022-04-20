import React from 'react'
import '../index.scss'
import { motion } from 'framer-motion'

const Videos = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Videos
    </motion.div>
  )
}

export default Videos