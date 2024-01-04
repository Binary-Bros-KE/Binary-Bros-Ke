import { developmentServices, marketingMaintenanceServices, designServices } from '../constants/services'
import Counter from "../components/Counter";
import WhyCards from "../components/WhyCards";

const Services = () => {
  return (
    <section className="services-page" id="services-page">

      <div className="service-page-cards" id='development'>
        <div className="services-nav-button">
          <a href="#development" className='active-button'>Web Development</a>
          <a href="#Marketing">Marketing & Maintenance</a>
          <a href="#Design">Design</a>
        </div>
        {developmentServices.map((service, index) =>  {
          return(
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
              <a href="#">Get Quote&nbsp;&nbsp;<i className="fa fa-arrow-right"></i></a>
              <a href="#">Read More&nbsp;&nbsp;<i className="fa fa-arrow-right"></i></a>
            </div>
          </div>
          )
        })}
      </div>

      <section className="counter-section">
      <div className="counter-header">
          <h3>What we do.!</h3>
          <h1>Why Work With Us</h1>
        </div>
           <WhyCards />
      </section>


      <div className="service-page-cards" id='Marketing'>
        <div className="services-nav-button">
          <a href="#development">Web Development</a>
          <a href="#Marketing" className='active-button'>Marketing & Maintenance</a>
          <a href="#Design">Design</a>
        </div>
        {marketingMaintenanceServices.map((service, index) =>  {
          return(
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
              <a href="#">Get Quote&nbsp;&nbsp;<i className="fa fa-arrow-right"></i></a>
              <a href="#">Read More&nbsp;&nbsp;<i className="fa fa-arrow-right"></i></a>
            </div>
          </div>
          )
        })}
      </div>

      <section className="counter-section">
           <Counter />
      </section>

      <div className="service-page-cards" id='Design'>
        <div className="services-nav-button">
          <a href="#development">Web Development</a>
          <a href="#Marketing">Marketing & Maintenance</a>
          <a href="#Design"  className='active-button'>Design</a>
        </div>
        {designServices.map((service, index) =>  {
          return(
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
              <a href="#">Get Quote&nbsp;&nbsp;<i className="fa fa-arrow-right"></i></a>
              <a href="#">Read More&nbsp;&nbsp;<i className="fa fa-arrow-right"></i></a>
            </div>
          </div>
          )
        })}
      </div>


    </section>
  )
}

export default Services