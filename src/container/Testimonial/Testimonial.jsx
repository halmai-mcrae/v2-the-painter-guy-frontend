import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import './Testimonial.scss'

import {
  AppWrap,
  MotionWrap,
} from '../../wrapper'

import { urlFor, client } from '../../client'

const Testimonial = () => {
  const [tests, setTests] = useState([])

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

      <div className="app__profiles">
        {tests.map((test, index) => (
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{
              duration: 0.5,
              type: 'tween',
            }}
            className="app__profile-item"
            key={test.name + index}
          >
            <img
              src={urlFor(test.imgUrl)}
              alt={test.imgUrl}
            />
            <h3
              className="bold-text"
              style={{ marginTop: 20 }}
            >
              {test.name}
            </h3>
              
            <p
              className="text"
              style={{ marginTop: 20 }}
            >{test.feedback}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}
export default AppWrap(
  MotionWrap(Testimonial, 'app__about'),
  'testimonials',
  'app__whitebg'
)