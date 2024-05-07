import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../Carousel/Carousel.scss";
import Card from "../Card/Card";
import { CardData } from "../../types/types";
import { swiperBreakpoints } from "../../data/constants";
import { Fade } from "react-awesome-reveal";

const Carousel = ({
  cards,
  title,
  containerDynamicStyles,
  carouselDynamicStyles,
}: {
  cards: CardData[];
  title: string;
  containerDynamicStyles?: object;
  carouselDynamicStyles?: object;
}) => {

  return (
    <Fade>
      <div className="carousel-container" style={containerDynamicStyles}>
        <h1 className="carousel-title">{title}</h1>
        <div className="swiper-container">
          <Swiper
            style={carouselDynamicStyles}
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={swiperBreakpoints}
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <Card card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Fade>
  );
};

export default Carousel;
