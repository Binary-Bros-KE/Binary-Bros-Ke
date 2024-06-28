//--------- Stylesheets
import "./clientsCarousel.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


//----------- Image imports
import client1 from '../../../public/clients/cactus.svg'
import client2 from '../../../public/clients/chain.svg'
import client4 from '../../../public/clients/hitech.svg'
import client5 from '../../../public/clients/pinpoint.svg'
import client3 from '../../../public/clients/flash.svg'
import client6 from '../../../public/clients/proline.svg'
import client7 from '../../../public/clients/rise.svg'
import client9 from '../../../public/clients/vision.svg'
import client8 from '../../../public/clients/terra.svg'
import client10 from '../../../public/clients/volume.svg'

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
    <section className="clients">
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
            <img src={client9} alt="cactus" />
            <img src={client10} alt="cactus" />
        </Slider>
    </section>
  )
}

export default Clients
