import { developmentServices, marketingMaintenanceServices, designServices,} from "../../constants/services";
import "./services.css";
import WhyCards from "../../components/chooseUsCards/WhyCards";
import { motion } from "framer-motion";
import Contact from "../../components/mainContactForm/ContactForm"
import Button from "../../components/genericButton/genButton";
import QuotePage from "../../components/quote/quoteForm";

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
              <div>
              <div className="service-title">
                <h1>{service.title}</h1>
              </div>
              <div className="service-description">
                <p>{service.description}</p>
              </div>
              </div>
              <div className="service-page-buttons">
                <Button text={"Get Quote"} width={'150px'} showArrow={true}/>
                <Button text={"Read More"} width={'150px'} showArrow={true}/>
              </div>
            </div>
          );
        })}
      </div>

      <div className="service-page-cards" id="Marketing">
        {marketingMaintenanceServices.map((service, index) => {
          return (
            <div className="service-page-card" key={index}>
              <div className="service-page-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div>
              <div className="service-title">
                <h1>{service.title}</h1>
              </div>
              <div className="service-description">
                <p>{service.description}</p>
              </div>
              </div>
              <div className="service-page-buttons">
              <div className="service-page-buttons">
                <Button text={"Get Quote"} width={'150px'} showArrow={true}/>
                <Button text={"Read More"} width={'150px'} showArrow={true}/>
              </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="service-page-cards" id="Design">
        {designServices.map((service, index) => {
          return (
            <div className="service-page-card" key={index}>
              <div className="service-page-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div>
              <div className="service-title">
                <h1>{service.title}</h1>
              </div>
              <div className="service-description">
                <p>{service.description}</p>
              </div>
              </div>
              <div className="service-page-buttons">
              <div className="service-page-buttons">
                <Button text={"Get Quote"} width={'150px'} showArrow={true}/>
                <Button text={"Read More"} width={'150px'} showArrow={true}/>
              </div>
              </div>
            </div>
          );
        })}

        
      </div>

      <section className="counter-section">
        <WhyCards />
      </section>

      <section className="contact-section">
        <QuotePage />
      </section>
    </motion.section>
  );
};

export default Services;