import React, { useState, useEffect } from 'react'
import Title from '../title/Title'
import './movies.scss'
import ReactPlayer from 'react-player' 
import Modal from '../modal/Modal'

const Movies = ({ data, title }) => {
  const [ moviesGallery, setMoviesGallery ] = useState(data)
  const [ clickedMovie, setClickedMovie ] = useState(null)
  const [ currentIndex, setCurrentIndex] = useState(null)

  const [ currentPage, setCurrentPage ] = useState(1)
  const [ fetching, setFetching ] = useState(true)
  const [ totalCount, setTotalCount ] = useState(0) 

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)

    return () => {
      document.addEventListener('scroll', scrollHandler)
    }
  }, [])

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 
    && moviesGallery.length < totalCount) { 
      console.log('scroll');
      setFetching(true) 
    }
  } 
  // modal
  const handleClick = (item, index) => {
    setClickedMovie(item.url)
    setCurrentIndex(index)
  }

  console.log(moviesGallery);

  return (
    <section className='content'>
      <Title titleClass='title-primary' title={title} />
      <div className="content__list">
        {moviesGallery.data.map((item, index) => (
            <div className='content__item' key={index}>
              <ReactPlayer 
                url={item.url}
                width='100%'
                height='100%'
                controls={true}
                onClick={() => handleClick(item, index)}
              />
            </div>
            ))  
          }
      </div>
      {clickedMovie && 
        <Modal 
          clickedMovie={clickedMovie} 
          // handleRotationRight={handleRotationRight}
          setClickedMovie={setClickedMovie} 
          // handleRotationLeft={handleRotationLeft}
        />
      }
    </section>
  )
}

export default Movies