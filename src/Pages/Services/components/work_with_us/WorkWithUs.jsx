import './WorkWithUs.css'


const WorkWithUs = ({subTitle, Title, workImage}) => (
    <div className="work">
      <div className="work-head">
        <h3>{subTitle}</h3>
        <h1 dangerouslySetInnerHTML={{ __html: Title }}></h1>
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
              presence and impact.
            </p>
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
              offering insights and strategies that align with your unique business objectives.
            </p>
          </div>
        </div>
        <div className="work-content">
          <div className="work-icon">
            <i className="fas fa-dollar-sign"></i>
          </div>
          <div className="work-text">
            <h1>Affordable Packages</h1>
            <p>
              Our goal is to offer top-notch services that cater to your specific needs
              without breaking the bank. With transparent and flexible pricing structures,
              we ensure you get the most value for your money.
            </p>
          </div>
        </div>
      </div>
      <div className="work-image">
        <img src={workImage} alt={Title} />
      </div>
    </div>
  );
  
  export default WorkWithUs;
  