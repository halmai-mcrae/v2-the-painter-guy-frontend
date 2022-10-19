import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import ReactTooltip from 'react-tooltip';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Services.scss';

const Skills = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const servicesQuery = '*[_type == "services"]';

    client.fetch(servicesQuery).then((data) => {
      setServices(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text"></h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {services.map((service) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={service.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: service.bgColor }}
              >
                <img src={urlFor(service.icon)} alt={service.name} />
              </div>
              <p className="p-text">{service.name}</p>
            </motion.div>
          ))}
        </motion.div>
        {/* <div className="app__skills-exp"> */}
          {/* {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))} */}
        {/* </div> */}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'services',
  'app__whitebg',
);