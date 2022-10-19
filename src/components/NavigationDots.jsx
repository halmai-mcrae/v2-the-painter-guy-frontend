
import React from 'react';

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {[ 'home',
          'our work',
          'gallery',
          'brands',
          'testimonials',
          'contact us',].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: '#313BAC' } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;