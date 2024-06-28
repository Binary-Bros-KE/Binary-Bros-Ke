//-------- Imports
import "./navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

//------------- Images
import Logo from "../../../public/header_logo_blue.svg";
import starter_package from "../../../public/banners/starter_package.png";
import premium_package from "../../../public/banners/premium_package.png";
import bannner2 from "../../../public/banners/banner_2.png";
import Button from "../genericButton/genButton";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="nav-socials">
          <div className="primary-info">
            <p className="responsive-display">
              <i className="fa fa-envelope"></i> binarybroske@gmail.com
            </p>
            <p>
              <i className="fab fa-whatsapp"></i>&nbsp;+254 791 880 412
            </p>
          </div>
          <div className="platforms">
            <i className="fab fa-facebook cursor-pointer"></i>
            <i className="fab fa-twitter cursor-pointer"></i>
            <i className="fab fa-github cursor-pointer responsive-display"></i>
            <i className="fab fa-instagram cursor-pointer"></i>
          </div>
        </div>

        <div className={nav ? "nav nav-height" : "nav"}>
          <div className="nav__data">
            <Link className="nav__logo" to="/"> <img src={Logo} alt="" /> </Link>
            <div className="nav__toggle" id="nav-toggle" onClick={() => setNav(!nav)}>
              <i className={nav ? "fa fa-window-close" : "fa fa-bars"}></i>
            </div>
          </div>

          {/*================== NAV MENU ===============*/}
          <div className={nav ? "nav__menu show-menu" : "nav__menu"} id="nav-menu">
            <ul className="nav__list">
              <li>
                <Link to="/" className="nav__link">
                  Home
                </Link>
              </li>

              {/*================== DROPDOWN 1 ===============*/}
              <li
                className="dropdown__item"
                onClick={() => {
                  setDropdown1(!dropdown1);
                  setDropdown2(false);
                  setDropdown3(false);
                }}
              >
                <div className="nav__link dropdown__button">
                  Services{" "}
                  <i
                    className={
                      dropdown1
                        ? "fa fa-chevron-up  dropdown-arrow"
                        : "fa fa-chevron-down  dropdown-arrow"
                    }
                  ></i>
                </div>

                <div
                  className={
                    dropdown1
                      ? "dropdown__container show_dropdown"
                      : "dropdown__container"
                  }
                >
                  <div className="dropdown__content">
                    <div className="dropdown__group">
                      <div className="dropdown__icon">
                        {" "}
                        <i className="fa fa-laptop-code"></i>{" "}
                      </div>
                      <span className="dropdown__title">
                        Custom Software Development
                      </span>
                      <ul className="dropdown__list">
                        <li>
                          <Link className="dropdown__link" to={'/websitedevelopment'}>
                            <div className="dropdown__link__icon"></div> Website
                            Design & Development
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown__link">
                            <div className="dropdown__link__icon"></div> Mobile
                            Applications
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown__link">
                            <div className="dropdown__link__icon"></div>{" "}
                            E-commerce Solutions
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown__link">
                            <div className="dropdown__link__icon"></div>{" "}
                            Management Systems
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown__link">
                            <div className="dropdown__link__icon"></div>{" "}
                            Wordpress and CMS Solutions
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown__link">
                            <div className="dropdown__link__icon"></div>{" "}
                            Software Testing and Quality Assuarance
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="dropdown__group">
                      <div className="dropdown__icon">
                        <i className="fa fa-search"></i>
                      </div>
                      <span className="dropdown__title">
                        Search Engine Optimization(SEO)
                      </span>
                      <ul className="dropdown__list">
                        <li>
                          <Link className="dropdown__link">
                            <div className="dropdown__link__icon"></div> SEO
                            Audits and Consultations
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown__link">
                            <div className="dropdown__link__icon"></div> On Page
                            SEO
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown__link">
                            <div className="dropdown__link__icon"></div> Off
                            Page SEO
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown__link">
                            <div className="dropdown__link__icon"></div>{" "}
                            Technical and Local SEO
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown__link">
                            <div className="dropdown__link__icon"></div> Website
                            Speed Optimization
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown__link">
                            <div className="dropdown__link__icon"></div> Website
                            Maintenance
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="dropdown__group">
                      <div className="dropdown__icon">
                        <i className="fa fa-bullhorn"></i>
                      </div>
                      <span className="dropdown__title">Digital Marketing</span>
                      <ul className="dropdown__list">
                        <li>
                          <Link className="dropdown__link">
                            <div className="dropdown__link__icon"></div> Social
                            Media Campaigns
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown__link">
                            <div className="dropdown__link__icon"></div>{" "}
                            Google/Social Media ads
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown__link">
                            <div className="dropdown__link__icon"></div> Pay Per
                            Click (PPC Management)
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown__link">
                            <div className="dropdown__link__icon"></div> Event /
                            Influencer Marketing
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown__link">
                            <div className="dropdown__link__icon"></div> Audits
                            and Consultations
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown__link">
                            <div className="dropdown__link__icon"></div> Graphic
                            Design
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="dropdown__group">
                      <div className="dropdown__icon">
                        <i className="fa fa-code"></i>
                      </div>
                      <span className="dropdown__title">
                        Programming and Automation
                      </span>
                      <ul className="dropdown__list">
                        <li>
                          <Link className="dropdown__link">
                            <div className="dropdown__link__icon"></div> Cloud
                            Infrastructure Services
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown__link">
                            <div className="dropdown__link__icon"></div> AI and
                            Machine Learning Implementation
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown__link">
                            <div className="dropdown__link__icon"></div>{" "}
                            Internet of Things(IoT) Development
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown__link">
                            <div className="dropdown__link__icon"></div> Data
                            Analysis and Visualization
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown__link">
                            <div className="dropdown__link__icon"></div> Agile
                            Project Management
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown__link">
                            <div className="dropdown__link__icon"></div> DevOps
                            Consulting and Implementation
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <Link to="/portfolio" className="nav__link">
                  Portfolio
                </Link>
              </li>

              {/*================== DROPDOWN 2 ===============*/}
              <li
                className="dropdown__item"
                onClick={() => {
                  setDropdown1(false);
                  setDropdown2(!dropdown2);
                  setDropdown3(false);
                  console.log("click");
                }}
              >
                <div className="nav__link dropdown__button">
                  Pricing{" "}
                  <i
                    className={
                      dropdown1
                        ? "fa fa-chevron-up  dropdown-arrow"
                        : "fa fa-chevron-down  dropdown-arrow"
                    }
                  ></i>
                </div>

                <div
                  className={
                    dropdown2
                      ? "dropdown__container show_dropdown"
                      : "dropdown__container"
                  }
                >
                  <div className="dropdown__content">
                    <div className="dropdown__group__with__image">
                      <img src={starter_package} alt="" />
                      <div className="image_info_div">
                        <i className="fa fa-link"></i>
                        <Link to='/contact' className="package__link">Get Free Quote <i className="fas fa-long-arrow-alt-right"></i></Link>
                      </div>
                    </div>

                    <div className="dropdown__group__with__image">
                      <img src={premium_package} alt="" />
                      <div className="image_info_div">
                        <i className="fa fa-link"></i>
                        <Link to='/contact' className="package__link">Get Free Quote <i className="fas fa-long-arrow-alt-right"></i></Link>
                      </div>
                    </div>

                    <div className="dropdown__group__with__text">
                      <div className="pricing_text_content">
                      <p>To receive a <b>personalized quote</b>, please fill out the form on our website. Our team of experts will review your requirements and get back to you with a customized proposal that meets your exact needs. </p>
                      <Button text={'Fill out form'} to={'/quote'} showArrow={true} width={'230px'}/>
                      </div>
                    </div>

                    <div className="dropdown__group">
                      <div className="dropdown__icon">
                        {" "}
                        <i className="	fas fa-tags"></i>{" "}
                      </div>
                      <span className="dropdown__title">
                        Generic Packaging and Pricing
                      </span>
                      <ul className="dropdown__list">
                        <li>
                          <Link className="dropdown__link" to={'/pricing'}>
                            <div className="dropdown__link__icon"></div> Website
                            Design Services
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown__link" to={'/pricing'}>
                            <div className="dropdown__link__icon"></div> Mobile
                            Applications
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown__link" to={'/pricing'}>
                            <div className="dropdown__link__icon"></div> Digital
                            Marketing
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown__link" to={'/pricing'}>
                            <div className="dropdown__link__icon"></div> Search
                            Engine Optimzation
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown__link" to={'/pricing'}>
                            <div className="dropdown__link__icon"></div>{" "}
                            Programming and Automation
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              {/*================== DROPDOWN 3 ===============*/}
              <li
                className="dropdown__item"
                onClick={() => {
                  setDropdown1(false);
                  setDropdown2(false);
                  setDropdown3(!dropdown3);
                }}
              >
                <div className="nav__link dropdown__button">
                  Company{" "}
                  <i
                    className={
                      dropdown1
                        ? "fa fa-chevron-up  dropdown-arrow"
                        : "fa fa-chevron-down  dropdown-arrow"
                    }
                  ></i>
                </div>
                <div
                  className={
                    dropdown3
                      ? "dropdown__container show_dropdown"
                      : "dropdown__container"
                  }
                >
                  <div className="dropdown__content">
                    <div className="dropdown__group__with__image">
                      <img src={bannner2} alt="" />
                    </div>

                    <div className="dropdown__group">
                      <div className="dropdown__icon">
                        {" "}
                        <i className="fas fa-coffee"></i>{" "}
                      </div>
                      <span className="dropdown__title">About BB ke</span>
                      <ul className="dropdown__list">
                        <li>
                          <Link className="dropdown__link">
                            <div className="dropdown__link__icon"></div> About
                            Us
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown__link">
                            <div className="dropdown__link__icon"></div> Our
                            Team
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown__link">
                            <div className="dropdown__link__icon"></div> Support
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown__link">
                            <div className="dropdown__link__icon"></div> Contact
                            Us
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="dropdown__group">
                      <div className="dropdown__icon">
                        <i className="far fa-address-card"></i>
                      </div>
                      <span className="dropdown__title">Company</span>
                      <ul className="dropdown__list">
                        <li>
                          <Link className="dropdown__link">
                            <div className="dropdown__link__icon"></div> Terms
                            and Conditions
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown__link">
                            <div className="dropdown__link__icon"></div> Payment
                            Methods
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown__link">
                            <div className="dropdown__link__icon"></div> Policy
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown__link">
                            <div className="dropdown__link__icon"></div> Cookies
                            and Settings
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="dropdown__group">
                      <div className="dropdown__icon">
                        <i className="fa fa-phone"></i>
                      </div>
                      <span className="dropdown__title">Contact</span>
                      <ul className="dropdown__list">
                        <li>
                          <Link className="dropdown__link">
                            <div className="dropdown__link__icon"></div> Web
                            Form
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown__link">
                            <div className="dropdown__link__icon"></div>{" "}
                            binarybroske@gmail.com
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown__link">
                            <div className="dropdown__link__icon"></div>{" "}
                            Whatsapp
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown__link">
                            <div className="dropdown__link__icon"></div> +254 791 880 412
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <Link to="/blog" className="nav__link">
                  <span>Blog</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav__link">
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="quote__button">
            <Button text={'Get Quote'} to={'/quote'} showArrow={true} width={'150px'}/>
          </div>
        </div>
      </div>
      <div className="nav-spacer"></div>
    </>
  );
};

export default Navbar;
