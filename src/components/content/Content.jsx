import React, { useState } from 'react'
import './content.scss'
// import data from '../../api/data.json';
import Modal from '../modal/Modal';
import ContentItem from '../content-item/ContentItem';

const Content = ({ data, img }) => {
  console.log(data);
  const [ photoGallery, setPhotoGallery ] = useState(data)
  const [ clickedImage, setClickedImage ] = useState(null)
  const [ currentIndex, setCurrentIndex ] = useState(null)

  const handleClick = (item, index) => {
    setClickedImage(index)
    setCurrentIndex(item.url)
  }

  const handleRotationRight = () => {
    const totalLength = data.data.length

    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0)
      const newUrl = data.data[0].url
      setClickedImage(newUrl)
      return
    }

    const newIndex = currentIndex + 1
    const newUrl = data.data.filter(item => {
      return data.data.indexOf(item) === newIndex
    })

    const newItem = newUrl[0].url
    setClickedImage(newItem)
    setCurrentIndex(newIndex)
  }

  return (
    <section className='content'>
      <ul className='content__list'>
        {photoGallery.data.map((item, index) => (
          <ContentItem key={index}>
            {
              img ? (
                <img 
                className='content__file'
                src={item.url} 
                alt={item.text}
                onClick={() => handleClick(item, index)} 
              /> 
              )
              : (
                <video src={item.url} />
              )
            }
          </ContentItem>
        ))}
      </ul>
      {clickedImage && 
        <Modal 
          clickedImage={clickedImage} 
          handleRotationRight={handleRotationRight}
          setClickedImage={setClickedImage} 
        />
      }
    </section>
  )
}

export default Content