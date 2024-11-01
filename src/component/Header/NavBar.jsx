import { useState } from "react";
import "./navbar.css";
import "./dropdown.css";
import * as IoIcons from "react-icons/io";
import { motion } from "framer-motion";
import Modal from "../Modal/Modal";
import Logo from "../../assets/logo.png"

const NavBar = ({displayModal}) => {
  const [dropDown, setDropDown] = useState(false);
  const showDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <>
      <header>
        <section className="header-content">
          <div className="hnav hnav1">
            <IoIcons.IoIosMenu className="bars" onClick={showDropDown} />
          </div>
          
          <div className="hnav hnav2">
            <img className="logo" src={Logo} alt="" />
          </div>
          

          {/* <nav className="header-nav-links" onClick={showDropDown}>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#howItWorks">Services</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </nav> */}
          <motion.div className="hnav hnav3" whileHover={{ scale: 1.01 }}>
            <button className="getTheApp">
              Get the App
            </button>
          </motion.div>
          <div className="menu-bar">
            {dropDown ? (
              <>
                
                <IoIcons.IoMdClose className="close" onClick={showDropDown} />
              </>

            ) : (
              <IoIcons.IoIosMenu className="bars" onClick={showDropDown} />
            )}
          </div>
        </section>
        

        <div className={ dropDown ? "dropdown-content showMenu" : "dropdown-content" }>
       
        <div className="login">
            <a href="#" onClick={displayModal}>
                <p>Login / Register</p>
            </a>
        </div>
        <hr />
        <nav className="mobile-nav-links" onClick={showDropDown}>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#howItWorks">Services</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </nav>
    </div>
      </header>
    </>
  );
};

export default NavBar;
