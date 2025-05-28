//-------- Imports
import "./navbar.css";
import { useState } from "react";

//------------- Images
import Logo from "/header_logo_blue.svg";
import starter_package from "/banners/starter_package.png";
import premium_package from "/banners/premium_package.png";
import bannner2 from "/banners/banner_2.png";
import Button from "../genericButton/genButton";
import CustomLinkAchor from "../customLinkAchor/CustomLinkAchor";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);

  return (
    <>
      <div className={nav ? "navbar nav-height-test": "navbar"}>
        <div className="nav-socials">
          <div className="primary-info">
          <a href="mailto:binarybroske@gmail.com?subject=Hi,%20Service%20Inquiry">
            <p className="responsive-display">
              <i className="fa fa-envelope"></i> binarybroske@gmail.com
            </p>
            </a>
            <a href="whatsapp://send?phone=+254791880412&text=Hi,%20Binary%20Bros%20Team,%20Please%20send%20me%20a%20quote%20for...">
            <p>
              <i className="fab fa-whatsapp"></i>&nbsp;+254 791 880 412
            </p>
            </a>
          </div>
          <div className="platforms">
            <a href="whatsapp://send?phone=+254791880412&text=Hi,%20Binary%20Bros%20Team,%20Please%20send%20me%20a%20quote%20for..."><i className="fab fa-whatsapp cursor-pointer responsive-display"></i></a>
            <a href="https://www.facebook.com/profile.php?id=61553668976790" target="_blank"><i className="fab fa-facebook cursor-pointer"></i></a>
            <a href="https://x.com/Binarybros_KE" target="_blank"><i className="fab fa-twitter cursor-pointer"></i></a>
            <a href="https://www.instagram.com/binary_bros.ke/" target="_blank"><i className="fab fa-instagram cursor-pointer"></i></a>
          </div>
        </div>

        <div className={nav ? "nav nav-height" : "nav"}>
          <div className="nav__data">
            <a className="nav__logo" to="/"> <img src={Logo} alt="" /> </a>
            <div className="nav__toggle" id="nav-toggle" onClick={() => setNav(!nav)}>
              <i className={nav ? "fa fa-window-close" : "fa fa-bars"}></i>
            </div>
          </div>

          {/*================== NAV MENU ===============*/}
          <div className={nav ? "nav__menu show-menu" : "nav__menu"} id="nav-menu">
            <ul className="nav__list">
              <li>
                <a href="/" className="nav__link">
                  Home
                </a>
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
                          <a className="dropdown__link" href="/websitedevelopment">
                            <div className="dropdown__link__icon"></div> Website
                            Design & Development
                          </a>
                        </li>
                        <li>
                          <a className="dropdown__link" href="/mobileapps">
                            <div className="dropdown__link__icon"></div> Mobile
                            Applications
                          </a>
                        </li>
                        <li>
                          <a className="dropdown__link" href="/ecommerce">
                            <div className="dropdown__link__icon"></div>{" "}
                            E-commerce Solutions
                          </a>
                        </li>
                        <li>
                          <a className="dropdown__link" href="/managementsystems">
                            <div className="dropdown__link__icon"></div>{" "}
                            Management Systems
                          </a>
                        </li>
                        <li>
                          <a className="dropdown__link" href="/wordpress">
                            <div className="dropdown__link__icon"></div>{" "}
                            Wordpress and CMS Solutions
                          </a>
                        </li>
                        <li>
                          <a className="dropdown__link" href="/softwaretesting">
                            <div className="dropdown__link__icon"></div>{" "}
                            Software Testing and Quality Assuarance
                          </a>
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
                          <a className="dropdown__link" href="/seo">
                            <div className="dropdown__link__icon"></div> SEO
                            Audits and Consultations
                          </a>
                        </li>
                        <li>
                          <a className="dropdown__link" href="/seo">
                            <div className="dropdown__link__icon"></div> On Page
                            SEO
                          </a>
                        </li>
                        <li>
                          <a className="dropdown__link" href="/seo">
                            <div className="dropdown__link__icon"></div> Off
                            Page SEO
                          </a>
                        </li>
                        <li>
                          <a className="dropdown__link" href="/seo">
                            <div className="dropdown__link__icon"></div>{" "}
                            Technical and Local SEO
                          </a>
                        </li>
                        <li>
                          <a className="dropdown__link" href="/websitespeed">
                            <div className="dropdown__link__icon"></div> Website
                            Speed Optimization
                          </a>
                        </li>
                        <li>
                          <a className="dropdown__link" href="/webmantanance">
                            <div className="dropdown__link__icon"></div> Website
                            Maintenance
                          </a>
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
                          <a className="dropdown__link" href="/socialmediamarketing">
                            <div className="dropdown__link__icon"></div> Social
                            Media Marketing
                          </a>
                        </li>
                        <li>
                          <a className="dropdown__link" href="/googleads">
                            <div className="dropdown__link__icon"></div>{" "}
                            Google/Social Media ads
                          </a>
                        </li>
                        <li>
                          <a className="dropdown__link" href="/ppcmanagements">
                            <div className="dropdown__link__icon"></div> Pay Per
                            Click (PPC Management)
                          </a>
                        </li>
                        <li>
                          <a className="dropdown__link" href="/eventmarketing">
                            <div className="dropdown__link__icon"></div> Event /
                            Influencer Marketing
                          </a>
                        </li>
                        <li>
                          <a className="dropdown__link" href="/marketingconsultations">
                            <div className="dropdown__link__icon"></div> Audits
                            and Consultations
                          </a>
                        </li>
                        <li>
                          <a className="dropdown__link" href="/graphicdesign">
                            <div className="dropdown__link__icon"></div> Graphic
                            Design
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="dropdown__group">
                      <div className="dropdown__icon">
                        <i className="fa fa-code"></i>
                      </div>
                      <span className="dropdown__title">
                      IT Solutions
                      </span>
                      <ul className="dropdown__list">
                        <li>
                          <a className="dropdown__link" href="/cloudservices">
                            <div className="dropdown__link__icon"></div> Cloud Services (AWS/Azure)
                          </a>
                        </li>
                        <li>
                          <a className="dropdown__link" href="/AIandML">
                            <div className="dropdown__link__icon"></div> AI and
                            Machine Learning Implementation
                          </a>
                        </li>
                        <li>
                          <a className="dropdown__link" href="/InternetOfThings">
                            <div className="dropdown__link__icon"></div>{" "}
                            Internet of Things(IoT) Development
                          </a>
                        </li>
                        <li>
                          <a className="dropdown__link" href="/dataAnalysis">
                            <div className="dropdown__link__icon"></div> Data
                            Analysis and Visualization
                          </a>
                        </li>
                        <li>
                          <a className="dropdown__link" href="/agileprojects">
                            <div className="dropdown__link__icon"></div> Agile
                            Project Management
                          </a>
                        </li>
                        <li>
                          <a className="dropdown__link" href="/devOps">
                            <div className="dropdown__link__icon"></div> DevOps
                            Consulting and Implementation
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <a href="/portfolio" className="nav__link">
                  Portfolio
                </a>
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
                        <div className="image_info_button">
                        <i className="fa fa-link"></i>
                        <CustomLinkAchor element={'Get Free Quote'} packageName={"Launchpad Package"} service={'Binary Bros Special Packages'} price={'45,000'}/>
                        </div>
                        <div className="image_info_button">
                          <a href="/pricing#BBPackages">More info</a>
                        </div>
                      </div>
                    </div>

                    <div className="dropdown__group__with__image">
                      <img src={premium_package} alt="" />
                      <div className="image_info_div">
                        <div className="image_info_button">
                        <i className="fa fa-link"></i>
                        <CustomLinkAchor element={'Get Free Quote'} packageName={"Growth Booster Package"} service={'Binary Bros Special Packages'} price={'95,000'}/>
                        </div>
                        <div className="image_info_button">
                          <a href="/pricing#BBPackages">More info</a>
                        </div>
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
                          <a className="dropdown__link" href="/pricing">
                            <div className="dropdown__link__icon"></div> Website
                            Design Services
                          </a>
                        </li>
                        <li>
                          <a className="dropdown__link" href="/pricing#MobileApplications">
                            <div className="dropdown__link__icon"></div> Mobile
                            Applications
                          </a>
                        </li>
                        <li>
                          <a className="dropdown__link" href="/pricing#SocialMediaMarketing">
                            <div className="dropdown__link__icon"></div> Social Media
                            Marketing
                          </a>
                        </li>
                        <li>
                          <a className="dropdown__link" href="/pricing#SeoPricing">
                            <div className="dropdown__link__icon"></div> Search
                            Engine Optimzation
                          </a>
                        </li>
                        <li>
                          <a className="dropdown__link" href="/pricing#BBPackages">
                            <div className="dropdown__link__icon"></div>{" "}
                            BB KE All in One Packages
                          </a>
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
                          <a className="dropdown__link" href="/">
                            <div className="dropdown__link__icon"></div> About
                            Us
                          </a>
                        </li>
                        <li>
                          <a className="dropdown__link" href="https://full-stack-web-developer-evans.netlify.app/" target="_blank">
                            <div className="dropdown__link__icon"></div> Our
                            Team
                          </a>
                        </li>
                        <li>
                          <a className="dropdown__link" href="/contact">
                            <div className="dropdown__link__icon"></div> Support
                          </a>
                        </li>
                        <li>
                          <a className="dropdown__link" href="/contact">
                            <div className="dropdown__link__icon"></div> Contact
                            Us
                          </a>
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
                          <a className="dropdown__link">
                            <div className="dropdown__link__icon"></div> Terms
                            and Conditions
                          </a>
                        </li>
                        <li>
                          <a className="dropdown__link" href="/pricing">
                            <div className="dropdown__link__icon"></div> Payment
                            Methods
                          </a>
                        </li>
                        <li>
                          <a className="dropdown__link">
                            <div className="dropdown__link__icon"></div> Policy
                          </a>
                        </li>
                        <li>
                          <a className="dropdown__link">
                            <div className="dropdown__link__icon"></div> Cookies
                            and Settings
                          </a>
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
                          <a className="dropdown__link" href="/contact">
                            <div className="dropdown__link__icon"></div> Web
                            Form
                          </a>
                        </li>
                        <li>
                          <a className="dropdown__link" href="mailto:binarybroske@gmail.com?subject=Hi,%20Service%20Inquiry">
                            <div className="dropdown__link__icon"></div>{" "}
                            binarybroske@gmail.com
                          </a>
                        </li>
                        <li>
                          <a className="dropdown__link" href="whatsapp://send?phone=+254791880412&text=Hi,%20Binary%20Bros%20Team,%20Please%20send%20me%20a%20quote%20for...">
                            <div className="dropdown__link__icon"></div>{" "}
                            Whatsapp
                          </a>
                        </li>
                        <li>
                          <a className="dropdown__link" href="whatsapp://send?phone=+254791880412&text=Hi,%20Binary%20Bros%20Team,%20Please%20send%20me%20a%20quote%20for...">
                            <div className="dropdown__link__icon"></div> +254 791 880 412
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <a href="/blog" className="nav__link">
                  <span>Blog</span>
                </a>
              </li>
              <li>
                <a href="/contact" className="nav__link">
                  <span>Contact</span>
                </a>
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
