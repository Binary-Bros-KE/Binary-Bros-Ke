import React from 'react'
import Button from '../../components/genericButton/genButton'
import { webDesignProjects } from '../../constants/portfolio'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <div className="portfolio-header"></div>
      <div className="portfolio-cards-wrapper">
        {webDesignProjects.map((item, index)=>(
          <div className="portfolio-card" key={index}>
            <div className="portfolio-card-image">
              <img src={item.img} alt={item.Title} />
            </div>
            <div className="portfolio-card-title">
              <h3>{item.name}</h3>
              <h1>{item.Title}</h1>
            </div>
            <div className="portfolio-card-description">
              {item.description}
            </div>
            <div className="portfolio-card-buttons">
              <Button text={"Live Preview"} width={"150px"} showArrow={true} />
              <Button text={"Get Yours"} width={"150px"} showArrow={true} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
