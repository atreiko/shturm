import React, { useState, useEffect } from 'react'
import '../index.scss'
import Title from '../components/title/Title'
import { Gallery } from '../components'
import { motion } from 'framer-motion'
import Pagination from '../components/pagination/Pagination'
import { soldiers } from '../api/soldiers/soldiers'
import Loader from '../UI/loader/Loader'
import axios from 'axios'

const Soldiers = () => {
  const [ cards, setCards ] = useState(soldiers)
  const [ loading , setLoading ] = useState(false)
  const [ cardsPerPage ] = useState(9)
  const [ currentPage, setCurrentPage ] = useState(1)

  const lastCardIndex = currentPage * cardsPerPage
  const firstCardIndex = lastCardIndex - cardsPerPage
  const currentCards = cards.slice(firstCardIndex, lastCardIndex)

  const paginate = pageNumber => setCurrentPage(pageNumber)
  const nextPage = () => setCurrentPage(prev => prev + 1)
  const prevPage = () => setCurrentPage(prev => prev - 1)

    useEffect(() => {
    getCards()
  }, [])

  const getCards = async () => {
    setLoading(true)
    // const response = await axios.get('https://fakestoreapi.com/products')
    // console.log(response.data)
    setCards(cards) //! delete
    setLoading(false)
  }

  if (loading) {
    return <Loader />
  }

  return (
    <motion.div 
      className='soldiers'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='soldiers__inner'>
        <div className='blur'></div>
        <div className='container'>
          <Title title='Військові' titleClass='title-primary' />
          <h4> Батальон Штурм</h4>
        </div>
      </div>
      <div className='soldiers__content'>
        <div className="container">
          <Title title='Склад морських піхотинців' titleClass='title-secondary'/>
          <Gallery cards={currentCards} />
          <Pagination 
            cardsPerPage={cardsPerPage} 
            totalCards={cards.length}
            paginate={paginate}
            nextPage={nextPage}
            prevPage={prevPage}
            currentPage={currentPage}
          />
        </div> 
      </div>
    </motion.div>
  )
}

export default Soldiers