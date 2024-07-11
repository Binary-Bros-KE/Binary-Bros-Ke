import { developmentServices, SEOservices, Marketingservices, Programming,} from "../../constants/services";
import "./services.css";
import WhyCards from "../../components/chooseUsCards/WhyCards";
import { motion } from "framer-motion";
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
          <a href="#development" className="active-button">Development</a>
          <a href="#seo">SEO</a>
          <a href="#Design">Marketing</a>
          <a href="#Programming">IT Solutions</a>
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


      <div className="service-page-cards" id="seo">
        
      <div className="services-nav-button">
          <a href="#development">Development</a>
          <a href="#seo"  className="active-button">SEO</a>
          <a href="#Design">Marketing</a>
          <a href="#Programming">IT Solutions</a>
        </div>
        {SEOservices.map((service, index) => {
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
        
      <div className="services-nav-button">
          <a href="#development">Development</a>
          <a href="#seo">SEO</a>
          <a href="#Design"   className="active-button">Marketing</a>
          <a href="#Programming">IT Solutions</a>
        </div>
        {Marketingservices.map((service, index) => {
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



      <div className="service-page-cards" id="Programming">
      <div className="services-nav-button">
          <a href="#development">Development</a>
          <a href="#seo">SEO</a>
          <a href="#Design">Marketing</a>
          <a href="#Programming" className="active-button">IT Solutions</a>
        </div>
        {Programming.map((service, index) => {
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
