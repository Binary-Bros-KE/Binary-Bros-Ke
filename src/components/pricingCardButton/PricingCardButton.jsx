import React from 'react';
import './PricingCardButton.css';

const PricingCardButton = ({ to, text, showArrow, width, service, packageName, price }) => {
  let style = {
    width: width
  };

  const queryString = `?service=${encodeURIComponent(service)}&package=${encodeURIComponent(packageName)}&price=${encodeURIComponent(price)}`;

  return (
    <div className="button-container" style={style}>
      <a href={`${to}${queryString}`} className="button">
        <span>{text}</span>
        {showArrow && <i className="fas fa-long-arrow-alt-right"></i>}
      </a>
    </div>
  );
};

export default PricingCardButton;
