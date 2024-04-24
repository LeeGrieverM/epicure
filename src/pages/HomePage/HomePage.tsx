import "./HomePage.scss";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Carousel from "../../components/Carousel/Carousel";
import IconMeanings from "../../components/IconMeanings/IconMeanings";
import ChefOfTheWeek from "../../components/ChefOfTheWeek/ChefOfTheWeek";
import AboutUs from "../../components/AboutUs/AboutUs";

import {
  restaurantsData,
  dishesData,
  chefRestaurantsData,
  text,
  chefData,
  aboutUsData
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
        img={chefData.img}
      />
      <Carousel
        cards={chefRestaurantsData}
        title={chefData.carouselTitle}
        containerDynamicStyles={containerChefDynamicStyles}
        carouselDynamicStyles={carouselDynamicStyles}
      />
      <AboutUs title={aboutUsData.title} p1={aboutUsData.p1} p2={aboutUsData.p2} logo={aboutUsData.logo} appleDownloadLogo={aboutUsData.appleDownloadLogo} googleDownloadLogo={aboutUsData.googleDownloadLogo}/> 

    </div>
  );
}

export default HomePage;
