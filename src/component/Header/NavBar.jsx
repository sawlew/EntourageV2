import { useState } from "react";
import "./navbar.css";
import "./dropdown.css";
import * as IoIcons from "react-icons/io";
import { motion } from "framer-motion";
import Modal from "../Modal/Modal";
import Logo from "../../assets/logo.png"
import NavLTabs from './Dropdown';

const NavBar = ({displayModal}) => {
  const [dropDown, setDropDown] = useState(false);
  const showDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
      <header>
        <section className="header-content">
          <div className="hnav hnav1">
            <div className={dropDown ? 'menu-wrapper': 'menu-off'}>
              <IoIcons.IoIosMenu className="bars" onClick={showDropDown} />
              {dropDown && <NavLTabs onClick={showDropDown} />}
            </div>
          </div>
          
          <div className="hnav hnav2">
            <img className="logo" src={Logo} alt="" />
          </div>
          
          <motion.div className="hnav hnav3" whileHover={{ scale: 1.01 }}>
            <button className="getTheApp">
              Get the App
            </button>
          </motion.div>
        </section>
      </header>
  );
};

export default NavBar;
