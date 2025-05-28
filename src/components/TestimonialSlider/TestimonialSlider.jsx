import React from "react";
import { useRef } from "react";
import Slider from "react-slick";
import "./TestimonialSlider.css";
import { clients } from "../../constants/testimonials";
import ClientSliderComponent from "./ClientSliderComponent";
import GeometricShape from "../geometricShape/geometricShape";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Default value
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,

  // Responsive settings
  responsive: [
    {
      breakpoint: 1024, // Screen width less than 768px
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600, // Screen width less than 640px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480, // Screen width less than 480px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const TestimonialSlider = () => {

  const arrowRef = useRef(null);

  let clientDiscription = "";
  clientDiscription = clients.map((item, i) => (
    <ClientSliderComponent item={item} key={i} />
  ));


  return (
    <div className="testimonial-slider">
      <div className="testimonial-shape">
      <GeometricShape />
      </div>
      <div className="testimonial-header">
        <h3>Testimonials</h3>
        <h1>What Our Clients Say!</h1>
      </div>

      <section className="testimonialSlider">
        <Slider className="w" ref={arrowRef} {...settings}>{clientDiscription}</Slider>
        <div className="testimonial-slider-buttons">
          <button onClick={() => arrowRef.current.slickPrev()}>
            <i className="fa fa-chevron-left"></i>
            </button>
          <button onClick={() => arrowRef.current.slickNext()}>
            <i className="fa fa-chevron-right"></i>
            </button>
        </div>
      </section>
    </div>
  );
};

export default TestimonialSlider;
