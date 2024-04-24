import Header from "../../components/Header/Header";
import "./HomePage.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import IconMeanings from "../../components/IconMeanings/IconMeanings";
import Carousel from "../../components/Carousel/Carousel";
import { restaurantsData, dishesData, text } from "../../data/constants";

function HomePage() {
  return (
    <div className="home-page-container">
      <Header />
      <SearchBar />
      <Carousel cards={restaurantsData} title={text.popularRestaurantsTitle} />
      <button className="all-restaurants-button">
        <span className="mobile-background-image" />
        <span className="desktop-background-image" />
      </button>
      <Carousel cards={dishesData} title={text.signatureDishTitle} />
      <button className="all-restaurants-button">
        <span className="mobile-background-image" />
      </button>
      <IconMeanings />
    </div>
  );
}

export default HomePage;
