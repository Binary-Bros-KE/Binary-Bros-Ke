//--------- Stylesheets
import "./clientsCarousel.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


//----------- Image imports
import client1 from '/clients/arobisca.png'
import client2 from '/clients/vicshiy.png'
import client4 from '/clients/ezzclean.png'
import client5 from '/clients/hoodluxe.png'
import client3 from '/clients/obareds.png'
import client6 from '/clients/risabu.png'
import client7 from '/clients/elikfarm.png'
import client8 from '/clients/binarybros.png'

const Clients = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    cssEase: "linear",
  
    // Responsive settings
    responsive: [
      {
        breakpoint: 640, // Screen width less than 640px
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1150, // Screen width less than 768px
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  

  return (
    <section className="clients m-2">
        <div className="clients-header">
            <h3>Many Clients Who Trust Us</h3>
            <h1>Some of Our Clients</h1>
        </div>

        <Slider {...settings}>
            <img src={client1} alt="cactus" />
            <img src={client2} alt="cactus" />
            <img src={client3} alt="cactus" />
            <img src={client4} alt="cactus" />
            <img src={client5} alt="cactus" />
            <img src={client6} alt="cactus" />
            <img src={client7} alt="cactus" />
            <img src={client8} alt="cactus" />
        </Slider>
    </section>
  )
}

export default Clients
