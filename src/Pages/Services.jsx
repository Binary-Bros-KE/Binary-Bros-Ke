import {
  developmentServices,
  marketingMaintenanceServices,
  designServices,
} from "../constants/services";
import "../custom-css/services.css";
import Counter from "../components/Counter";
import WhyCards from "../components/WhyCards";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.section
      className="services-page"
      id="services-page"
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="service-page-cards" id="development">
        <div className="services-nav-button">
          <a href="#development" className="active-button">
            Web Development
          </a>
          <a href="#Marketing">Marketing</a>
          <a href="#Design">Design & Dev</a>
        </div>
        {developmentServices.map((service, index) => {
          return (
            <div className="service-page-card" key={index}>
              <div className="service-page-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-title">
                <h1>{service.title}</h1>
              </div>
              <div className="service-description">
                <p>{service.description}</p>
              </div>
              <div className="service-page-buttons">
                <a href="#">
                  Get Quote&nbsp;&nbsp;<i className="fa fa-arrow-right"></i>
                </a>
                <a href="#">
                  Read More&nbsp;&nbsp;<i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <section className="counter-section">
        <div className="counter-header">
          <h3>What we do.!</h3>
          <h1>Why Work With Us</h1>
        </div>
        <WhyCards />
      </section>

      <div className="service-page-cards" id="Marketing">
        <div className="services-nav-button">
          <a href="#development">Web Development</a>
          <a href="#Marketing" className="active-button">
            Marketing
          </a>
          <a href="#Design">Design & Dev</a>
        </div>
        {marketingMaintenanceServices.map((service, index) => {
          return (
            <div className="service-page-card" key={index}>
              <div className="service-page-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-title">
                <h1>{service.title}</h1>
              </div>
              <div className="service-description">
                <p>{service.description}</p>
              </div>
              <div className="service-page-buttons">
                <a href="#">
                  Get Quote&nbsp;&nbsp;<i className="fa fa-arrow-right"></i>
                </a>
                <a href="#">
                  Read More&nbsp;&nbsp;<i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <section className="counter-section">
        <Counter />
      </section>

      <div className="service-page-cards" id="Design">
        <div className="services-nav-button">
          <a href="#development">Web Development</a>
          <a href="#Marketing">Marketing</a>
          <a href="#Design" className="active-button">
            Design & Dev
          </a>
        </div>
        {designServices.map((service, index) => {
          return (
            <div className="service-page-card" key={index}>
              <div className="service-page-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-title">
                <h1>{service.title}</h1>
              </div>
              <div className="service-description">
                <p>{service.description}</p>
              </div>
              <div className="service-page-buttons">
                <a href="#">
                  Get Quote&nbsp;&nbsp;<i className="fa fa-arrow-right"></i>
                </a>
                <a href="#">
                  Read More&nbsp;&nbsp;<i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Services;
