import logo from '../Assets/logo-black.png';
import menu from '../Assets/home/menu.png';
import close from '../Assets/home/close.png';
import NavButton from './NavButton';
import { useState } from 'react';


const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  const switchToggle = () => {
    setToggle(!toggle)
  }

  return(
    <div className="navbar">

      <div className="nav-socials">
        <div className="primary-info">
          <p><i className='fa fa-envelope'></i> binarybroske@gmail.com</p>|
          <p><i className='fa fa-phone'></i>+254 791 880 412</p>
        </div>
        <div className="platforms">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-github"></i>
            <i className="fab fa-instagram"></i>
        </div>
      </div>

      <div className="nav-links">
        <div className="nav-logo">
          <img src={logo} alt='img'/>
        </div>
        <div className="responsive">
          <img className='resposniveLogo' src={logo} alt='img'/>
          <img className='menu' onClick={switchToggle} src={toggle ? close : menu  } alt="menu" />
        </div>
        <div className="links">
          <ul className="md:flex hidden items-center gap-4">
              <li><a href="/" className='active'>Home</a></li>
              <li><a href="/services">Services&nbsp;<i className="fas fa-chevron-down"></i></a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/pricing">Pricing&nbsp;<i className="fas fa-chevron-down"></i></a></li>
              <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="nav-button">
          <NavButton />
        </div>
      </div>

        {/* Mobile Nav */}
        <div className={`mobile-nav md:hidden ${ toggle ? 'left-0' : 'left-[-100%]' }`}>
            <ul className={`bg-primary absolute w-full h-full bottom-0 ${ toggle ? 'top-0' : 'top-[-100%]' }`}>
                  <li><a href="/" className='active'>Home</a></li>
                  <li><a href="/services">Services</a></li>
                  <li><a href="/portfolio">Portfolio</a></li>
                  <li><a href="/pricing">Pricing</a></li>
                  <li><a href="/contact">Contact</a></li>
            </ul>
            
        </div>
    </div>
  )
  }

export default Navbar
