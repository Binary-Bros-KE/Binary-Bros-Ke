import { motion } from "framer-motion";
import '../../custom-css/webDev.css'
import seoTypes from "../../Assets/SEO/seo-types.png";
import showcase from "../../Assets/home/web-development.png";
import web from '../../Assets/web-development/web.png'
import seobanner from "../../Assets/SEO/seo-banner.png";
import { webReasonsLeft, webReasonsRight, Tags } from "../../constants/webDev.js";
import CardList from '../../components/CardList';
import { useState, useEffect } from "react";

const WebDev = () => {
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
                <h1>Website<br className="md:hidden block"/> Development</h1>
            </div>
            <div className="banner-links">
                <a href="#">Home</a>/
                <a href="#">Services</a>/
                <a href="#">Website Development</a>
            </div>
          </div>
        </div>

        <div className="seo-home-left">
          <div className="left-container">
            <div className="seo-home-info">
              <div className="head-text">
                <h1>Binary Bros Web Design Services</h1>
              </div>
              <div className="first-text">
                <h1><span>Get a Professional Website</span> With Our Web Design Services</h1>
              </div>
              <div className="seo-paragraph">
                <h2>Why You Need A Website.?</h2>
                <p>In today's digital age, a website is more than an online presence; it's a powerful tool for establishing credibility, reaching a broader audience, and staying competitive. A well-designed website provides a centralized platform for showcasing your products, services, or ideas. It enhances your brand's visibility, builds trust with potential customers, and opens up new opportunities. Whether you're a business, professional, or creative individual, having a website is crucial for staying relevant and accessible in the modern online landscape.</p>
              </div>
              <div className="seo-home-buttons">
                <a href="#">Hire Us</a>
                <a href="#">See Pricing</a>
              </div>
            </div>
            <div className="seo-home-image">
              <img src={showcase} alt="Web development" />
              <img src={web} alt="Web development" />
            </div>
        </div>

    <div className="seo-reasons">
          <div className="reasons-header">
            <h2><span>Benefits </span>of a Professional Webiste.?</h2>
          </div>
          <div className="reasons-content">
            <div className="left-div">
            {webReasonsLeft.map((reason, index) => {
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
            {webReasonsRight.map((reason, index) =>{
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
                <h2><span>Webiste </span>Specific To Your Brand</h2>
              </div>
              <div className="stratergy-content">
                <div className="stratergy-image">
                  <img src={showcase} alt="search engine optimization" />
                  <img src={showcase} alt="search engine optimization" />
                </div>
                <div className="stratergy-text-web">
                  <p>Your brand deserves a unique online presence that captivates and resonates with your audience. At Binary Bros, we specialize in crafting bespoke websites tailored to your brand's identity and goals.</p>
                  <ul>
                    <li><i className="fa fa-check"></i> E-commerce Stores</li>
                    <li><i className="fa fa-check"></i> Travel & Professional Services</li>
                    <li><i className="fa fa-check"></i> Restaraunts and Hotels</li>
                    <li><i className="fa fa-check"></i> HeathCare Serices</li>
                    <li><i className="fa fa-check"></i> Personal Portfolio Sites</li>
                    <li><i className="fa fa-check"></i> Education and E-learning Platforms</li>
                    <li><i className="fa fa-check"></i> Technology and Innovation Hubs</li>
                  </ul>
                  <p>From sleek e-commerce stores to dynamic platforms for travel and professional services, inviting restaurants and hotels, to informative healthcare services websites – we ensure your online footprint aligns seamlessly with your brand vision.</p>

                </div>
              </div>
        </div>

        <div className="seo-pricing">
            <div className="stratergy-header">
               <h2>Our <span>Packages</span> and <span>Pricing</span></h2>
            </div>
           <CardList />
        </div>


      <div className="work">
          <div className="work-head">
            <h3>The Binary Bros Team</h3>
            <h1>Why Choose <span> Binary Bros </span> for Design Services</h1>
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
            <img src={showcase} alt="" />
            <img src={showcase} alt="" />
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
            <a href="#">Free Quote<i className="fas fa-chevron-right"></i></a>
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

export default WebDev
