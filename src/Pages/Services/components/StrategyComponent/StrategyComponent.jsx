import './StratergyComponent.css'


const StrategyComponent = ({ subTitle, Title, strategies, stratergyImage }) => (
  <div className="stratergy-stratergy">
    <div className="stratergy-header">
      <h3>{subTitle}</h3>
      <h2 dangerouslySetInnerHTML={{ __html: Title }}></h2>
    </div>
    <div className="stratergy-content">
      <div className="stratergy-image">
        <img src={stratergyImage} alt={Title} />
      </div>
      <div className="stratergy-text">
        {strategies.map((stratergy, index) => (
          <div className="stratergy-singel" key={index}>
            <div className="stratergy-icon">
              <i className={stratergy.icon}></i>
            </div>
            <div className="stratergy-description">
              <div className="stratergy-head">
                <h1>{stratergy.title}</h1>
              </div>
              <div className="stratergy-paragraph">
                <p>{stratergy.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default StrategyComponent;
