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
            <div className="project-singel" key={index}>

              <div className="project-image">
                <img src={project.img} alt={project.Title} />
              </div>

              <div className="project-info">
                    <h2>{project.name}</h2>
                    <h1>{project.Title}</h1>
                    <p>{project.description}</p>
                    <div className="status-info">
                      <p>{project.status}</p>
                      <p>{project.percentage}</p>
                    </div>
                    <div className="project-info-button">
                      <a href="#"><i className="fa fa-globe"></i> Live Preview</a>
                      <a href="#"><i className="fa fa-users"></i> Get Yours</a>
                    </div>
              </div>

            <div className="project-socials">
              <ul>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
              </ul>
            </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Portfolio;
