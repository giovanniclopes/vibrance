import Aleph from "../../assets/logos/aleph.webp";
import Darkside from "../../assets/logos/darkside.webp";
import Intrinseca from "../../assets/logos/intrinseca.webp";
import PipocaENanquim from "../../assets/logos/pipoca&nanquim.webp";
import Saraiva from "../../assets/logos/saraiva.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const PartnershipsCarousel = () => {
  const settings = {
    dots: false,
    swipeToSlide: false,
    arrows: false,
    lazyload: true,
    infinite: true,
    speed: 3000,
    autoplaySpeed: 3500,
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

  const trendingBooks = [
    Aleph,
    Darkside,
    Intrinseca,
    PipocaENanquim,
    Saraiva,
  ];

  return (
    <div>
      <Slider {...settings}>
        {trendingBooks.map((logo, index) => (
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
