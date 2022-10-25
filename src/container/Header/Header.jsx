import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex" style={{ 
    backgroundImage: `url(${images.bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    // backgroundAttachment: 'relative',
    
  }}>
    
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 2 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span></span>
          <div style={{ margin: 10 }}>
            <p className="p-text">Need a quote?</p>
            <h1 className="h2-text"> <a
        href={`#${'contact us'}`}>Click here.</a></h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Residential & Commercial</p> <p>Painting Solutions.</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 2, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profileReg} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.flutter, images.redux, images.spotify].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <a href={`#${'contact us'}`} ><img src={circle} alt="profile_bg" /></a>
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home')