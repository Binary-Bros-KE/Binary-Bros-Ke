import showcase from '../Assets/home/web-development.png';
import discount from '../Assets/home/discount.png';
import { TypeAnimation } from 'react-type-animation';


const Home = () => {



  return (
    <div className="home-container">

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
      </div>

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

    </div>
  )
}

export default Home
