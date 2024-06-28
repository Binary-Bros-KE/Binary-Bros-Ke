import "./marketingPricing.css";
import React from 'react'

const MarketingPricing = () => {
  return (
    <section className="marketing-pricing-component">

        <div className="marketing-packages-wrapper">

            <div className="marketing-package-item basic">
                <div className="package-head-info">
                    <h2>Basic Package</h2>
                    <h1>Kes 5,000 <span>/ Campaign</span></h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis error magnam saepe vero facilis eius nihil repellendus beata</p>
                </div>
                <div className="package-main-info">
                    <h1>FEATURES</h1>
                    <ul>
                        <li><i className="fa fa-check"></i> Facebook Campaign</li>
                        <li><i className="fa fa-check"></i> Instagram Campaign</li>
                        <li><i className="fa fa-check"></i> Lorem Lorem Lorem</li>
                        <li><i className="fa fa-check"></i> Lorem Lorem Lorem</li>
                        <li><i className="fa fa-check"></i> Lorem Lorem Lorem</li>
                        <li><i className="fa fa-check"></i> Lorem Lorem Lorem</li>
                        <li><i className="fa fa-check"></i> Lorem Lorem Lorem</li>
                    </ul>
                </div>
                <div className="package-footer">
                    <a href="#">Get Started</a>
                    <a href="#">Chat With Us</a>
                </div>
            </div>

            <div className="marketing-package-item standard">
                <div className="package-head-info">
                    <h2>Standard Package</h2>
                    <h1>Kes 9,500 <span>/ Campaign</span></h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis error magnam saepe vero facilis eius nihil repellendus beata</p>
                </div>
                <div className="package-main-info">
                    <h1>FEATURES</h1>
                    <ul>
                        <li><i className="fa fa-check"></i>Facebook Campaign</li>
                        <li><i className="fa fa-check"></i>Instagram Campaign</li>
                        <li><i className="fa fa-check"></i>X (Twitter) Campaign</li>
                        <li><i className="fa fa-check"></i>Lorem Lorem Lorem</li>
                        <li><i className="fa fa-check"></i>Lorem Lorem Lorem</li>
                        <li><i className="fa fa-check"></i>Lorem Lorem Lorem</li>
                        <li><i className="fa fa-check"></i>Lorem Lorem Lorem</li>
                    </ul>
                </div>
                <div className="package-footer">
                    <a href="#">Get Started</a>
                    <a href="#">Chat With Us</a>
                </div>
            </div>

            <div className="marketing-package-item premium">
                <div className="package-head-info">
                    <h2>Premium Package</h2>
                    <h1>Kes 17,800 <span>/ Campaign</span></h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis error magnam saepe vero facilis eius nihil repellendus beata</p>
                </div>
                <div className="package-main-info">
                    <h1>FEATURES</h1>
                    <ul>
                        <li><i className="fa fa-check"></i>Facebook Campaign</li>
                        <li><i className="fa fa-check"></i>Instagram Campaign</li>
                        <li><i className="fa fa-check"></i>X (Twitter) Campaign</li>
                        <li><i className="fa fa-check"></i>Linkedin Campaign</li>
                        <li><i className="fa fa-check"></i>Lorem Lorem Lorem</li>
                        <li><i className="fa fa-check"></i>Lorem Lorem Lorem</li>
                        <li><i className="fa fa-check"></i>Lorem Lorem Lorem</li>
                    </ul>
                </div>
                <div className="package-footer">
                    <a href="#">Get Started</a>
                    <a href="#">Chat With Us</a>
                </div>
            </div>

        </div>

    </section>
  )
}

export default MarketingPricing
