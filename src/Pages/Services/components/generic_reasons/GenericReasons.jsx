import TypicalHeader from '../typicalHeader/typicalHeader';
import './GenericReasons.css'


const GenericReasons = ({ subTitle, Title, reasonsLeft, reasonsRight }) => (
    <div className="seo-reasons">
      <TypicalHeader Title={Title} subTitle={subTitle}/>
      <div className="reasons-content">
        <div className="left-div">
          {reasonsRight.map((reason, index) => (
            <div className="single-seo-reason" key={index}>
              <h1><i className="fas fa-check"></i> {reason.title}</h1>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
        <div className="right-div">
          {reasonsLeft.map((reason, index) => (
            <div className="single-seo-reason" key={index}>
              <h1><i className="fas fa-check"></i> {reason.title}</h1>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
  export default GenericReasons;
  