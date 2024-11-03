import React, { useRef, useState } from 'react';
import LuxuryCarsData from '../../utils/LuxuryCarsData';
import Slider from 'react-slick';

const Executive = () => {
    let sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };
  
    const settings = {
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      speed: 500,
      arrows: false,
      pauseOnHover: false,
      swipe: true,
    //   fade: true,
      afterChange: (current) => setCurrentSlide(current),
    };
  return (
    <div>
        <Slider
            ref={slider => {
                sliderRef = slider;
            }}
            {...settings}
            className='luxury-slider'
            >
        {LuxuryCarsData.map((car) => (
            <div key={car.id} className='luxury-card'>
            <div className='luxury-title-container'>
                <p className='luxury-title'>{car.carName}</p>
                <p className='luxury-price'>{car.price}/<span>day</span></p>
            </div>
            <img className='car-image' src={car.carImage} alt={car.carName} />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="size-2 line-icon"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>  
            
            </div>
            
        ))}
        </Slider>
        <div className='control-panel'>
            <div className='be-a-partner'>
                <p>Be a partner</p>
                <svg className='' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M10 18L16 12L10 6" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>
            <div className="slider-buttons">
                <button className="slider-button prev" 
                onClick={previous}
                disabled={currentSlide === 0}>
                    <svg className='custom-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M14 6L8 12L14 18" stroke="#EFF5FD" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
                <button className="slider-button next" 
                onClick={next}
                disabled={currentSlide >= LuxuryCarsData.length - 3}>
                    <svg className='custom-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M10 18L16 12L10 6" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
            </div>
        </div>

    </div>
  );
};

export default Executive;
