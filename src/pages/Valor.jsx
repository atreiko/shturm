import React, { useState, useEffect } from 'react'
import '../scss/_valor.scss'
import { motion } from 'framer-motion'
import { Gallery, Title } from '../components'
import Pagination from '../components/pagination/Pagination'
import { soldiers } from '../api/soldiers/soldiers'
import Loader from '../UI/loader/Loader'

const Valor = () => {
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
      className='valor'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='valor__inner'>
        <div className='blur'></div>
        <div className='container'>
          <Title title='Батальон Штурм' titleClass='title-primary' />
          <h4> Назавжди герої</h4>
        </div>
      </div>
      <div className='valor__content'>
        <div className='valor__content'>
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
      </div>
    </motion.div>
  )
}

export default Valor