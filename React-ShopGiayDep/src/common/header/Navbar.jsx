import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  // Menu
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='navlink jus-c'>
            
            <ul className="nav-links-MobileMenu link f_flex capitalize jus_c">
              <li>
                <Link to='/'>Trang chủ</Link>
              </li>
              <li>Adidas</li>
              <li>Gucci</li>
              <li>Balenciaga</li>
              <li>Mlb</li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
