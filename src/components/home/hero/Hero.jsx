import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Search Doctor For Your Problems ' subtitle='Visit Us Get Your Solution' />

          <form className='flex'>
            <div className='box'>
              <span>State</span>
              <input type='text' placeholder='State' />
            </div>
            <div className='box'>
              <span>City/Street</span>
              <input type='text' placeholder='City/Street' />
            </div>
            <div className='box'>
              <span>Problem Type</span>
              <input type='text' placeholder='Problem Type' />
            </div>
            <div className='box'>
              <h4>Advance Filter</h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
