import React from 'react'
import Hiro from '../components/hero/Hero'

const Home = () => {
  return (
    <div>
      <Hiro/>
      <div className='browse container text-center pt-5'>
        <h2 className='browse_title'>
          Browse The Range 
        </h2>
        <p className='browse_text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className='images d-flex justify-content-between mt-5'>
          <img src="range0.png" alt="" />
          <img src="range1.png" alt="" />
          <img src="range2.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home