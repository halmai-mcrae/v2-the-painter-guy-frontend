import React from 'react'

import Carousel from 'react-bootstrap/Carousel'

import './Carousel.scss'

const Gallery = () => {
  return (
    <div className="carousel">
      <Carousel>
        <Carousel.Item>
          <img
            className="images"
            src="https://images.unsplash.com/photo-1605201470550-f107ba6fdad3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First</h3>
            <p>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="images"
            src="https://images.unsplash.com/photo-1520420097861-e4959843b682?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second</h3>
            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="images"
            src="https://images.unsplash.com/photo-1501366062246-723b4d3e4eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1792&q=80"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third</h3>
            <p>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="images"
            src="https://images.unsplash.com/photo-1605201470550-f107ba6fdad3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First</h3>
            <p>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="images"
            src="https://images.unsplash.com/photo-1520420097861-e4959843b682?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second</h3>
            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="images"
            src="https://images.unsplash.com/photo-1501366062246-723b4d3e4eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1792&q=80"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third</h3>
            <p>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </div>
  )
}

export default Gallery
