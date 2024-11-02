import React from 'react'
import './waitlist.css'
import WaitlistImg from '../../assets/waitlist.jpeg'

const Waitlist = () => {
  return (
    <div className='waitlist-main-container'>
        <div className='waitlist-container'>
            <img src={WaitlistImg} alt="" />
            <div className="waitlist-overlay">
                <div className='waitlist-description'>
                    <h1>Join Our Waitlist</h1>
                    <p>Our mission is to provide people with convenience, comfort and luxury by connecting them with choice car rides at preferred locations leveraging technology.</p>
                    <button>
                        <p>Get the App</p>
                        <svg class="waitlist-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M10 18L16 12L10 6" stroke="white" stroke-width="2" stroke-linecap="round"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Waitlist