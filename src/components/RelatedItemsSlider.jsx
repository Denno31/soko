import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function RelatedItemsSlider({ settings }) {
  const newSettings = {
    ...settings,
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 3,
  }
  return (
    <Slider {...newSettings}>
      <div>
        <img src="/images/stool.jpg" alt="" />
        <p>Holiday print flanel Sheet</p>
      </div>
      <div>
        <img src="/images/stool.jpg" alt="" />
        <p>Holiday print flanel Sheet</p>
      </div>

      <div>
        <img src="/images/stool.jpg" alt="" />
        <p>Holiday print flanel Sheet</p>
      </div>

      <div>
        <img src="/images/stool.jpg" alt="" />
        <p>Holiday print flanel Sheet</p>
      </div>

      <div>
        <img src="/images/stool.jpg" alt="" />
        <p>Holiday print flanel Sheet</p>
      </div>
      <div>
        <img src="/images/stool.jpg" alt="" />
        <p>Holiday print flanel Sheet</p>
      </div>
    </Slider>
  )
}

export default RelatedItemsSlider
