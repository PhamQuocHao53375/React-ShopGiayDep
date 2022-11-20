import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h2>Danh mục sản phẩm</h2>
            <ul>
              <li>Nike</li>
              <li>Adidas</li>
              <li>Gucci</li>
              <li>Balenciaga</li>
              <li>Mlb</li>
            </ul>
          </div>

          <div className='box'>
            <h2>Chính sách</h2>
            <ul>
              <li>Chính sách bảo hành</li>
              <li>Chính sách đổi trả </li>
              <li>hính sách bảo mật</li>
              <li>Hình thức thanh toán</li>
              <li>Chính sách giao hàng</li>
            </ul>
          </div>
          <div className='box footer-shoestore'>
            <h2>GiayTheThao</h2>
            <p>Đến với GiayTheThao để sỡ hữu nhưng đôi giày rep 1:1 giá rẻ nhất.Tổng kho bán buôn bao giá toàn quốc. Chất lượng cam kết và chính sách đổi trả linh hoạt. Có sẵn tại cửa hàng!</p>
            
          </div>
          <div className='box mar'>
            <h2>Contact Us</h2>
            <ul>
              <li>Đại học Đông Á</li>
              <li>Email: nhom5@gmail.com</li>
              <li>Phone: 123456789</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
