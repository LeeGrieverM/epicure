import Header from "../../components/Header/Header";
import "./HomePage.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import IconMeanings from "../../components/IconMeanings/IconMeanings";
import Carousel from "../../components/Carousel/Carousel";
import ChefOfTheWeek from "../../components/ChefOfTheWeek/ChefOfTheWeek";
import {
  restaurantsData,
  dishesData,
  chefRestaurantsData,
  text,
  chefData,
} from "../../data/constants";
import {
  carouselDynamicStyles,
  containerChefDynamicStyles,
  containerRegDynamicStyles,
} from '../../data/generalStyles';

function HomePage() {
  return (
    <div className="home-page-container">
      <Header />
      <SearchBar />
      <Carousel
        cards={restaurantsData}
        title={text.popularRestaurantsTitle}
        containerDynamicStyles={containerRegDynamicStyles}
      />
      <button className="all-restaurants-button">
        <span className="mobile-background-image" />
        <span className="desktop-background-image" />
      </button>
      <Carousel
        cards={dishesData}
        title={text.signatureDishTitle}
        containerDynamicStyles={containerRegDynamicStyles}
      />
      <button className="all-restaurants-button">
        <span className="mobile-background-image" />
      </button>
      <IconMeanings />
      <ChefOfTheWeek
        title={chefData.title}
        chefName={chefData.chefName}
        text={chefData.text}
        desktopImg={chefData.desktopImg}
        mobileImg={chefData.mobileImg}
      />
      <Carousel
        cards={chefRestaurantsData}
        title={chefData.carouselTitle}
        containerDynamicStyles={containerChefDynamicStyles}
        carouselDynamicStyles={carouselDynamicStyles}
      />
    </div>
  );
}

export default HomePage;
