import React from "react"
import { Link } from "react-router-dom"

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div >
              <p>
                <Link to ='/' className="giaythethao" >GiayTheThao</Link>
              </p>
          </div>
          <div className='search-box f_flex mw ml'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Tìm kiếm...' />
          </div>

          <div className='icon f_flex width'>
            <i className='fa fa-user icon-circle'></i>
            <div className='cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
