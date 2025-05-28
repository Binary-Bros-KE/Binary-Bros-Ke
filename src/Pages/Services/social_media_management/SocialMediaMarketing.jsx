import { motion, AnimatePresence } from "framer-motion";
import "./SocialMediaMarketing.css";

import socials3D from "/marketing/socials-3d.png";
import { SocialMediaMarketingLeft, SocialMediaMarketingRight, Tags, socialMediaFAQ} from "../../../constants/SocialMediaMarketing.js";
import { useState, useEffect } from "react";
import WebDevelopmentPricingSection from "../../../components/pricingCards/webistedevelopment/WebDevelopmentPricingSection.jsx";
import QuotePage from "../../../components/quote/quoteForm.jsx";
import BasicInfo from "../components/basic_info_header/BasicInfo.jsx";
import SocialMediaUsage from "../components/piChartComponent/socialMediaUsage.jsx";
import GenericReasons from "../components/generic_reasons/GenericReasons.jsx";
import SocialMediaPlatforms from "../components/socialPatforms/SocialPatforms.jsx";
import SimpleFAQ from "../components/simpleFAQ/SimpleFAQ.jsx";
import TypicalHeader from "../components/typicalHeader/typicalHeader.jsx";
import SocialMediaMarketingSection from "../../../components/pricingCards/socialmediamarketing/SocialMediaMarketingSection.jsx";
import ChooseUsCards from "../components/chooseUsCards/ChooseUsCards.jsx";

const SocialMediaMarketing = () => {


  
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
      <div className="seo-home container-section">
        <div className="social-home-banner">
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
        {/*================ Basic Info introduction ===============*/}
          <BasicInfo 
            subTitle1={"Binary Bros Marketing Services"}
          mainTitle={"<span>Expose Your Brand</span> To The World Through Social Media Marketing"}
          subTitle2={"What is Social Media Marketing?"}
          description={"Social media marketing involves using platforms like Facebook, Instagram, and LinkedIn to promote your business and connect with your audience. It works by creating and sharing content tailored to your target demographic, engaging with followers, and running targeted advertising campaigns. This approach can help you <span>increase brand awareness</span>, <span>drive website traffic</span>, and <span>boost sales</span>. Effective social media marketing helps establish your brand’s online presence, fosters customer loyalty, and provides valuable insights into your audience’s preferences and behaviors."}
          button1={"Request Quote"}
          button1To={"#quote"}
          button2={"Our Portfolio"}
          button2To={"/portfolio"}
            basicInfoImage={socials3D}
          />

          {/*================== Market Insights Section ==============*/}
          <div className="statistics-section">
              <SocialMediaUsage />
          </div>

          {/*================== How we can help Section ================*/}
          <GenericReasons 
            subTitle={"Our Marketing Stratergies"}
            Title={"<span>Here's</span> How We Can Help!"}
            reasonsLeft={SocialMediaMarketingRight}
            reasonsRight={SocialMediaMarketingLeft}
          />

          {/*================ Social Media Platforms Section ===================*/}
          <SocialMediaPlatforms />

         {/*=========================== FAQs Section ===================*/}
          <SimpleFAQ />

        {/*============================ Packages and Pricing Section =================*/}
            <div className="marketing-pricing">
              <TypicalHeader Title={"Our <span>Packages</span> and <span>Pricing</span>"} subTitle={"Affordable Pricing"}/>
              <div className="marketing-cards">
                  <SocialMediaMarketingSection showHeader={false}/>
              </div>
            </div>


            <ChooseUsCards />
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
      <section className="contact" id="quote">
        <div className="contact">
          <QuotePage />
        </div>
      </section>
    </motion.section>
  );
};

export default SocialMediaMarketing;
