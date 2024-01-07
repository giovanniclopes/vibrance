import BatmanOLongoDiaDasBruxas from "../../assets/books/hqs/batmanolongodiadasbruxas.webp";
import LadyKiller from "../../assets/books/hqs/ladykiller.webp";
import oCorvo from "../../assets/books/hqs/ocorvo.webp";
import Persepolis from "../../assets/books/hqs/persepolis.webp";
import Purgatorio from "../../assets/books/hqs/purgatorio.webp";
import Watchmen from "../../assets/books/hqs/watchmen.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TrendingHQsCarousel = () => {
  const settings = {
    dots: false,
    swipeToSlide: false,
    arrows: false,
    lazyload: true,
    infinite: true,
    speed: 3000,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    slidesToShow: 4,
    slidesToScroll: 4,
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

  const trendindHQs = [
    BatmanOLongoDiaDasBruxas,
    LadyKiller,
    oCorvo,
    Persepolis,
    Purgatorio,
    Watchmen,
  ];

  return (
    <div>
      <Slider {...settings}>
        {trendindHQs.map((logo, index) => (
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

export default TrendingHQsCarousel;
