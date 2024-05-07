import "./HomePage.scss";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Carousel from "../../components/Carousel/Carousel";
import IconMeanings from "../../components/IconMeanings/IconMeanings";
import ChefOfTheWeek from "../../components/ChefOfTheWeek/ChefOfTheWeek";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import { Fade } from "react-awesome-reveal";
import { RootState } from "../../state/store";
import {
  // restaurantsData,
  // dishesData,
  // chefRestaurantsData,
  text,
  chefData,
  aboutUsData,
} from "../../data/constants";
import {
  carouselDynamicStyles,
  containerChefDynamicStyles,
  containerRegDynamicStyles,
} from "../../data/generalStyles";

const restaurantsSelector = (state: RootState) => state.restaurants.value;
const dishesSelector = (state: RootState) => state.dishes.value;
const chefRestaurantsSelector = (state: RootState) => state.chefRestaurants.value;

function HomePage() {
 
  return (
    <Fade>
      <div className="home-page-container">
        <Header />
        <SearchBar />
        <Carousel
          title={text.popularRestaurantsTitle}
          containerDynamicStyles={containerRegDynamicStyles}
          cardsType={restaurantsSelector}
        />
        <button className="all-restaurants-button">
          <span className="mobile-background-image" />
          <span className="desktop-background-image" />
        </button>
        <Carousel
          title={text.signatureDishTitle}
          containerDynamicStyles={containerRegDynamicStyles}
          cardsType={dishesSelector}
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
          title={chefData.carouselTitle}
          containerDynamicStyles={containerChefDynamicStyles}
          carouselDynamicStyles={carouselDynamicStyles}
          cardsType={chefRestaurantsSelector}
        />
        <AboutUs
          title={aboutUsData.title}
          p1={aboutUsData.p1}
          p2={aboutUsData.p2}
          logo={aboutUsData.logo}
          appleDownloadLogo={aboutUsData.appleDownloadLogo}
          googleDownloadLogo={aboutUsData.googleDownloadLogo}
        />
        <Footer />
      </div>
    </Fade>
  );
}

export default HomePage;
