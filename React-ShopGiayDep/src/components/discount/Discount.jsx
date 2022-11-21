import React from "react"
import Dcard from "./Dcard"

const Discount = () => {
  return (
    <div className='container'>
          <div className='heading d_flex '>
            <div className='heading-left row  f_flex'>
              <img src="https://img.icons8.com/windows/32/fa314a/gift.png" alt="anh gift" />
              <h2>Sản phẩm bán chạy</h2>
            </div>
          </div>
          <Dcard />
        </div>
  )
}

export default Discount
