import React from 'react'
import showcase from "../../../../../public/home/web-development.png";
import './GenricList.css'
import TypicalHeader from '../typicalHeader/typicalHeader';

const GenericList = () => {
  return (
        <div className="generic-list-wrapper">
          <TypicalHeader Title={"<span>Webiste </span>Specific To Your Brand"} subTitle={"Our Approach"}/>
              <div className="generic-list-content">
                <div className="generic-list-image">
                  <img src={showcase} alt="" />
                </div>
                <div className="generic-list-text">
                  <p>Your brand deserves a unique online presence that captivates and resonates with your audience. At Binary Bros, we specialize in crafting bespoke websites tailored to your brand's identity and goals.</p>
                  <ul>
                    <li><i className="fa fa-check"></i> E-commerce Stores</li>
                    <li><i className="fa fa-check"></i> Travel & Professional Services</li>
                    <li><i className="fa fa-check"></i> Restaraunts and Hotels</li>
                    <li><i className="fa fa-check"></i> HeathCare Serices</li>
                    <li><i className="fa fa-check"></i> Personal Portfolio Sites</li>
                    <li><i className="fa fa-check"></i> Education and E-learning Platforms</li>
                    <li><i className="fa fa-check"></i> Technology and Innovation Hubs</li>
                  </ul>
                  <p>From sleek e-commerce stores to dynamic platforms for travel and professional services, inviting restaurants and hotels, to informative healthcare services websites – we ensure your online footprint aligns seamlessly with your brand vision.</p>

                </div>
              </div>
       </div>
  )
}

export default GenericList
