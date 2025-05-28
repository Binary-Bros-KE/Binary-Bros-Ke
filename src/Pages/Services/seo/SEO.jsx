import { motion } from "framer-motion";
import "./SEO.css";
import seoTypes from "/SEO/seo-types.png";
import seobanner from "/SEO/seo-banner.png";
import {
  SEOReasonsRight,
  SEOReasonsLeft,
  Stratergy,
  Tags,
} from "../../../constants/SEO.js";
import { useState, useEffect } from "react";
import GeometricShape from "../../../components/geometricShape/geometricShape.jsx";
import QuotePage from "../../../components/quote/quoteForm.jsx";
import BasicInfo from "../components/basic_info_header/BasicInfo.jsx";
import GenericReasons from "../components/generic_reasons/GenericReasons.jsx";
import StrategyComponent from "../components/StrategyComponent/StrategyComponent.jsx";
import WorkWithUs from "../components/work_with_us/WorkWithUs.jsx";
import SeoPricingSection from "../../../components/pricingCards/seo/SeoPricingSection.jsx";
import TypicalHeader from "../components/typicalHeader/typicalHeader.jsx";

const SEO = () => {
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
      <div className="seo-home">
        <div className="seo-home-banner">
          <div className="container-section">
            <div className="banner-text">
              <div className="banner-text-header">
                <h1>
                  Search Engine
                  <br className="md:hidden block" /> Optimization
                </h1>
              </div>
              <div className="banner-links">
                <a href="/home">Home</a>/<a href="/services">Services</a>/
                <a href="#">Search Engine Optimization-SEO</a>
              </div>
              <div className="geometric-shape">
                <GeometricShape />
              </div>
            </div>
          </div>
        </div>

        <div className="seo-home-left container-section">
          <BasicInfo
            subTitle1={"Binary Bros SEO Services"}
            mainTitle={
              "<span>Market Your Website</span> Through Search Engine Optimization"
            }
            subTitle2={"What is SEO.?"}
            description={
              "SEO, or Search Engine Optimization, is the driving force behind online visibility and success. In simple terms, it's the art and science of <span> enhancing your website's visibility on search engines like Google.</span> Imagine your website as a masterpiece – SEO is the curator that <span>ensures it's showcased to the right audience.</span> From optimizing content and keywords to enhancing user experience, SEO works behind the scenes to elevate your website's ranking and <span> attract organic traffic.</span> With Binary Bros, unlock the secrets of SEO and propel your online presence to new heights."
            }
            button1={"Get Started"}
            button1To={"#quote"}
            button2={"Our Portfolio"}
            button2To={"/portfolio"}
            basicInfoImage={seoTypes}
          />

          <div className="seo-reasons-container">
            <GenericReasons
              subTitle={"Importance of SEO"}
              Title={"<span>Why</span> Do You Need SEO?"}
              reasonsLeft={SEOReasonsRight}
              reasonsRight={SEOReasonsLeft}
            />
          </div>

          <div className="seo-stratergy-container">
            <StrategyComponent
              strategies={Stratergy}
              subTitle={"Our Approach"}
              Title={"Our SEO <span>Strategies</span>"}
              stratergyImage={seobanner}
            />
          </div>

          <div className="service-pricing-cards">
            <TypicalHeader
              Title={"Our <span>Packages</span> and <span>Pricing</span>"}
              subTitle={"Affordable Pricing"}
            />
            <div className="service-pricing-cards-cards">
              <SeoPricingSection showHeader={false} />
            </div>
          </div>

          <div className="work-with-BB-SEO">
            <WorkWithUs
              Title={"Why Choose <span> Binary Bros </span> for SEO Services"}
              subTitle={"The Binary Bros Team"}
              workImage={seoTypes}
            />
          </div>
        </div>

        <div className={`seo-home-right ${isSticky ? "sticky" : ""}`}>
          <div className="page-links">
            <h1>Core Services</h1>
            <a href="/websitedevelopment">
              Website Development<i className="fas fa-chevron-right"></i>
            </a>
            <a href="#">
              Mobile Applications<i className="fas fa-chevron-right"></i>
            </a>
            <a href="#">
              E-commerce Solutions<i className="fas fa-chevron-right"></i>
            </a>
            <a href="#">
              Management Systems<i className="fas fa-chevron-right"></i>
            </a>
            <a href="#">
              Social Media Management<i className="fas fa-chevron-right"></i>
            </a>
            <a href="#">
              Google/Social Media Ads<i className="fas fa-chevron-right"></i>
            </a>
            <a href="#">
              Graphic Design<i className="fas fa-chevron-right"></i>
            </a>
            <a href="#">
              Cloud Infrastructure Services
              <i className="fas fa-chevron-right"></i>
            </a>
            <a href="#">
              Data Analysis & visualization
              <i className="fas fa-chevron-right"></i>
            </a>
            <a href="/quote">
              Get Free Quote<i className="fas fa-chevron-right"></i>
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
              <a href="#quote">
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
            <h1>About Binary Bros KE</h1>
            <p>
              We are a results-driven and impact-focused technology company,
              dedicated to providing cutting-edge solutions that propel
              businesses into the digital forefront. As a dynamic firm, we
              specialize in delivering innovative services tailored to enhance
              your digital presence, captivate audiences, and foster substantial
              growth.
            </p>
            <a href="/contact">
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

export default SEO;