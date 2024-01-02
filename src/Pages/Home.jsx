import showcase from "../Assets/home/web-development.png";
import discount from "../Assets/home/discount.png";
import about from "../Assets/about/banner.png";
import card from "../Assets/services/triangle.png";
import mobile from "../Assets/mobile&wordpress/banner-mob-app.png";
import wordpress from "../Assets/mobile&wordpress/wordpress.png";
import quote from "../Assets/testimonial/quote.png";
import john from "../Assets/testimonial/John-Doe.jpg";
import jane from "../Assets/testimonial/Jane-Doe.jpg";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Slider from "react-slick";
import ContactOne from "../components/ContactOne";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const Home = () => {
  const [counterOn, setCounterOn] = useState(false);

  // Custom component for previous arrow
  const CustomPrevArrow = (props) => (
    <button {...props} className="custom-prev-arrow">
      {<i className="fas fa-chevron-left"></i>}
    </button>
  );

  // Custom component for next arrow
  const CustomNextArrow = (props) => (
    <button {...props} className="custom-next-arrow">
      {<i className="fas fa-chevron-right"></i>}
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    customPaging: (i) => <div className="custom-dot">{}</div>,
  };

  return (
    <div className="home-container">
      <section className="hero" id="hero">
        <div className="showcase">
          <div className="home-info">
            <div className="discount">
              <p>
                <img src={discount} alt="discount" />
                <span>&nbsp;20% Discount</span>&nbsp;on your first Project.
              </p>
            </div>
            <div className="main-text">
              <h1>
                Professional
                <br /> Software
                <br /> Developers
              </h1>
              <p className="tagline">
                Crafting Innovative Solutions to Help Brands, Businesses, and
                Organizations Enhance Their Online Presence in This Rapidly
                Growing Digital Landscape.
              </p>
              <p className="typing">
                Solutions in:{" "}
                <span>
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      "Web Design",
                      1000, // wait 1s before replacing "Mice" with "Hamsters"
                      "Web Development",
                      1000,
                      "SEO",
                      1000,
                      "Mobile Apps",
                      1000,
                      "Digital Marketing",
                      1000,
                      "WordPress",
                      1000,
                      "UI/UX Design",
                      1000,
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
          <div className="notification">
            <i className="fa fa-comments"></i> Notification
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-us">
          <div className="about-image">
            <img src={about} alt="about-image" />
          </div>
          <div className="about-boxes">
            <div className="box">
              <i className="fas fa-paint-brush"></i>Design
            </div>
            <div className="box">
              <i className="fa fa-code"></i>Development
            </div>
            <div className="box">
              <i className="fas fa-rocket"></i>Deployment
            </div>
            <div className="box">
              <i className="fas fa-chart-line"></i>Optimization
            </div>
          </div>
          <div className="about-info">
            <h3>About us</h3>
            <h1>
              Best Business
              <br /> Software Solutions
            </h1>
            <p>
              {" "}
              We are seasoned software developers delivering optimal business
              solutions and SEO expertise. Specializing in propelling brands to
              new heights, we craft innovative solutions for a robust online
              presence. Choose us for unparalleled professionalism, driving
              growth in the dynamic digital landscape.
            </p>
            <div className="about-button">
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </section>

      <section className="why" id="why">
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
              <i className="fa fa-lightbulb"></i> Innovative Problem-Solving
            </div>
            <p>
              We thrive on challenges, approaching each project with a creative
              mindset to find unique solutions that push the boundaries of
              what's possible.
            </p>
          </div>
          <div className="card">
            <div className="card-title">
              <i className="fa fa-cogs"></i> Diverse Technologies
            </div>
            <p>
              From front-end development using the latest frameworks to robust
              back-end solutions, our team is well-versed in the tools and
              languages that drive innovation in the digital realm.
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
      </section>

      <section className="services" id="services">
        <div className="service-header">
          <h3>Our Services</h3>
          <h1>Core Services</h1>
        </div>
        <div className="service-cards">
          <div className="service-card">
            <div className="service-logo">
              <i className="fa fa-search"></i>
            </div>
            <div className="service-ifo">
              <h1>S.E.O</h1>
              <p>
                Enhance your online visibility with our SEO expertise. Our
                strategic approach ensures your brand stands out, driving
                increased traffic and engagement. Unlock the full potential of
                your digital presence with Binary Bros.
              </p>
            </div>
            <div className="service-buttons">
              <i className="fa fa-plus"></i>
              <a href="#">Read More</a>
            </div>
            <div className="image">
              <img src={card} />
            </div>
          </div>
          <div className="service-card active-card">
            <div className="service-logo">
              <i className="fa fa-laptop-code"></i>
            </div>
            <div className="service-ifo">
              <h1>Web Design / Dev</h1>
              <p>
                Immerse your brand in a captivating online experience with our
                Web Design and Development services. We transform ideas into
                visually stunning and functionally seamless websites, ensuring a
                strong online foundation for your business success.
              </p>
            </div>
            <div className="service-buttons">
              <i className="fa fa-plus"></i>
              <a href="#">Read More</a>
            </div>
            <div className="image">
              <img src={card} />
            </div>
          </div>
          <div className="service-card">
            <div className="service-logo">
              <i className="fa fa-bullhorn"></i>
            </div>
            <div className="service-ifo">
              <h1>Digital Marketing</h1>
              <p>
                Elevate your brand's reach and impact through our Digital
                Marketing solutions. From targeted campaigns to comprehensive
                strategies, we empower your business to thrive in the digital
                landscape. Maximize your online potential with Binary Bros at
                the forefront of digital marketing innovation.
              </p>
            </div>
            <div className="service-buttons">
              <i className="fa fa-plus"></i>
              <a href="#">Read More</a>
            </div>
            <div className="image">
              <img src={card} />
            </div>
          </div>
        </div>
      </section>

      <section className="mobile-wordpress" id="mobile-wordpress">
        <div className="mobile">
          <div className="mobile-image">
            <img src={mobile} alt="" />
          </div>
          <div className="mobile-info">
            <h1>Mobile Application</h1>
            <div className="quality">
              <h2>
                <i className="fa fa-check"></i> Cross Platform Apps
              </h2>
              <p>
                Unlock the power of cross-platform mobile applications with
                Binary Bros. Our development expertise ensures your app works
                seamlessly on various devices, reaching a broader audience.
              </p>
            </div>
            <div className="quality">
              <h2>
                <i className="fa fa-check"></i> Robust, Responsive and Modern
              </h2>
              <p>
                Experience robust, responsive, and modern mobile solutions that
                elevate user engagement and satisfaction. Take your business
                mobile with Binary Bros.
              </p>
            </div>
            <div className="mobile-buttons">
              <a href="#">
                <i className="fa fa-mobile"></i> Get Service
              </a>
              <a href="#">
                <i className="fa fa-link"></i> Read More
              </a>
            </div>
          </div>
        </div>

        <div className="wordpress">
          <div className="wordpress-info">
            <h1>Wordpress</h1>
            <div className="quality">
              <h2>
                <i className="fa fa-check"></i> Cross Platform Apps
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
                maxime animi iure aut totam eos laborum officia ut error
                aspernatur, quis provident iste recusandae a tempora inventore,
                dignissimos esse tempore!
              </p>
            </div>
            <div className="quality">
              <h2>
                <i className="fa fa-check"></i> Robust, Responsive and Modern
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
                maxime animi iure aut totam eos laborum officia ut error
                aspernatur, quis provident iste recusandae a tempora inventore,
                dignissimos esse tempore!
              </p>
            </div>
            <div className="wordpress-buttons">
              <a href="#">
                <i className="fa fa-mobile"></i> Get Service
              </a>
              <a href="#">
                <i className="fa fa-external-link"></i> Read More
              </a>
            </div>
          </div>
          <div className="wordpress-image">
            <img src={wordpress} alt="" />
          </div>
        </div>
      </section>

      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <section className="counter" id="counter">
          <div className="counter-header">
            <h3>Our Impact</h3>
            <h1>Key Metrics</h1>
          </div>
          <div className="counter-cards">
            <div className="counter-card">
              <div className="card-icon">
                <div className="card-icon-holder">
                  <i className="fa fa-code"></i>
                </div>
              </div>
              <div className="card-info">
                <h1>Lines of Code Written</h1>
                <div className="counter-number">
                  {counterOn && (
                    <CountUp start={0} end={120000} duration={2} delay={0} />
                  )}{" "}
                  +
                </div>
              </div>
            </div>

            <div className="counter-card">
              <div className="card-icon">
                <div className="card-icon-holder">
                  <i className="fa fa-users"></i>
                </div>
              </div>
              <div className="card-info">
                <h1>Satisfied Clients</h1>
                <div className="counter-number">
                  {counterOn && (
                    <CountUp start={0} end={150} duration={2} delay={0} />
                  )}{" "}
                  +
                </div>
              </div>
            </div>

            <div className="counter-card">
              <div className="card-icon">
                <div className="card-icon-holder">
                  <i className="fa fa-globe"></i>
                </div>
              </div>
              <div className="card-info">
                <h1>Global Presence</h1>
                <div className="counter-number">
                  {counterOn && (
                    <CountUp start={0} end={25} duration={2} delay={0} />
                  )}{" "}
                  +
                </div>
              </div>
            </div>

            <div className="counter-card">
              <div className="card-icon">
                <div className="card-icon-holder">
                  <i className="fa fa-cogs"></i>
                </div>
              </div>
              <div className="card-info">
                <h1>Technologies Mastered</h1>
                <div className="counter-number">
                  {counterOn && (
                    <CountUp start={0} end={10} duration={2} delay={0} />
                  )}{" "}
                  +
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollTrigger>

      <section className="testimonials">
        <div className="testimonial-header">
          <h3>Testimonials</h3>
          <h1>What Our Clients Say!</h1>
        </div>

        <div className="text-holder">
          <Slider {...settings}>
            <div className="testimonial-card">
              <div className="testimonial-text">
                <p>
                  "Working with Binary Bros was an absolute pleasure. They
                  delivered a cutting-edge solution that exceeded our
                  expectations. The team's attention to detail and commitment to
                  quality are truly commendable."
                </p>
              </div>
              <div className="testimonial-icon">
                <img src={quote} alt="quotation mark" />
              </div>
              <div className="testimonial-client">
                <div className="client-image">
                  <img src={john} alt="John Doe" />
                </div>
                <div className="client-info">
                  <h1>John Doe</h1>
                  <p>Software Engineer</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-text">
                <p>
                  "Binary Bros' expertise and professionalism are unparalleled.
                  They transformed our vision into reality, delivering a
                  seamless and user-friendly solution. I highly recommend their
                  services."
                </p>
              </div>
              <div className="testimonial-icon">
                <img src={quote} alt="quotation mark" />
              </div>
              <div className="testimonial-client">
                <div className="client-image">
                  <img src={jane} alt="Jane Doe" />
                </div>
                <div className="client-info">
                  <h1>Jane Doe</h1>
                  <p>Business Owner</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-text">
                <p>
                  "Binary Bros' expertise and professionalism are unparalleled.
                  They transformed our vision into reality, delivering a
                  seamless and user-friendly solution. I highly recommend their
                  services."
                </p>
              </div>
              <div className="testimonial-icon">
                <img src={quote} alt="quotation mark" />
              </div>
              <div className="testimonial-client">
                <div className="client-image">
                  <img src={jane} alt="Jane Doe" />
                </div>
                <div className="client-info">
                  <h1>Jane Doe</h1>
                  <p>Business Owner</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-text">
                <p>
                  "Binary Bros' expertise and professionalism are unparalleled.
                  They transformed our vision into reality, delivering a
                  seamless and user-friendly solution. I highly recommend their
                  services."
                </p>
              </div>
              <div className="testimonial-icon">
                <img src={quote} alt="quotation mark" />
              </div>
              <div className="testimonial-client">
                <div className="client-image">
                  <img src={jane} alt="Jane Doe" />
                </div>
                <div className="client-info">
                  <h1>Jane Doe</h1>
                  <p>Business Owner</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-text">
                <p>
                  "Binary Bros' expertise and professionalism are unparalleled.
                  They transformed our vision into reality, delivering a
                  seamless and user-friendly solution. I highly recommend their
                  services."
                </p>
              </div>
              <div className="testimonial-icon">
                <img src={quote} alt="quotation mark" />
              </div>
              <div className="testimonial-client">
                <div className="client-image">
                  <img src={jane} alt="Jane Doe" />
                </div>
                <div className="client-info">
                  <h1>Jane Doe</h1>
                  <p>Business Owner</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-text">
                <p>
                  "Binary Bros' commitment to excellence is evident in every
                  aspect of their work. Their innovative solutions and prompt
                  communication make them a reliable partner for any software
                  development needs."
                </p>
              </div>
              <div className="testimonial-icon">
                <img src={quote} alt="quotation mark" />
              </div>
              <div className="testimonial-client">
                <div className="client-image">
                  <img src={john} alt="John Doe" />
                </div>
                <div className="client-info">
                  <h1>John Doe</h1>
                  <p>IT Consultant</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      <section className="contact" id="contact">
        {/* <div className="contact-header">
          <h3>Stay in Touch.!</h3>
          <h1>Contact Us</h1>
        </div> */}
        <div className="contact">
          <ContactOne />
        </div>
      </section>
    </div>
  );
};

export default Home;
