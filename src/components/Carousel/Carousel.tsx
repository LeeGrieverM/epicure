import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../Carousel/Carousel.scss";
import Card from "../Card/Card";
import { CardData } from "../../types/cardTypes";
import { swiperBreakpoints } from "../../data/constants";

const Carousel = ({ cards, title }: { cards: CardData[]; title: string }) => {
  return (
    <div className="carousel-container">
      <h1 className="carousel-title">{title}</h1>
      <Swiper
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
  );
};

export default Carousel;
