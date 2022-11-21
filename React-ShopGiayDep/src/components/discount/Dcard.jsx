import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Ddata from "./Ddata"
import "../newarrivals/style.css"

const Dcard = ({productItems,addToCart}) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <>
      <Slider {...settings}>
        {Ddata.map((value, index) => {
          return (
            <>
              <div className='box product po bd' key={index}>
                <div className='img '>
                  <img src={value.cover} alt='' width='100% ' />
                </div>
                <h4>{value.name}</h4>
                <span>{value.price}</span>
                <button onClick={() => addToCart(productItems)}>
                      <i className='fa fa-plus big-discout-button'></i>
                </button>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default Dcard
