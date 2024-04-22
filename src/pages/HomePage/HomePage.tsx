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
      <Carousel cards={restaurantsData} title={text.popularRestaurantsTitle}/>
      <Carousel cards={dishesData} title={text.signatureDishTitle}/>
      <IconMeanings/>
    </div>
  );
}

export default HomePage;
