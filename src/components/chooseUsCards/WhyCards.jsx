import "./whyCards.css";
import React from 'react'

const WhyCards = () => {
  return (
    <div className="card-section-wrapper">
            <div className="why-cards-header">
          <h3>Our Approach</h3>
          <h1>Why Work With Us</h1>
      </div>
    <div className="cards">
    <div className="card">
      <div className="card-title">
        <i className="fa fa-users"></i> Client-Centric Approach
      </div>
      <p>
        {" "}
        From the initial consultation to the final delivery, we work
        closely with our clients, understanding their goals, addressing
        concerns, and adapting our strategies to align with their vision.{" "}
      </p>
    </div>
    <div className="card">
      <div className="card-title">
        <i className="fa fa-lightbulb"></i> Guaranteed Results
      </div>
      <p>
      Our commitment to a results-driven approach ensures your business
       experiences tangible success, with proven outcomes that elevate
        your digital presence and impact.
      </p>
    </div>
    <div className="card">
      <div className="card-title">
        <i className="fa fa-cogs"></i> Experienced Consultants
      </div>
      <p>
      Our skilled professionals navigate the dynamic digital landscape,
       offering insights and strategies that align with your unique business objectives.
      </p>
    </div>
    <div className="card">
      <div className="card-title">
        <i className="fa fa-clock"></i> 24/7 Support
      </div>
      <p>
        Our dedicated support team is always at your service, ready to
        address inquiries, provide assistance, and ensure the smooth
        operation of your digital assets.{" "}
      </p>
    </div>
  </div>
  </div>
  )
}

export default WhyCards
