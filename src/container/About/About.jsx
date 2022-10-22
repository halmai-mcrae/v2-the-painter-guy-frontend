import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import './About.scss'

import {
  AppWrap,
  MotionWrap,
} from '../../wrapper'

import { urlFor, client } from '../../client'

const About = () => {
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]'
    client.fetch(query).then((data) => {
      setAbouts(data)
    })
  }, [])

  return (
    <>
      <span></span>
      <p className="head-text">
        Our <span> work.</span> <br />
      </p>
      <p className='bold-text'>
        Good design is <span>good business.</span>
      </p>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{
              duration: 0.5,
              type: 'tween',
            }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img
              src={urlFor(about.imgUrl)}
              alt={about.title}
            />
            <h3
              className="bold-text"
              style={{ marginTop: 20 }}
            >
              {about.title}
            </h3>
            <p
              className="text"
              style={{ marginTop: 20 }}
            ></p>
          </motion.div>
        ))}

      <div>
     <p className="bold-text">
        We provide solutions for paint-related
          projects for any interior or exterior
          application.</p>
        <p className="p-text">
          Our painters work closely with owner and
          experienced painter, Luke Grindlay.
          Luke's 10 years in business and his love
          for transforming properties is why The
          Painter Guy has a trusted reputation and
          many satisfied clients. Our highly
          skilled team know how to protect your
          most valuable asset using tailored
          products for each substrate.
          <br />
          <br />
          
          Every job
          is unique and deserves attention to
          detail. Covering the whole spectrum of
          painting and decorating, look no further
          for specialists in beautiful home
          renovations or refreshing the look of
          your business.
        </p>
        <p className="p-text">
          We make the process of cost estimating
          and feedback easy for you. Get in touch
          and let us provide a price for your next
          painting project.
        </p>
        </div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'our work',
  'app__whitebg'
)
