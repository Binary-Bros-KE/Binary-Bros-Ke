import { motion } from "framer-motion";
import "./webDev.css";
import prof1 from "/web-development/prof1.png";
import {
  webReasonsLeft,
  webReasonsRight,
  Tags,
} from "../../../constants/webDev.js";
import { useState, useEffect } from "react";
import WebDevelopmentPricingSection from "../../../components/pricingCards/webistedevelopment/WebDevelopmentPricingSection.jsx";
import BasicInfo from "../components/basic_info_header/BasicInfo.jsx";
import GenericReasons from "../components/generic_reasons/GenericReasons.jsx";
import GenericList from "../components/genList/GenericList.jsx";
import WorkWithUs from "../components/work_with_us/WorkWithUs.jsx";
import TypicalHeader from "../components/typicalHeader/typicalHeader.jsx";
import QuotePage from "../../../components/quote/quoteForm.jsx";

const WebDev = () => {
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
      className="web_dev"
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="web_dev_home">
        <div className="web_dev_banner">
          <div className="container-section">
            <div className="banner-text">
              <div className="banner-text-header">
                <h1>
                  Website
                  <br className="md:hidden block" /> Development
                </h1>
              </div>
              <div className="banner-links">
                <a href="#">Home</a>/<a href="#">Services</a>/
                <a href="#">Website Development</a>
              </div>
            </div>
          </div>
        </div>

        <div className="seo-home-left container-section">
          <BasicInfo
            subTitle1={"Binary Bros Web Design Services"}
            mainTitle={
              "<span>Get a Professional Website</span> With Our Web Design Services"
            }
            subTitle2={"Why You Need A Website"}
            description={
              "In today's digital age, a website is more than an online presence; it's a <span> powerful tool for establishing credibility, reaching a broader audience, and staying competitive.</span> A well-designed website provides a centralized platform for showcasing your products, services, or ideas. It enhances your brand's visibility, builds trust with potential customers, and opens up new opportunities. Whether you're a business, professional, or creative individual, having a website is crucial for staying relevant and accessible in the modern online landscape."
            }
            button1={"Get A Website"}
            button1To={"#quote"}
            button2={"Our Portfolio"}
            button2To={"/portfolio"}
            basicInfoImage={prof1}
          />
          <div className="seo-reasons">
            <GenericReasons
              subTitle={"What you get."}
              Title={"<span>Benefits </span>of a Professional Webiste."}
              reasonsLeft={webReasonsLeft}
              reasonsRight={webReasonsRight}
            />

            <GenericList />

            <div className="service-pricing-cards">
              <TypicalHeader
                Title={"Our <span>Packages</span> and <span>Pricing</span>"}
                subTitle={"Affordable Pricing"}
              />
              <div className="service-pricing-cards-cards">
                <WebDevelopmentPricingSection showHeader={false} />
              </div>
            </div>

            <div className="work-with-BB-SEO">
              <WorkWithUs
                Title={"Why Choose <span> Binary Bros </span> for SEO Services"}
                subTitle={"The Binary Bros Team"}
                workImage={prof1}
              />
            </div>
          </div>
        </div>

        <div className={`seo-home-right ${isSticky ? "sticky" : ""}`}>
          <div className="page-links">
            <h1>Core Services</h1>
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
              Free Quote<i className="fas fa-chevron-right"></i>
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
      <section className="contact container-section" id="quote">
        <div className="contact">
          <QuotePage />
        </div>
      </section>
    </motion.section>
  );
};

export default WebDev;
