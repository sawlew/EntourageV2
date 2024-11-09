import React from 'react'
import './bookNow.css'
import Porsche from '../../assets/porschee.png'

const BookNow = () => {
  return (
    <section className='bookNow-main-container'>
        <div className='bookNow-container'>
            <div className='bookNow-left'>
                <img src={Porsche} alt="" />
            </div>
            <div className='bookNow-right'>
                <h1>Great rides, Great services</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Dignissim venenatis urna gravida elit.</p>
                <div className='bookNow-button'>
                  <button>
                    <p>Book Now</p>
                    <svg class="bookNow-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M10 18L16 12L10 6" stroke="white" stroke-width="2" stroke-linecap="round"></path>
                    </svg>
                  </button>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default BookNow