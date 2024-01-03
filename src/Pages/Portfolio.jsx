import React from 'react';
import { webDesignProjects } from '../constants/portfolio';

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="project-cards">
        {webDesignProjects.map((project, index) => {
          return (
            <div className="project-card" key={index}>
              <div className="image-button">
                <div className="image">
                  <img src={project.img} alt={project.title} />
                </div>
                <div className="button">
                  <a href="#">
                  <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="project-title">
                <div className="small-text">{project.name}</div>
                <div className="large-text">{project.Title}</div>
              </div>

              <div className="project-description">
                <p>{project.description}</p>
              </div>

              <div className="project-status">
                <div className="status">{project.status}</div>
                  <div className="percentage">{project.percentage}</div>
              </div>

              <div className="previews">
                <a href="#">Live Preview</a>
                <a href="#">Git</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
