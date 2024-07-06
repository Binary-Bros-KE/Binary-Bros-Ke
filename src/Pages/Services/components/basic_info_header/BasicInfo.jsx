import React from 'react';
import Button from '../../../../components/genericButton/genButton.jsx';
import './BasicInfo.css'

const BasicInfo = ({
  mainTitle,
  subTitle1,
  subTitle2,
  description,
  button1 = "Get Started",
  button1To = "/quote",
  button2 = "Our Portfolio",
  button2To = "/portfolio",
  basicInfoImage
}) => (
  <div className="basic_info_container">
    <div className="basic-home-info">
      <div className="head-text">
        <h1 dangerouslySetInnerHTML={{ __html: subTitle1 }}></h1>
      </div>
      <div className="first-text">
        <h1 dangerouslySetInnerHTML={{ __html: mainTitle }}></h1>
      </div>
      <div className="basic-info-paragraph">
        <h2>{subTitle2}</h2>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
      <div className="basic-info-buttons">
        <Button text={button1} to={button1To} width={"170px"} showArrow={true} />
        <Button text={button2} to={button2To} width={"170px"} showArrow={true} />
      </div>
    </div>
    <div className="basic-info-image">
      <img src={basicInfoImage} alt={subTitle2} />
    </div>
  </div>
);

export default BasicInfo;
