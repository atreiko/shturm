import React from 'react'
import Mosaic from '../components/mosaic/Mosaic'
// import About from './About'
import { About } from '../containers'

const Home = () => {
  return (
    <main>
      <Mosaic />
      <About />
    </main>
  )
}

export default Home