import ABibliotecaDaMeiaNoite from "../../assets/books/abibliotecadameianoite.webp";
import AliceAtravesDoEspelho from "../../assets/books/aliceatravesdoespelho.webp";
import ARevolucaoDosBichos from "../../assets/books/arevolucaodosbichos.webp";
import DoMilAoMilhao from "../../assets/books/domilaomilhao.webp";
import EAssimQueAcaba from "../../assets/books/eassimqueacaba.webp";
import ItACoisa from "../../assets/books/itacoisa.webp";
import Verity from "../../assets/books/verity.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TrendingBooksCarousel = () => {
  const settings = {
    dots: false,
    swipeToSlide: true,
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
    ABibliotecaDaMeiaNoite,
    AliceAtravesDoEspelho,
    ARevolucaoDosBichos,
    DoMilAoMilhao,
    EAssimQueAcaba,
    ItACoisa,
    Verity,
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

export default TrendingBooksCarousel;
