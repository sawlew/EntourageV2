import React from 'react'
import arrowForward from '../../assets/arrow-down.png'
import "./hero.css"


const HeroContent = ({ Herodata }) => {

  const { image, header, subheader } = Herodata;
  return (
    <>
        <section className="hero" id="home" style={{ backgroundImage: `url(${image})` }}>
            <div className="hero-overlay">
              <div className='headings'>
                <p className='header'>{header}</p>
                <p className='subheader'>{subheader}</p>
                <div className='join-waitlist'>
                  <p>Join Waitlist</p>
                  <img src={arrowForward} alt="" />
                </div>
              </div>
              {/* <div>
                <button>Left</button>
                <button>Right</button>
              </div> */}
              <div>
                <div>
                  
                </div>
              </div>
            </div>
        </section>
    </>
  )
}

export default HeroContent