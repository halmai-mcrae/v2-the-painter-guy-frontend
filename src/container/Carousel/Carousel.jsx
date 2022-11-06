import React, { useEffect, useState } from 'react'
import {
  HiChevronLeft,
  HiChevronRight,
} from 'react-icons/hi'
import { urlFor, client } from '../../client'

import './Carousel.scss'

const Gallery = () => {
  const [currentIndex, setCurrentIndex] =
    useState(0)
  const [photos, setPhotos] = useState([])

  const handleClick = (index) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    const query = '*[_type == "slider"]'
    client.fetch(query).then((data) => {
      setPhotos(data)
    })
  }, [])
  return (
    <>
      {photos.length && (
        <>
          <div className="app__slider-item app__flex">
            <img
              src={urlFor(
                photos[currentIndex].imgUrl
              )}
              alt={photos[currentIndex].name}
            />
          </div>

          <div className="app__slider-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? photos.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex ===
                    photos.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Gallery
