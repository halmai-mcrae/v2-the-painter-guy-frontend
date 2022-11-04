import React from 'react'

import {
  About,
  Footer,
  Header,
  Testimonial,
  Work,
  Brands,
} from './container'

import Navbar from './components/Navbar/Navbar'

import './App.scss'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Brands />
      {/* <Services />
      <Team /> */}
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
