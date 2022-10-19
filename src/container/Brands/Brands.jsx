import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import './Brands.scss'

import {
  AppWrap,
  MotionWrap,
} from '../../wrapper'

import { urlFor, client } from '../../client'

const Brands = () => {
  const [brands, setBrands] = useState([])

  useEffect(() => {
    const query = '*[_type == "brands"]'
    client.fetch(query).then((data) => {
      setBrands(data)
    })
  }, [])

  return (
    <>
      <span></span>
      <p className="head-text">
        Brands<span> and contributors.</span> <br />
      </p>

      <div className="app__profiles">
        {brands.map((brand, index) => (
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{
              duration: 0.5,
              type: 'tween',
            }}
            className="app__profile-item"
            key={brand.name + index}
          >
            <img
              src={urlFor(brand.imgUrl)}
              alt={brand.name}
            />
            <h3
              className="bold-text"
              style={{ marginTop: 20 }}
            >
              {brand.name}
            </h3>
            <p
              className="text"
              style={{ marginTop: 20 }}
            ></p>
          </motion.div>
        ))}
      </div>
    </>
  )
}
export default AppWrap(
  MotionWrap(Brands, 'app__about'),
  'brands',
  'app__whitebg'
)