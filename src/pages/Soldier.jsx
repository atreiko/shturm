import React, { useState, useEffect } from 'react'
import '../scss/_soldier.scss';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from '../UI/loader/Loader';
import axios from 'axios';
import { s7 } from '../assets/images/soldiers';
import { Title } from '../components';

const soldierFromData =   {
  id: 16,
  title: 'Жовтобрюх Тарас',
  rank: 'Сержант 1-го окремого батальйону морської піхоти',
  img: s7,
  desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
         Vero aliquid, nobis debitis ullam suscipit ad dolore excepturi eligendi rem dicta!
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
         Vero aliquid, nobis debitis ullam suscipit ad dolore excepturi eligendi rem dicta!
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
         Vero aliquid, nobis debitis ullam suscipit ad dolore excepturi eligendi rem dicta!
         `
}

const Soldier = () => {
  const [ soldier, setSoldier ] = useState(soldierFromData)
  const [ loading, setLoading ] = useState(false)
  
  const { id } = useParams()

  useEffect(() => {
    // findSelected(id)
  }, [])

  const findSelected = id => {
    setLoading(true) 
    // axios.get(`https://fakestoreapi.com/products/${id}`)
    //   .then(res => {
    //     const data = res.data
    //     setSoldier(data)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    setLoading(false)
  }

  console.log(soldier);

  if (loading) {
    return <Loader />
  }

  return (
    <motion.section className='soldier'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <div className="soldier__inner">
          <div className="soldier__inner-left">
            <img src={soldier.img} alt='soldier-photo' />
          </div>
          <div className="soldier__inner-right">
            <Title titleClass='title-secondary' title={soldier.title} />
            <h6>{soldier.rank}</h6>
            <p>{soldier.desc}</p>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fec325" fill-opacity="1" d="M0,32L1440,320L1440,320L0,320Z"></path></svg>
    </motion.section>
  )
}

export default Soldier 