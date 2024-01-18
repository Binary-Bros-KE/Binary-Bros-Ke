import { motion } from "framer-motion";
import '../../custom-css/SEO.css'
import seoTypes from "../../Assets/SEO/seo-types.png";
import seobanner from "../../Assets/SEO/seo-banner.png";
import { SEOReasonsRight, SEOReasonsLeft, Stratergy, Tags } from "../../constants/SEO.js";
import SeoCardList2 from '../../components/SeoCardList2';
import { useState, useEffect } from "react";

const SEO = () => {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
    const offsetTop = document.querySelector('.seo-home-right').offsetTop;
    setIsSticky(window.scrollY >= offsetTop)
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <motion.section
        className="SEO"
        intial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
    >

      <div className="seo-home">

        <div className="seo-home-banner">
          <div className="banner-text">
            <div className="banner-text-header">
                <h1>Search Engine<br className="md:hidden block"/> Optimization</h1>
            </div>
            <div className="banner-links">
                <a href="#">Home</a>/
                <a href="#">Services</a>/
                <a href="#">Serch Engine Optimization-SEO</a>
            </div>
          </div>
        </div>

        <div className="seo-home-left">
          <div className="left-container">
            <div className="seo-home-info">
              <div className="head-text">
                <h1>Binary Bros SEO Services</h1>
              </div>
              <div className="first-text">
                <h1><span>Market Your Website</span> Through Search Engine Optimization</h1>
              </div>
              <div className="seo-paragraph">
                <h2>What is SEO.?</h2>
                <p>SEO, or Search Engine Optimization, is the driving force behind online visibility and success. In simple terms, it's the art and science of enhancing your website's visibility on search engines like Google. Imagine your website as a masterpiece – SEO is the curator that ensures it's showcased to the right audience. From optimizing content and keywords to enhancing user experience, SEO works behind the scenes to elevate your website's ranking and attract organic traffic. With Binary Bros, unlock the secrets of SEO and propel your online presence to new heights.</p>
              </div>
              <div className="seo-home-buttons">
                <a href="#">Hire Us</a>
                <a href="#">See Pricing</a>
              </div>
            </div>
            <div className="seo-home-image">
              <img src={seoTypes} alt="Search Engine Optimization" />
            </div>
        </div>

    <div className="seo-reasons">
          <div className="reasons-header">
            <h2><span>Why</span> Do You Need SEO.?</h2>
          </div>
          <div className="reasons-content">
            <div className="left-div">
            {SEOReasonsRight.map((reason, index) => {
              return(
                <div className="single-seo-reason" key={index}>
                    <h1><i className="fas fa-check"></i> {reason.title}</h1>
                    <p>{reason.description}</p>
                 </div>
              )
            })
            }
            </div>
            <div className="right-div">
            {SEOReasonsLeft.map((reason, index) =>{
              return(
                <div className="single-seo-reason" key={index}>
                    <h1><i className="fas fa-check"></i> {reason.title}</h1>
                    <p>{reason.description}</p>
                 </div>
              )
            })
            }
            </div>
          </div>

        <div className="stratergy-stratergy">
              <div className="stratergy-header">
                <h2>Our SEO <span>Strategies</span></h2>
              </div>
              <div className="stratergy-content">
                <div className="stratergy-image">
                  <img src={seobanner} alt="search engine optimization" />
                </div>
                <div className="stratergy-text">
                  {Stratergy.map((stratergy, index) => {
                    return(
                    <div className="stratergy-singel" key={index}>
                          <div className="stratergy-icon">
                             <i className={stratergy.icon}></i>
                          </div>
                          <div className="stratergy-description">
                            <div className="stratergy-head">
                              <h1>{stratergy.title}</h1>
                            </div>
                            <div className="stratergy-paragraph">
                              <p>{stratergy.description}</p>
                            </div>
                          </div>
                    </div>
                    )
                  })}
                </div>
              </div>
        </div>

        <div className="seo-pricing">
            <div className="stratergy-header">
               <h2>Our <span>Packages</span> and <span>Pricing</span></h2>
            </div>
           <SeoCardList2 />
        </div>


      <div className="work">
          <div className="work-head">
            <h3>The Binary Bros Team</h3>
            <h1>Why Choose <span> Binary Bros </span> for SEO Services</h1>
          </div>

        <div className="work-cards">

          <div className="work-content">
            <div className="work-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <div className="work-text">
              <h1>Guaranteed Results</h1>
              <p>
               Our commitment to a results-driven approach ensures
                  your business experiences tangible success,
                   with proven outcomes that elevate your digital
                    presence and impact. </p>
            </div>
          </div>


          <div className="work-content">
            <div className="work-icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="work-text">
              <h1>Seasoned Experts</h1>
              <p>
                 Our skilled professionals navigate the dynamic digital landscape,
                  offering insights and strategies that align with your unique business objectives.</p>
            </div>
          </div>


          <div className="work-content">
            <div className="work-icon">
              <i className="fas fa-dollar-sign"></i>
            </div>
            <div className="work-text">
              <h1>Affordable Packages</h1>
              <p>Our goal is to offer top-notch services that cater to your specific needs
                 without breaking the bank. With transparent and flexible pricing structures,
                  we ensure you get the most value for your money.</p>
            </div>
          </div>
          
      </div>

        <div className="work-image">
            <img src={seoTypes} alt="" />
        </div>

        </div>
      </div>
   </div>

        <div className={`seo-home-right ${isSticky ? 'sticky' : ''}`}>
          <div className="page-links">
            <h1>Useful Links</h1>
            <a href="#">Home<i className="fas fa-chevron-right"></i></a>
            <a href="#">FAQs<i className="fas fa-chevron-right"></i></a>
            <a href="#">Contact<i className="fas fa-chevron-right"></i></a>
            <a href="#">Services<i className="fas fa-chevron-right"></i></a>
            <a href="#">Portfolio<i className="fas fa-chevron-right"></i></a>
            <a href="#">Our Pricing<i className="fas fa-chevron-right"></i></a>
          </div>

          <div className="help-contacts">
            <div className="help-text">
              <h3>Contact Us Now</h3>
              <h1>Need Help.?</h1>
            </div>
            <hr />
            <div className="seo-contact-info">
              <div className="phone">
                (+254)
                0791880412
              </div>
              <div className="email">
                binarybroske@gmail.com
              </div>
              <div className="contact-paragraph">
                <p>Get in touch for general inquiries, packages & custom Pricing</p>
              </div>
            </div>
            <div className="quote-button">
              <a href="#">Free Quote <i className="fa fa-link"></i> </a>
            </div>
          </div>


          
        <div className="tags">
        <h1>Tags and Keywords</h1>
          <div className="tags-content">
            {Tags.map((tag, index) => {
              return(
              <ul key={index}>
                <li>{tag}</li>
              </ul>
              )
            })}
          </div>
        </div>

        <div className="seo-about-us">
          <h1>About Our Company</h1>
          <p>Binary Bros is a results-driven and impact-focused technology company, dedicated to providing cutting-edge solutions that propel businesses into the digital forefront. As a dynamic firm, we specialize in delivering innovative services tailored to enhance your digital presence, captivate audiences, and foster substantial growth.</p>
          <a href="#"><i className="fa fa-phone"></i>Contact Us</a>
        </div>
        
        </div>
        
      </div>
    </motion.section>
  )
}

export default SEO