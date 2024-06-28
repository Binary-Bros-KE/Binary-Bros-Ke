import { motion, AnimatePresence } from "framer-motion";
import "../../custom-css/SocialMediaMarketing.css";

import seoTypes from "../../../public/marketing/marketing-reality.png";
import BBbanner from "../../../public/marketing/BB-banner.jpg";
import { MarketingHelpLeft, MarketingHelpRight, Tags, socialMediaFAQ} from "../../constants/Marketing.js";
import MarketingPricing from "../../components/pricingCards/marketing/MarketingPricing.jsx";
import { useState, useEffect } from "react";
import QuoteForm from "../../components/quoteForm/QuoteForm.jsx";

const SocialMediaMarketing = () => {
  //Frequently Asked Questions
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  
  // Sticky Right Section
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offsetTop = document.querySelector(".seo-home-right").offsetTop;
      setIsSticky(window.scrollY >= offsetTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.section
      className="SEO"
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      {/*============= Page Home Banner ======================*/}
      <div className="seo-home">
        <div className="seo-home-banner">
          <div className="banner-text">
            <div className="banner-text-header">
              <h1>
                Social Media
                <br className="md:hidden block" /> Marketing
              </h1>
            </div>
            <div className="banner-links">
              <a href="#">Home</a>/<a href="#">Services</a>/
              <a href="#">Social Media Marketing</a>
            </div>
          </div>
        </div>


      {/*================== Main left contenet ====================*/}
        <div className="seo-home-left">
          <div className="left-container">
            <div className="seo-home-info">
              <div className="head-text">
                <h1>Binary Bros Marketing Services</h1>
              </div>
              <div className="first-text">
                <h1>
                  <span>Expose Your Brand</span> To The World Through Social
                  Media Marketing
                </h1>
              </div>
              <div className="seo-paragraph">
                <h2>What is SEO.?</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Optio, voluptates. Dolorum, sint id dolore voluptatem ipsa
                  inventore maiores quos non, accusantium laboriosam facere est
                  laudantium? Tenetur veniam dignissimos tempore repellendus!
                </p>
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

          {/*================== How we can help Section ================*/}
          <div className="seo-reasons">

            <div className="reasons-header">
              <h2>
                <span>Here's</span> How We Can Help.!
              </h2>
            </div>

            <div className="reasons-content">

              <div className="left-div">
                {MarketingHelpRight.map((reason, index) => {
                  return (
                    <div className="single-seo-reason" key={index}>
                      <h1>
                        <i className="fas fa-check"></i> {reason.title}
                      </h1>
                      <p>{reason.description}</p>
                    </div>
                  );
                })}
              </div>
              <div className="right-div">
                {MarketingHelpLeft.map((reason, index) => {
                  return (
                    <div className="single-seo-reason" key={index}>
                      <h1>
                        <i className="fas fa-check"></i> {reason.title}
                      </h1>
                      <p>{reason.description}</p>
                    </div>
                  );
                })}
              </div>


          </div>
          <div className="marketing-image">
            <div className="call-to-action-text">
              <h3>We Want to work with you</h3>
              <h1>Ask Us <br/> Anything</h1>
            </div>
                <img src={BBbanner} alt="Digital marketing" />
            <div className="call-to-action-form">
              <form action="#">
                <h1>Fill in Your Details</h1>
                <div className="input-fields">
                  <input type="text" placeholder="Your Name"/>
                  <input type="text" placeholder="Phone Number"/>
                  <input type="text" placeholder="Email Address"/>
                  <input type="text" placeholder="Message"/>
                </div>
                <button>Submit</button>
              </form>
            </div>
          </div>


         {/*=========================== FAQs Section ===================*/}
         <div className="FAQs">
            <div className="FAQs-header">
              <h2>
                Frequently Asked Questions - <span>FAQs</span>
              </h2>
            </div>
            <div className="FAQs-content">
              {socialMediaFAQ.map((question, index) => {
                const isActive = activeQuestion === index;
                return (
                  <div className="FAQ-item" key={question.id}>
                    <div className="FAQ-question" onClick={() => toggleQuestion(index)}>
                      <h1>{question.question}</h1>
                      <i className={`fa fa-${isActive ? 'minus' : 'plus'}`}></i>
                    </div>
                    <AnimatePresence>
                      {isActive && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="FAQ-answer"
                        >
                          {question.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                );
              })}
            </div>
        </div>


        {/*============================ Packages and Pricing Section =================*/}
            <div className="marketing-pricing">
              <div className="marketing-header">
                <h2>
                  Our <span>Packages</span> and <span>Pricing</span>
                </h2>
              </div>
              <MarketingPricing />
            </div>


        {/*=========================== Why Choose Us =======================*/}
            <div className="choose">
              <div className="choose-head">
                <h3>The Binary Bros Team</h3>
                <h1>
                  Why Choose <span> Binary Bros </span> for SEO Services
                </h1>
              </div>

              <div className="choose-cards">
                <div className="choose-card-item">
                  <div className="choose-item-icon">
                    <i className="fas fa-user-tie"></i>{" "}
                  </div>
                  <div className="choose-item-info">
                    Seasoned <br />
                    Experts
                  </div>
                  <div className="choose-item-shadow">
                    <p>Industry veterans with proven track records.</p>
                  </div>
                </div>

                <div className="choose-card-item">
                  <div className="choose-item-icon">
                    <i className="fas fa-chart-line"></i> 
                  </div>
                  <div className="choose-item-info">
                    Guaranteed <br /> Results
                  </div>
                  <div className="choose-item-shadow">
                    <p>Drive tangible outcomes for your business.</p>
                  </div>
                </div>

                <div className="choose-card-item">
                  <div className="choose-item-icon">
                    <i className="fas fa-comments"></i>{" "}
                  </div>
                  <div className="choose-item-info">
                    Free <br />
                    Consultation
                  </div>
                  <div className="choose-item-shadow">
                    <p>Personalized advice tailored to your needs.</p>
                  </div>
                </div>

                <div className="choose-card-item">
                  <div className="choose-item-icon">
                    <i className="fas fa-wallet"></i>
                  </div>
                  <div className="choose-item-info">
                    Affordable <br />
                     Packaging
                  </div>
                  <div className="choose-item-shadow">
                    <p>High-quality services without breaking the bank.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      {/*================= Page SEction Right ==================*/}
        <div className={`seo-home-right ${isSticky ? "sticky" : ""}`}>
          <div className="page-links">
            <h1>Useful Links</h1>
            <a href="#">
              Home<i className="fas fa-chevron-right"></i>
            </a>
            <a href="#">
              FAQs<i className="fas fa-chevron-right"></i>
            </a>
            <a href="#">
              Contact<i className="fas fa-chevron-right"></i>
            </a>
            <a href="#">
              Services<i className="fas fa-chevron-right"></i>
            </a>
            <a href="#">
              Portfolio<i className="fas fa-chevron-right"></i>
            </a>
            <a href="#">
              Our Pricing<i className="fas fa-chevron-right"></i>
            </a>
          </div>

          <div className="help-contacts">
            <div className="help-text">
              <h3>Contact Us Now</h3>
              <h1>Need Help.?</h1>
            </div>
            <hr />
            <div className="seo-contact-info">
              <div className="phone">(+254) 0791880412</div>
              <div className="email">binarybroske@gmail.com</div>
              <div className="contact-paragraph">
                <p>
                  Get in touch for general inquiries, packages & custom Pricing
                </p>
              </div>
            </div>
            <div className="quote-button">
              <a href="#">
                Free Quote <i className="fa fa-link"></i>{" "}
              </a>
            </div>
          </div>

          <div className="tags">
            <h1>Tags and Keywords</h1>
            <div className="tags-content">
              {Tags.map((tag, index) => {
                return (
                  <ul key={index}>
                    <li>{tag}</li>
                  </ul>
                );
              })}
            </div>
          </div>

          <div className="seo-about-us">
            <h1>About Our Company</h1>
            <p>
              Binary Bros is a results-driven and impact-focused technology
              company, dedicated to providing cutting-edge solutions that propel
              businesses into the digital forefront. As a dynamic firm, we
              specialize in delivering innovative services tailored to enhance
              your digital presence, captivate audiences, and foster substantial
              growth.
            </p>
            <a href="#">
              <i className="fa fa-phone"></i>Contact Us
            </a>
          </div>
        </div>
      </div>

      {/*==================================== CONTACT ============================================*/}
      <section className="contact" id="contact">
        <div className="contact">
          <QuoteForm />
        </div>
      </section>
    </motion.section>
  );
};

export default SocialMediaMarketing;
