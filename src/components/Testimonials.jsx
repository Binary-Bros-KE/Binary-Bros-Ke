import Slider from "react-slick";
import quote from "../Assets/testimonial/quote.png";
import john from "../Assets/testimonial/John-Doe.jpg";
import jane from "../Assets/testimonial/Jane-Doe.jpg";

const testimonials = () => {
    
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
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    customPaging: (i) => <div className="custom-dot">{}</div>,
    slidesToShow: 3, // Default value
  
    // Responsive settings
    responsive: [
      {
        breakpoint: 640, // Screen width less than 640px
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, // Screen width less than 768px
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  


  return (
    <div>
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
                  "Binary Bros' commitment to excellence is evident in every aspect of their work. Their innovative solutions and prompt communication make them a reliable partner for any software development needs."
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
                  "Working with Binary Bros was an absolute pleasure. They delivered a cutting-edge solution that exceeded our expectations. The team's attention to detail and commitment to quality are truly commendable."
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
                  "Binary Bros' expertise and professionalism are unparalleled. They transformed our vision into reality, delivering a seamless and user-friendly solution. I highly recommend their services."
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
                  "We are extremely satisfied with the services provided by Binary Bros. Their technical proficiency and dedication to our project ensured its success. It's rare to find a team that truly cares about client satisfaction."
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
   </div>
  )
}

export default testimonials
