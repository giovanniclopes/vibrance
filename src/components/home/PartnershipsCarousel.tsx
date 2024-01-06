import Aleph from "../../assets/logos/aleph.png";
import Darkside from "../../assets/logos/darkside.png";
import Intrinseca from "../../assets/logos/intrinseca.png";
import PipocaENanquim from "../../assets/logos/pipocaEnanquim.png";
import Saraiva from "../../assets/logos/saraiva.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const PartnershipsCarousel = () => {
  const settings = {
    dots: false,
    swipeToSlide: true,
    arrows: false,
    lazyload: true,
    infinite: true,
    speed: 3000,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const partnershipsCarousel = [
    Aleph,
    Darkside,
    Intrinseca,
    PipocaENanquim,
    Saraiva,
  ];

  return (
    <div>
      <Slider {...settings}>
        {partnershipsCarousel.map((logo, index) => (
          <div key={index}>
            <img
              className="rounded-xl mbl:rounded-none"
              src={logo}
              alt={`Logo ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PartnershipsCarousel;
