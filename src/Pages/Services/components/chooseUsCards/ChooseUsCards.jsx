import React from 'react'
import './ChooseUsCards.css'
import TypicalHeader from '../typicalHeader/typicalHeader'

const ChooseUsCards = () => {
  return (
    <div className="choose">
        <TypicalHeader Title={"Why Choose <span> Binary Bros </span> for SEO Services"} subTitle={"The Binary Bros Team"}/>

    <div className="choose-cards">
      <div className="choose-card-item">
        <div className="choose-item-icon">
          <i className="fas fa-user-tie"></i>{" "}
        </div>
        <div className="choose-item-info">
          Seasoned <br />
          Experts
        </div>
        <div className="choose-item-shadow">
          <p>Industry veterans with proven track records.</p>
        </div>
      </div>

      <div className="choose-card-item">
        <div className="choose-item-icon">
          <i className="fas fa-chart-line"></i> 
        </div>
        <div className="choose-item-info">
          Guaranteed <br /> Results
        </div>
        <div className="choose-item-shadow">
          <p>Drive tangible outcomes for your business.</p>
        </div>
      </div>

      <div className="choose-card-item">
        <div className="choose-item-icon">
          <i className="fas fa-comments"></i>{" "}
        </div>
        <div className="choose-item-info">
          Free <br />
          Consultation
        </div>
        <div className="choose-item-shadow">
          <p>Personalized advice tailored to your needs.</p>
        </div>
      </div>

      <div className="choose-card-item">
        <div className="choose-item-icon">
          <i className="fas fa-wallet"></i>
        </div>
        <div className="choose-item-info">
          Affordable <br />
           Packaging
        </div>
        <div className="choose-item-shadow">
          <p>High-quality services without breaking the bank.</p>
        </div>
      </div>
    </div>
</div>
  )
}

export default ChooseUsCards