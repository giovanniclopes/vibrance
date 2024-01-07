import BibliaNVT from "../../assets/books/exclusives/biblianvt.webp";
import IssoEArte from "../../assets/books/exclusives/issoearte.webp";
import TheWorlds from "../../assets/books/exclusives/theworlds.webp";
import CacadasDeVidaEDeMarte from "../../assets/books/exclusives/cacadasdevidaedemarte.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ExclusiveBooksCarousel = () => {
  const settings = {
    dots: false,
    swipeToSlide: true,
    arrows: false,
    lazyload: true,
    infinite: true,
    speed: 3000,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    slidesToShow: 3,
    slidesToScroll: 3,
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

  const ExclusiveBooks = [
    BibliaNVT,
    IssoEArte,
    TheWorlds,
    CacadasDeVidaEDeMarte,
  ];

  return (
    <div>
      <Slider {...settings}>
        {ExclusiveBooks.map((logo, index) => (
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

export default ExclusiveBooksCarousel;
