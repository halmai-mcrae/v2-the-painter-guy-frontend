import React, { useState, useEffect } from 'react'
// import { motion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

import './Testimonial.scss'

import {
  AppWrap,
  MotionWrap,
} from '../../wrapper'

import { urlFor, client } from '../../client'

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tests, setTests] = useState([])

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]'
    client.fetch(query).then((data) => {
      setTests(data)
    })
  }, [])

  return (
    <>
      <span></span>
      <p className="head-text">
        Testi<span>monials.</span> <br />
      </p>
      <>
      {tests.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(tests[currentIndex].imgUrl)} alt={tests[currentIndex].name} />
            <div className="app__testimonial-content">
              <p className="p-text">{tests[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{tests[currentIndex].name}</h4>
                <h5 className="p-text">{tests[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? tests.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === tests.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
    </>
  )
}


export default AppWrap(
  MotionWrap(Testimonial, 'app__about'),
  'testimonials',
  'app__whitebg'
)