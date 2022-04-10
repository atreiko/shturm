import React from 'react'
import Mosaic from '../components/mosaic/Mosaic'
// import About from './About'
import { About, Media } from '../containers'

const Home = () => {
  return (
    <main>
      <Mosaic />
      <About />
      <Media />
    </main>
  )
}

export default Home