import "./HomePage.scss";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Carousel from "../../components/Carousel/Carousel";
import IconMeanings from "../../components/IconMeanings/IconMeanings";
import ChefOfTheWeek from "../../components/ChefOfTheWeek/ChefOfTheWeek";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import RestaurantCardExpansion from "../../components/ExpansionCards/RestaurantCardExpansion/RestaurantCardExpantion";
import DishCardExpansion from "../../components/ExpansionCards/DishCardExpansion/DishCardExpansion";
import { Fade } from "react-awesome-reveal";
import { CardData, IDish, IRestaurant } from "../../types/types";
import { restaurantsSelector, fetchRestaurants } from "../../state/slices/restaurantsSlice";
import {
  text,
  chefRestaurantsData,
  chefData,
  aboutUsData,
} from "../../data/constants";
import {
  carouselDynamicStyles,
  containerChefDynamicStyles,
  containerRegDynamicStyles,
} from "../../data/generalStyles";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { AppDispatch } from "../../state/store";
import { dishesSelector, fetchDishes } from "../../state/slices/dishesSlice";

const mapIRestaurantToCardData = (restaurant: IRestaurant): CardData => {
  return {
    title: restaurant.name,
    image: restaurant.image,
    expansionComponent: <RestaurantCardExpansion
      chef={restaurant.chef.name}
      stars= {restaurant.stars}
      dishes={restaurant.dishes.map(dish => dish.name)}
    />,
  };
};

const mapIDishToCardData = (dish: IDish): CardData => {
  return {
    title: dish.name,
    image: dish.image,
    expansionComponent: <DishCardExpansion
      icon={dish.icon}
      ingredients= {dish.ingredients}
      price={dish.price} 
    />,
  };
};

function HomePage() {
  const dispatch = useDispatch<AppDispatch>();

  const restaurants = useSelector(restaurantsSelector);
  const dishes = useSelector(dishesSelector);

  useEffect(() => {
    dispatch(fetchRestaurants());
    dispatch(fetchDishes());

  }, [dispatch]);

  return (
    <Fade>
      <div className="home-page-container">
        <Header />
        <SearchBar />
        <Carousel
          title={text.popularRestaurantsTitle}
          containerDynamicStyles={containerRegDynamicStyles}
          cards={restaurants.map(mapIRestaurantToCardData)}
        />
        <button className="all-restaurants-button">
          <span className="mobile-background-image" />
          <span className="desktop-background-image" />
        </button>
        <Carousel
          title={text.signatureDishTitle}
          containerDynamicStyles={containerRegDynamicStyles}
          cards={dishes.map(mapIDishToCardData)}
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
          cards={chefRestaurantsData}
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

