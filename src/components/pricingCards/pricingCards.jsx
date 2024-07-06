import React from 'react';
import './PricingCards.css';
import Button from '../../components/genericButton/genButton';
import PricingCardButton from '../pricingCardButton/PricingCardButton';

const PricingCards = ({ Title, description, pricingCards, showHeader = true }) => {
  return (
    <section className="pricing__package__section">
      <div className={showHeader ? "pricing_cards_header" : "pricing_cards_header_hidden"}>
        <h3>BB KE Packages and Pricing</h3>
        <h1>{Title}</h1>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>

      <div className="pricing_cards_wrapper">
        {pricingCards.map((card, index) => (
          <div className={index === 1 ? "pricing_card pricing_card_popular" : "pricing_card"} key={index}>
            <div className="pricing_background_image">
              <img src={card.Image} alt={card.title}/>
            </div>
            <h2 className='popular'>Popular</h2>
            <div>
              <div className="pricing_card_header">
                <h3>{card.title}</h3>
                <h1>{card.price}<span>{card.period ? `/ ${card.period}` : ""}</span></h1>
                <p>{card.description}</p>
              </div>
              <div className="pricing_cards_list">
                <h3>Consists of:</h3>
                <ul>
                  {card.items.map((item, index) => (
                    <li key={index}><i className="fa fa-check"></i> {item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <PricingCardButton 
              text={"Get Free Quote"} 
              width={"100%"} 
              showArrow={true} 
              to={"/quote"}
              service={Title}
              packageName={card.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingCards;
