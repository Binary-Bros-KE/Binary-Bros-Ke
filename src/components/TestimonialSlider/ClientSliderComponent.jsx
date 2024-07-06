import React from 'react';
import quote from "../../../public/testimonial/quote.png";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const ClientSliderComponent = (props) => {
  const { name, position, image, stars, description } = props.item;

  // Function to render stars based on the 'stars' variable
  const renderStars = (stars) => {
    const totalStars = 5;
    let starsArray = [];
    
    for (let i = 0; i < totalStars; i++) {
      if (i < stars) {
        starsArray.push(<AiFillStar key={i} />);
      } else {
        starsArray.push(<AiOutlineStar key={i} />);
      }
    }
    
    return starsArray;
  };

  return (
    <div className="testimonial-card-container">
      <div className="testimonial-card-header">
        <span className='testimonial-card-header-stars'>
          {renderStars(stars)}
        </span>
        <span className='testimonial-card-header-image'>
          <img src={quote} alt="" />
        </span>
      </div>

      <div className="testimonial-card-body">
        {description}
      </div>

      <div className="testimonial-card-footer">
        <img src={image} alt="" />
        <div className="testimonial-card-footer-details">
          <h3>{name}</h3>
          <p>{position}</p>
        </div>
      </div>
    </div>
  );
}

export default ClientSliderComponent;
