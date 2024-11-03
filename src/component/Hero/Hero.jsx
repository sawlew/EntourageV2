import { Form, Header } from "..";
import { useState, useRef } from "react";
import HeroContent from "./HeroContent";
import Herodata from "../../utils/HeroSlidesData";
import Slider from "react-slick";
import "./hero.css";
import leftArrow from "../../assets/left.png";
import rightArrow from "../../assets/right.png";
import locationIcon from "../../assets/Vector.png"
import flashIcon from "../../assets/flash.png"
import packageIcon from "../../assets/Functions & features.png"
import bookingIcon from "../../assets/book.png"
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const Hero = () => {
  // const [bg, setbg] = useState(Herodata);
  const [ id, setId ] = useState(Herodata);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    fade: true,
    cssTransition: true,
  };
  return (
    <div className="upperLevel" id="home">
      

      <Slider ref={sliderRef} {...settings}>
        {Herodata.map((data) => (
          <HeroContent key={data.id} Herodata={data} />
        ))}
        </Slider>
        <div className="hero-controls">
          <button className="hero-button left-button" onClick={() => sliderRef.current.slickPrev()}>
            <img src={leftArrow} alt="" />
          </button>
          <button className="hero-button right-button" onClick={() => sliderRef.current.slickNext()}>
            <img src={rightArrow} alt="" />
          </button>
        </div>
        <section className="form-space">
        <div className="form-box">
          <div className="time-selector">
            <button>Hourly</button>
            <button>Daily</button> 
          </div>
          <div className="form-entity">
            <img src={locationIcon} alt="" />
            <div>
              <p className="selector-title">Where</p>
              <p>City or Destination</p>
            </div>
          </div>
          <div className="form-entity">
            <img src={packageIcon} alt="" />
            <div>
              <p className="selector-title">Pick</p>
              <div>
                <select name="Date" id="" className="first-selector">
                  <option value="">Date</option>
                  <option value="Mon">Mon</option>
                  <option value="Tue">Tue</option>
                  <option value="Wed">Wed</option>
                </select>
                <select name="" id="">
                  <option value="">Time</option>
                  <option value="1:00">1:00PM</option>
                  <option value="2:00">2:00PM</option>
                  <option value="3:00">3:00PM</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-entity">
            <img src={flashIcon} alt="" />
            <div>
              <p className="selector-title">Destination</p>
              <div>
              <select name="Date" id="" className="first-selector">
                  <option value="">Date</option>
                  <option value="Mon">Mon</option>
                  <option value="Tue">Tue</option>
                  <option value="Wed">Wed</option>
                </select>
                <select name="" id="">
                  <option value="">Time</option>
                  <option value="1:00">1:00PM</option>
                  <option value="2:00">2:00PM</option>
                  <option value="3:00">3:00PM</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <button className="action-button">
              <img src={bookingIcon} alt="" />
              <p>Book Now</p>
            </button>
          </div>
        </div>
        </section>
    </div>
  );
}
 
export default Hero;