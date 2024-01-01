import showcase from '../Assets/home/web-development.png';
import discount from '../Assets/home/discount.png';
import about from '../Assets/about/banner.png';
import card from '../Assets/services/triangle.png';
import mobile from '../Assets/mobile&wordpress/banner-mob-app.png';
import wordpress from '../Assets/mobile&wordpress/wordpress.png';
import { TypeAnimation } from 'react-type-animation';


const Home = () => {



  return (
    <div className="home-container">

  <section className="hero" id='hero'>
    <div className="showcase">
      <div className="home-info">
          <div className="discount">
            <p> 
              <img src={discount} alt="discount" />
              <span>&nbsp;20% Discount</span>&nbsp;on your first Project. 
            </p>
          </div>
          <div className="main-text">
            <h1>Professional<br/> Software<br/> Developers</h1>
            <p className='tagline'>Crafting Innovative Solutions to Help Brands, Businesses,
              and Organizations Enhance Their Online Presence in
              This Rapidly Growing Digital Landscape.</p>
            <p className='typing'>
              Solutions in: <span>
              <TypeAnimation
                        sequence={[
                          // Same substring at the start will only be typed out once, initially
                          'Web Design',
                          1000, // wait 1s before replacing "Mice" with "Hamsters"
                          'Web Development',
                          1000,
                          'SEO',
                          1000,
                          'Mobile Apps',
                          1000,
                          'Digital Marketing',
                          1000,
                          'WordPress',
                          1000,
                          'UI/UX Design',
                          1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                      />
              </span>
            </p>
          </div>
          <div className="buttons">
            <a href="#">Hire Us</a>
            <a href="#">About Us</a>
          </div>
      </div>
          <div className="home-image">
            <img src={showcase} alt="web-development" />
          </div>
          <div className="notification"><i className="fa fa-comments"></i> Notification</div>
    </div>
  </section>

  
  <section className="about" id='about'>
    <div className="about-us">
      <div className="about-image">
        <img src={about} alt="about-image" />
      </div>
      <div className="about-boxes">
        <div className="box"><i className="fas fa-paint-brush"></i>Design</div>
        <div className="box"><i className="fa fa-code"></i>Development</div>
        <div className="box"><i className="fas fa-rocket"></i>Deployment</div>
        <div className="box"><i className="fas fa-chart-line"></i>Optimization</div>
      </div>
      <div className="about-info">
        <h3>About us</h3>
        <h1>Best Business<br/> Software Solutions</h1>
        <p> We are seasoned software developers delivering
           optimal business solutions and SEO expertise.
            Specializing in propelling brands to new heights,
             we craft innovative solutions for a robust online presence.
              Choose us for unparalleled professionalism, driving growth
               in the dynamic digital landscape.
        </p>
        <div className="about-button">
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  </section>

  <section className="why" id='why'>
      <div className="cards">
        <div className="card">
          <div className="card-title"><i className="fa fa-users"></i> Client-Centric Approach</div>
          <p> From the initial consultation to the final delivery, we work closely with our clients, understanding their goals, addressing concerns, and adapting our strategies to align with their vision. </p>
        </div>
        <div className="card">
          <div className="card-title"><i className="fa fa-lightbulb"></i> Innovative Problem-Solving</div>
          <p>We thrive on challenges, approaching each project with a creative mindset to find unique solutions that push the boundaries of what's possible.</p>
        </div>
        <div className="card">
          <div className="card-title"><i className="fa fa-cogs"></i> Diverse Technologies</div>
          <p>From front-end development using the latest frameworks to robust back-end solutions, our team is well-versed in the tools and languages that drive innovation in the digital realm.</p>
        </div>
        <div className="card">
          <div className="card-title"><i className="fa fa-clock"></i> 24/7 Support</div>
          <p>Our dedicated support team is always at your service, ready to address inquiries, provide assistance, and ensure the smooth operation of your digital assets. </p>
        </div>
      </div>
  </section>



      <section className="services" id='services'>
        <div className="service-header">
          <h3>Our Services</h3>
          <h1>Core Services</h1>
        </div>
        <div className="service-cards">
          <div className="service-card">
            <div className="service-logo">
              <i className='fa fa-search'></i>
            </div>
            <div className="service-ifo">
              <h1>S.E.O</h1>
              <p>Enhance your online visibility with our SEO expertise. Our strategic approach ensures your brand stands out, driving increased traffic and engagement. Unlock the full potential of your digital presence with Binary Bros.</p>
            </div>
            <div className="service-buttons">
              <i className="fa fa-plus"></i>
              <a href="#">Read More</a>
            </div>
            <div className="image">
              <img src={card}/>
            </div>
          </div>
          <div className="service-card active-card">
            <div className="service-logo">
              <i className='fa fa-laptop-code'></i>
            </div>
            <div className="service-ifo">
              <h1>Web Design / Dev</h1>
              <p>Immerse your brand in a captivating online experience with our Web Design and Development services. We transform ideas into visually stunning and functionally seamless websites, ensuring a strong online foundation for your business success.</p>
            </div>
            <div className="service-buttons">
              <i className="fa fa-plus"></i>
              <a href="#">Read More</a>
            </div>
            <div className="image">
              <img src={card}/>
            </div>
          </div>
          <div className="service-card">
            <div className="service-logo">
              <i className='fa fa-bullhorn'></i>
            </div>
            <div className="service-ifo">
              <h1>Digital Marketing</h1>
              <p>Elevate your brand's reach and impact through our Digital Marketing solutions. From targeted campaigns to comprehensive strategies, we empower your business to thrive in the digital landscape. Maximize your online potential with Binary Bros at the forefront of digital marketing innovation.</p>
            </div>
            <div className="service-buttons">
              <i className="fa fa-plus"></i>
              <a href="#">Read More</a>
            </div>
            <div className="image">
              <img src={card}/>
            </div>
          </div>
        </div>
      </section> 


      <section className="mobile-wordpress" id='mobile-wordpress'>

        <div className="mobile">
          <div className="mobile-image">
            <img src={mobile} alt="" />
          </div>
          <div className="mobile-info">
            <h1>Mobile Application</h1>
            <div className="quality">
              <h2><i className="fa fa-check"></i> Cross Platform Apps</h2>
                <p>Unlock the power of cross-platform mobile applications with Binary Bros. Our development expertise ensures your app works seamlessly on various devices, reaching a broader audience.</p>
            </div>
            <div className="quality">
              <h2><i className="fa fa-check"></i> Robust, Responsive and Modern</h2>
                <p>Experience robust, responsive, and modern mobile solutions that elevate user engagement and satisfaction. Take your business mobile with Binary Bros.</p>
            </div>
            <div className="mobile-buttons">
              <a href="#"><i className="fa fa-mobile"></i> Get Service</a>
              <a href="#"><i className="fa fa-link"></i> Read More</a>
            </div>
          </div>
        </div>

        <div className="wordpress">
          <div className="wordpress-info">
            <h1>Wordpress</h1>
            <div className="quality">
              <h2><i className="fa fa-check"></i> Cross Platform Apps</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit maxime animi iure aut totam eos laborum officia ut error aspernatur, quis provident iste recusandae a tempora inventore, dignissimos esse tempore!</p>
            </div>
            <div className="quality">
              <h2><i className="fa fa-check"></i> Robust, Responsive and Modern</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit maxime animi iure aut totam eos laborum officia ut error aspernatur, quis provident iste recusandae a tempora inventore, dignissimos esse tempore!</p>
            </div>
          <div className="wordpress-buttons">
              <a href="#"><i className="fa fa-mobile"></i> Get Service</a>
              <a href="#"><i className="fa fa-external-link"></i> Read More</a>
            </div>
          </div>
          <div className="wordpress-image">
            <img src={wordpress} alt="" />
          </div>
        </div>

      </section>


    </div>
  )
}

export default Home

