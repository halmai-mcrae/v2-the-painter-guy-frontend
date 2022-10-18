import React, { useState, useEffect} from 'react'
import { motion } from 'framer-motion'

import images from '../../constants/images'

import './About.scss'

const About = () => {

  const abouts = [
    {
      title: 'Wrestler',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.',
      imgUrl: images.about01,
      imgAlt: 'Wrestler'
    },
    {
      title: 'Khandallah',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.',
      imgUrl: images.about02,
      imgAlt: 'Khandallah'
    },
    {
      title: 'Prefab',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.',
      imgUrl: images.about03,
      imgAlt: 'Prefab'
    }

  ]


  return (
  
  <>
  <span></span>
  <p className="head-text">Good <span> design</span> <br />is <span>good business.</span></p>

  <div className="app__profiles">
    {abouts.map((about, index) => (
      <motion.div
      whileInView={ { opacity: 1, scale: 1 } }
      whileHover={ { scale: 1.1 } }
      transition={ { duration: 0.5, type: 'tween' } }
      className="app__profile-item"
      key={about.title + index}
      >
        <img src={about.imgUrl} alt={about.title} />
        <h3 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h3>
        <p className='text' style={{ marginTop: 20 }}>{about.title}</p>

    </motion.div>
    ))}
</div>
</>
);
};


export default About