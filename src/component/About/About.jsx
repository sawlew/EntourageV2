import "./about.css";
import AboutImg from "../../assets/about.jpeg";

const AboutUs = () => {

  return (
      <div className="about-container">
        <img src={AboutImg} alt="" />
        <div className="about-overlay">
          <div className="about-us">
            <h1>About Us</h1>
            <p>
            ENTOURAGE is an integrated luxury car hiring platform employing the use of technology to provide a unique solution to the growing demand for car rentals in Nigeria with specific emphasis on comfort, ease of access, convenience and luxury. Businesses who partner with us to list their cars on the platform can access up to 1000+ customers daily looking to rent luxury vehicles for their various occasions, they are also able to build and expand their car fleets through the premium rental income generated on the platform.
            </p>
            <button>
              Read More
            </button>
          </div>
        </div>
      </div>
  );
};

export default AboutUs;
