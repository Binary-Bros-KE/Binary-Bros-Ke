import { motion } from "framer-motion";
import '../custom-css/portfolio.css';
import { webDesignProjects } from '../constants/portfolio';

const Portfolio = () => {
  return (
    <motion.section 
    className="portfolio"
    id="portfolio"
    intial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
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
    </motion.section>
  );
};

export default Portfolio;
