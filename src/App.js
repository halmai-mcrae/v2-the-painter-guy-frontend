import React from 'react'

import {
  About,
  Footer,
  Header,
  Services,
  Team,
  Testimonials,
  Work,
} from './components'

const App = () => {
  return (
    <div className="app">
      <Header />
      <About />
      <Work />
      <Services />
      <Team />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
