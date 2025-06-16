import React from 'react';
import styles from './Navbar.module.css';
import { BsSearch,BsSuitHeart} from "react-icons/bs";
import { IoIosPerson } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* Left Section - Logo and Search */}
      <div className={styles.leftSection}>
        <div className={styles.logoContainer}>
          <img 
            src="https://i.pinimg.com/originals/b1/75/83/b17583760f5256122f44d8213fbda66b.gif" 
            alt="Spinny Logo" 
            className={styles.logoImage}
          />
          <span className={styles.logoText}>Pro Drive</span>
        </div>
        
        <div className={styles.locationSearchContainer}>
          <div className={styles.locationDropdownContainer}>
            <select className={styles.locationDropdown}>
              <option>Warangal</option>
              <option>Hyderabad</option>
              <option>Bangalore</option>
            </select>
            <span className={styles.dropdownArrow}>▼</span>
          </div>
          
          <div className={styles.searchBox}>
            <input 
              type="text" 
              placeholder="Search by year, model, brand..." 
              className={styles.searchInput}
            />
            <button className={styles.searchButton}>
              <span className={styles.searchIcon}><BsSearch /></span>
            </button>
          </div>
        </div>
      </div>

      {/* Right Section - Navigation */}
      <div className={styles.rightSection}>

        
        <div className={styles.navLinks}>
          <div className={styles.navLink}>
            <span className={styles.linkMain}>Buy car</span>
            <span className={styles.linkHover}></span>
          </div>
          <div className={styles.navLink}>
            <span className={styles.linkMain}>Sell car</span>
            <span className={styles.linkHover}></span>
          </div>
          <div className={styles.dropdown}>
            <button className={styles.dropdownToggle}>
              <span className={styles.linkMain}>More</span>
              <span className={styles.dropdownIcon}>▾</span>
              <span className={styles.linkHover}></span>
            </button>
            <div className={styles.dropdownMenu}>
              <a href="#">Services</a>
              <a href="#">About Us</a>
              <a href="#">Testimonials</a>
              <a href="#">FAQ</a>
            </div>
          </div>
        </div>
        
        <div className={styles.userSection}>
          <button className={styles.userButton}>
            <span className={styles.userIcon}><BsSuitHeart /></span>
            <span className={styles.userText}>Shortlisted</span>
            {/* <span className={styles.badge}>3</span> */}
          </button>
          <button className={styles.userButton}>
            <span className={styles.userIcon}><IoIosPerson /></span>
            <span className={styles.userText}>Account</span>
          </button>
        <div className={styles.contact}>
          <span className={styles.callText}>Call us at</span>
          <a href="tel:" className={styles.phoneLink}>
            <span className={styles.phoneIcon}>Q</span>
            <span className={styles.phoneNumber}>+91 98765 43210</span>
          </a>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;