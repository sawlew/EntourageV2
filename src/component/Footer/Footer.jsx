import React from "react";
import Logo from "../../assets/logo.png";
import "./footer.css"

const Footer = () => {
  return (
    <footer id="contact">
      <div className="footer-logo">
        <img src={Logo} alt="" />
      </div>
      <div className="footer-container">
      <div className="footer">
          <h3 className="footer-title">Reach us</h3>
          <ul>
            <li className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20.0002 10.999H22.0002C22.0002 5.869 18.1272 2 12.9902 2V4C17.0522 4 20.0002 6.943 20.0002 10.999Z" fill="white"/>
                <path d="M13.0003 8.00024C15.1033 8.00024 16.0003 8.89724 16.0003 11.0002H18.0003C18.0003 7.77524 16.2253 6.00024 13.0003 6.00024V8.00024ZM16.4223 13.4432C16.2301 13.2686 15.9776 13.1754 15.7181 13.1835C15.4585 13.1915 15.2123 13.3001 15.0313 13.4862L12.6383 15.9472C12.0623 15.8372 10.9043 15.4762 9.71228 14.2872C8.52028 13.0942 8.15928 11.9332 8.05228 11.3612L10.5113 8.96724C10.6977 8.78637 10.8064 8.54006 10.8144 8.28045C10.8225 8.02083 10.7292 7.76828 10.5543 7.57624L6.85928 3.51324C6.68432 3.3206 6.44116 3.20374 6.18143 3.1875C5.92171 3.17125 5.66588 3.2569 5.46828 3.42624L3.29828 5.28724C3.12539 5.46075 3.0222 5.69169 3.00828 5.93624C2.99328 6.18624 2.70728 12.1082 7.29928 16.7022C11.3053 20.7072 16.3233 21.0002 17.7053 21.0002C17.9073 21.0002 18.0313 20.9942 18.0643 20.9922C18.3088 20.9786 18.5396 20.8749 18.7123 20.7012L20.5723 18.5302C20.7417 18.3328 20.8276 18.077 20.8115 17.8173C20.7954 17.5576 20.6788 17.3143 20.4863 17.1392L16.4223 13.4432Z" fill="white"/>
              </svg>
              <p>
                +2341234567890
              </p>
            </li>
            <li className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22 4H2V20H22V4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="white"/>
              </svg>
              <p>loremipsum@mail.com</p>
            </li>
            <li className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 1.5C9.81276 1.50258 7.71584 2.3726 6.16923 3.91922C4.62261 5.46584 3.75259 7.56276 3.75001 9.75C3.74739 11.5374 4.33124 13.2763 5.41201 14.7C5.41201 14.7 5.63701 14.9963 5.67376 15.039L12 22.5L18.3293 15.0353C18.3623 14.9955 18.588 14.7 18.588 14.7L18.5888 14.6978C19.669 13.2747 20.2526 11.5366 20.25 9.75C20.2474 7.56276 19.3774 5.46584 17.8308 3.91922C16.2842 2.3726 14.1873 1.50258 12 1.5ZM12 12.75C11.4067 12.75 10.8266 12.5741 10.3333 12.2444C9.83995 11.9148 9.45543 11.4462 9.22837 10.8981C9.00131 10.3499 8.9419 9.74667 9.05765 9.16473C9.17341 8.58279 9.45913 8.04824 9.87869 7.62868C10.2982 7.20912 10.8328 6.9234 11.4147 6.80764C11.9967 6.69189 12.5999 6.7513 13.1481 6.97836C13.6962 7.20542 14.1648 7.58994 14.4944 8.08329C14.8241 8.57664 15 9.15666 15 9.75C14.999 10.5453 14.6826 11.3078 14.1202 11.8702C13.5578 12.4326 12.7954 12.749 12 12.75Z" fill="white"/>
              </svg>
              <p>Lorem Ipsum</p>
            </li>
          </ul>
        </div>
        <div className="footer">
          <h3 className="footer-title">Company</h3>
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Blogs</li>
          </ul>
        </div>
        <div className="footer">
          <h3 className="footer-title">Legal</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Terms of Use</li>
            <li>Refund Policy</li>
          </ul>
        </div>
        <div className="footer">
          <h3 className="footer-title">Quick Links</h3>
          <ul>
            <li>Book a ride</li>
            <li>Downloads</li>
            <li>Car Rentage</li>
            <li>Forum</li>
          </ul>
        </div>

        <div className="footer newsletter">
          <h3 className="footer-title">Join Our Newsletter</h3>
          <div className="newsletter-input">
            <input className="mail-field" type="email" placeholder="Your email address" />
            <input className="submit-button" type="submit" value="Subscribe" />
          </div>
          <p className="news-hint">* Will send you weekly updates for your better tool management.</p>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;