import React from "react"

const Annocument = () => {
  const mystyle = {
    width: "70%"
  }
  // baner 
  return (
    <>
      <section className='annocument background'>
        <div className='container d_flex js'>
          <div className='img ' style={mystyle}>
            <img src='./images/banner-2.png' width='100%' height='100%'  />
          </div>
        </div>
      </section>
    </>
  )
}

export default Annocument
