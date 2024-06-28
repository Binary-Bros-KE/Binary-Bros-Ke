//Import CSS
import "./homePage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//import images
import showcase from "../../../public/home/hero-banner.png";
import graph from '../../../public/home/hero-span-graph.svg';
import discount from "../../../public/home/discount.svg";
import client1 from "../../../public/testimonial/testimonial-1.jpg";
import client2 from "../../../public/testimonial/testimonial-3.jpg";
import client3 from "../../../public/testimonial/testimonial-4.jpg";
import client4 from "../../../public/testimonial/testimonial-5.jpg";
import about from "../../../public/home/banner.png";
import card from "../../../public/home/triangle.png";
import mobile from "../../../public/mobile/banner-mob-app.png";
import wordpress from "../../../public/wordpress/wordpress.png";

//import Components
import QuoteForm from "../../components/mainContactForm/ContactForm";
import { coreServices } from "../../constants/services";
import Counter from "../../components/counter/Counter";
import Clients from "../../components/clientsCarousel/Clients";
import WhyCards from "../../components/chooseUsCards/WhyCards"; 
import RecentBlogs from "../../components/blog/RecentBlogs";
import Button from "../../components/genericButton/genButton";
import GeometricShape from "../../components/geometricShape/geometricShape";
import TestimonialSlider from "../../components/TestimonialSlider/TestimonialSlider"

//import 3rd party libraries
import { motion } from "framer-motion";
import TypingAnimation from "../../components/typingAnimation/TypingAnimation";


const Home = () => {
  return (
    <motion.div
      className="home-container"
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/*========================== HERO CONTAINER ==================================*/}
      <section className="hero sm:container-section" id="hero">
        <div className="showcase">
          <div className="home-info">
            <div className="discount">
              <p>
                <img src={discount} alt="discount" />
                <span>&nbsp;20% Discount</span>&nbsp;on your first Project.
              </p>
            </div>
            <div className="main-text">
            <h1>
              #1 Software
              <br className="hidden lg:block" /> Developers and 
              <br className="hidden lg:block" />
               <div className="hidden lg:block" width='2px'></div> Digital Marketers
              </h1>

              <p className="tagline">
                Crafting Innovative Solutions to Help Brands, Businesses, and
                Organizations Enhance Their Online Presence in This Rapidly
                Growing Digital Landscape.
              </p>
              <p className="typing">
                Solutions in:{" "}
                <span>
                  <TypingAnimation />
                </span>
              </p>
            </div>



            <div className="hero-clients">
              <h6>Trusted by Our Clients</h6>
              <div className="hero-client-wrapper">
                  <div className="client-item">
                    <img src={client1} alt="clients" />
                  </div>
                  <div className="client-item">
                    <img src={client2} alt="clients" />
                  </div>
                  <div className="client-item">
                    <img src={client3} alt="clients" />
                  </div>
                  <div className="client-item">
                    <img src={client4} alt="clients" />
                  </div>
                  <div className="client-item">
                    10K+ 
                  </div>
              </div>
            </div>


          </div>
          <div className="home-image">


            <div className="hero-image-span">
              <div className="hero-image-span-title">
                <h3>Statistics</h3>
                <h1>Businesses Reached</h1>
              </div>
              <div className="hero-image-span-metrices">
                <p>165+</p>
                <i className="fas fa-poll"></i>
                <h6>79.2%</h6>
              </div>
              <div className="hero-image-span-image">
                <img src={graph} alt="statisctics" />
              </div>
            </div>


            <img src={showcase} alt="web-development" />

            <div className="hero-image-span-2">
              <div className="hero-image-title-2">
                <h1>$7,625</h1>
                <h2>Total Revenue</h2>
              </div>
              <div className="hero-image-span-info-2">
                <h3>+12.5%</h3>
                <i className="fas fa-chart-line"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*========================================= ABOUT US ===================================*/}
      <section className="about" id="about">
          <div className="about__geometric__shape">
             <GeometricShape />
          </div>
        <div className="about-us">
          <div className="about-image">
            <img src={about} alt="about-image" />
          </div>
          <div className="about-boxes">
            <div className="box">
              <i className="fas fa-paint-brush"></i>Design
            </div>
            <div className="box">
              <i className="fa fa-code"></i>Development
            </div>
            <div className="box">
              <i className="fas fa-rocket"></i>Deployment
            </div>
            <div className="box">
              <i className="fas fa-chart-line"></i>Optimization
            </div>
          </div>
          <div className="about-info">
            <h3>About us</h3>
            <h1>
              Best Business
              <br /> Software Solutions
            </h1>
            <p>
              {" "}
              Binary Bros is a results-driven and impact-focused technology
              company, dedicated to providing cutting-edge solutions that propel
              businesses into the digital forefront. As a dynamic firm, we
              specialize in delivering innovative services tailored to enhance
              your digital presence, captivate audiences, and foster substantial
              growth. Our team of skilled professionals harnesses the latest
              technologies and strategic methodologies to ensure that startups,
              established enterprises, and industry leaders achieve unparalleled
              success in meeting their technological aspirations.
            </p>
            <div className="about-button">
              <Button text={'Read More'} to={'/'} showArrow={true} width={'150px'}/>
              <Button text={'Get a Professional Website Today'} to={'/'} showArrow={true} width={'330px'}/>
            </div>
          </div>
        </div>
      </section>

      {/*======================= WHY CHOOSE US ====================================*/}
      <section className="why" id="why">
        <WhyCards />
      </section>

      {/*=================================================== CORE SERVICES ==============================*/}
      <section className="services" id="services">
        <div className="service-header">
          <h3>What we do.</h3>
          <h1>Core Services</h1>
        </div>
        <div className="service-cards">
          {coreServices.map((service, index) => {
            return (
              <div className="service-card" key={index}>
                <div className="service-logo">
                  <i className={service.icon}></i>
                </div>
                <div className="service-ifo">
                  <h1>{service.name}</h1>
                  <p>
                    {service.description}
                  </p>
                </div>
                <div className="service-buttons">
                  <i className="fa fa-plus"></i>
                  <a href="#">Read More</a>
                </div>
                <div className="image">
                  <img src={card} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/*==================================================== MOBILE AND  WORDPRESS ============================*/}
      <section className="mobile-wordpress" id="mobile-wordpress">
        <div className="mobile">
          <div className="mobile-image">
            <img src={mobile} alt="Mobile Application" />
          </div>
          <div className="mobile-info">
            <h1>Let us build your Mobile App.!</h1>
            <div className="quality">
              <h2>
                <i className="fas fa-check"></i> Cross-Platform Expertise
              </h2>
              <p>
                Elevate your reach with Binary Bros' cross-platform mobile
                applications. We ensure seamless performance across various
                devices, expanding your audience reach.
              </p>
            </div>
            <div className="quality">
              <h2>
                <i className="fas fa-check"></i> Robust, Responsive, Modern
                Design
              </h2>
              <p>
                Immerse users in robust, responsive, and modern mobile solutions
                that enhance engagement. Go mobile with Binary Bros and
                transform your business.
              </p>
            </div>
            <div className="mobile-buttons">
              <Button text={'Get Service'} to={'/'} showArrow={true} width={'150px'}/>
              <Button text={'Learn More'} to={'/'} showArrow={true} width={'150px'}/>
            </div>
          </div>
        </div>

        <div className="wordpress">
          <div className="wordpress-info">
            <h1>We offer WordPress development.</h1>
            <div className="quality">
              <h2>
                <i className="fas fa-check"></i> Powerful Content Management
              </h2>
              <p>
                Experience the strength of WordPress with Binary Bros. Harness
                powerful content management capabilities, providing you with
                unparalleled control over your digital presence.
              </p>
            </div>
            <div className="quality">
              <h2>
                <i className="fas fa-check"></i> Customization and Flexibility
              </h2>
              <p>
                Customize and shape your online presence with WordPress. Benefit
                from its flexibility and adaptability, allowing you to tailor
                your website to meet your unique business needs.
              </p>
            </div>
            <div className="wordpress-buttons">
              <Button text={'Get Service'} to={'/'} showArrow={true} width={'150px'}/>
              <Button text={'Learn More'} to={'/'} showArrow={true} width={'150px'}/>
            </div>
          </div>
          <div className="wordpress-image">
            <img src={wordpress} alt="WordPress" />
          </div>
        </div>
      </section>

      {/*====================================== COUNTER SECTION =====================================*/}
      <section className="counter" id="counter">
        <Counter />
      </section>

      {/*================================ TESTIMONIALS  =======================================*/}
      <section className="testimonials">
        <TestimonialSlider />
      </section>

       {/*==================================== CONTACT ======================================*/}
       <section className="contact" id="contact">
        <div className="contact">
          <QuoteForm />
        </div>
      </section>

      {/*==================================== Clients ======================================*/}
      <section className="clients">
        <Clients/>
      </section>


     <section className="recentBlogs">
      <RecentBlogs/>
     </section>     
      
    </motion.div>
  );
};

export default Home;
