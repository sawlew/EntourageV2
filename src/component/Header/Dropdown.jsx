import React from 'react';
import "./dropdown.css";
// import "./navbar.css";


const Dropdown = ({onClick}) => {
  return (
    <div className="dropdown-content">
        <nav className="nav-links" onClick={onClick}>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#service">Service</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </nav>
    </div>
  )
}

export default Dropdown