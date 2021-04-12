import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function SlickSlider(props) {
  const { settings, images } = props

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="product-img">
          <img src="/images/stool.jpg" alt="" />
        </div>
      ))}
    </Slider>
  )
}

export default SlickSlider
