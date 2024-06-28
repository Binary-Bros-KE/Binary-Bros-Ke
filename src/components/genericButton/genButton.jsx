import React from 'react';
import { Link } from 'react-router-dom';
import './genButton.css';

const Button = ({ to, text, showArrow, width }) => {

  let style = {
    width: width
  }
  return (
    <div className="button-container" style={style}>
      <Link to={to} className="button">
        <span>{text}</span>
        {showArrow && <i className="fas fa-long-arrow-alt-right"></i>}
      </Link>
    </div>
  );
};

export default Button;
