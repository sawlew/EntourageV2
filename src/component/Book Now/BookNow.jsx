import React from 'react'
import './bookNow.css'
import Porsche from '../../assets/porsche.png'

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
                <button>Book Now</button>
            </div>
        </div>
    </section>
  )
}

export default BookNow