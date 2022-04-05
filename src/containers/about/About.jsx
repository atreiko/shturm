import React from 'react'
import './_about.scss';
import Title from '../../components/title/Title';
import smpu from '../../assets/images/flags/smpu.jpeg';

const About = () => {
  return (
    <section id='about' className='about'>
      <div className='container'>
        <Title title='Про нас' />
        <div className='image-block'>
          <img src={smpu} alt='image' />
        </div>
      </div>
    </section>
  )
}

export default About