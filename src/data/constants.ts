// header icons
import searchIcon from "../assets/icons/searchIcon.svg";
import personIcon from "../assets/icons/personIcon.svg";
import shoppingBagIcon from "../assets/icons/shoppingBagIcon.svg";

// text buttons
import epicureIcon from "../assets/icons/epicureLogo.svg";
import restaurantsIcon from "../assets/icons/restaurantsIcon.svg";
import chefsIcon from "../assets/icons/chefsIcon.svg";

// food options
import spicyIcon from "../assets/icons/spicyIcon.svg";
import vegetarianIcon from "../assets/icons/vegetarianIcon.svg";
import veganIcon from "../assets/icons/veganIcon.svg";

// restaurants images
import claroImg from "../assets/images/claro.png";
import LuminaImg from "../assets/images/Lumina.png";
import TigerLillyImg from "../assets/images/tiger-lily.png";

import { CardData } from "../types/cardTypes";
import RestaurantCardExpantion from "../components/ExpansionCards/RestaurantCardExpansion/RestaurantCardExpantion";
import DishCardExpansion from "../components/ExpansionCards/DishCardExpansion/DishCardExpansion";

// dishes images
import PadKiMaoImg from "../assets/images/padKiMao.png";
import GarbanzoFritoImg from "../assets/images/garbanzoFrito.png";
import smokedPizzaImg from "../assets/images/smokedPizza.png";

// chef restaurants images
import onzaImg from "../assets/images/onza.png";
import kitchenMarketImg from "../assets/images/kitchenMarket.png";
import mashyaImg from "../assets/images/mashya.png";

// chef image
import chefImg from "../assets/images/yossiShitrit.png";

export const paths = {
  root: "/",
  restaurants: "/restaurants",
  internalPage: "/restaurant/:restaurantId",
};

export const text = {
  searchBarTitle: "Epicure works with the top chef restaurants in Tel Aviv",
  searchBarPlaceHolder: "Search for restaurant, cuisine, chef",
  popularRestaurantsTitle: "POPULAR RESTAURANTS IN EPICURE: ",
  signatureDishTitle: "SIGNATURE DISH OF: ",
};

export const iconButtonsData = [
  { icon: searchIcon, alt: "search-icon", className: "search-button" },
  { icon: personIcon, alt: "person-icon", className: "person-button" },
  {
    icon: shoppingBagIcon,
    alt: "shopping-bag-icon",
    className: "shopping-bag-button",
  },
];

const breakPoints = {
  xs: 300,
  s: 500,
  m: 768,
  l: 1000,
  xl: 1400,
};

export const swiperBreakpoints = {
  [breakPoints.xs]: {
    slidesPerView: 1.3,
  },
  [breakPoints.s]: {
    slidesPerView: 1.5,
  },
  [breakPoints.m]: {
    slidesPerView: 2,
  },
  [breakPoints.l]: {
    slidesPerView: 3,
  },
  [breakPoints.xl]: {
    slidesPerView: 3,
  },
};

export const textButtonsData = [
  { img: epicureIcon, className: "epicure-button" },
  { img: restaurantsIcon, className: "text-button" },
  { img: chefsIcon, className: "text-button" },
];

export const iconsMeaningData = [
  { icon: spicyIcon, alt: "spicy", className: "Spicy" },
  { icon: vegetarianIcon, alt: "vegetarian", className: "Vegetarian" },
  { icon: veganIcon, alt: "vegan", className: "Vegan" },
];

const ingredients = {
  padKiMao:
    "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
  GarbanzoFrito:
    "Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
  SmokedPizza: `Basil dough, cashew "butter", demi-glace, bison & radish`,
};
const prices = {
  padKiMao: 88,
  GarbanzoFrito: 98,
  SmokedPizza: 65,
};
export const dishesData: CardData[] = [
  {
    title: "Pad Ki Mao",
    img: PadKiMaoImg,
    expansionComponent: DishCardExpansion({
      icon: spicyIcon,
      ingredients: ingredients.padKiMao,
      price: prices.padKiMao,
    }),
  },
  {
    title: "Garbanzo Frito",
    img: GarbanzoFritoImg,
    expansionComponent: DishCardExpansion({
      icon: spicyIcon,
      ingredients: ingredients.GarbanzoFrito,
      price: prices.GarbanzoFrito,
    }),
  },
  {
    title: "Smoked Pizza",
    img: smokedPizzaImg,
    expansionComponent: DishCardExpansion({
      icon: veganIcon,
      ingredients: ingredients.SmokedPizza,
      price: prices.SmokedPizza,
    }),
  },
  {
    title: "Smoked Pizza",
    img: smokedPizzaImg,
    expansionComponent: DishCardExpansion({
      icon: veganIcon,
      ingredients: ingredients.SmokedPizza,
      price: prices.SmokedPizza,
    }),
  },
  {
    title: "Smoked Pizza",
    img: smokedPizzaImg,
    expansionComponent: DishCardExpansion({
      icon: veganIcon,
      ingredients: ingredients.SmokedPizza,
      price: prices.SmokedPizza,
    }),
  },
];

export const restaurantsData: CardData[] = [
  {
    title: "Claro",
    img: claroImg,
    expansionComponent: RestaurantCardExpantion({
      chef: "Ran Shmueli",
      stars: 4,
    }),
  },
  {
    title: "Lumina",
    img: LuminaImg,
    expansionComponent: RestaurantCardExpantion({
      chef: "Meir Adoni",
      stars: 3,
    }),
  },
  {
    title: "Tiger Lilly",
    img: TigerLillyImg,
    expansionComponent: RestaurantCardExpantion({
      chef: "Yanir Green",
      stars: 4,
    }),
  },
  {
    title: "Tiger Lilly",
    img: TigerLillyImg,
    expansionComponent: RestaurantCardExpantion({
      chef: "Yanir Green",
      stars: 4,
    }),
  },
  {
    title: "Tiger Lilly",
    img: TigerLillyImg,
    expansionComponent: RestaurantCardExpantion({
      chef: "Yanir Green",
      stars: 4,
    }),
  },
  {
    title: "Tiger Lilly",
    img: TigerLillyImg,
    expansionComponent: RestaurantCardExpantion({
      chef: "Yanir Green",
      stars: 4,
    }),
  },
];

export const chefData = {
  title: "CHEF OF THE WEEK: ",
  text: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
  chefName: "Yossi Shitrit",
  chefImg: chefImg,
  carouselTitle: "Yossi's Restaurants",
};

export const chefRestaurantsData: CardData[] = [
  {
    title: "Onza",
    img: onzaImg,
  },
  {
    title: "Kitchen Market",
    img: kitchenMarketImg,
  },
  {
    title: "Mashya",
    img: mashyaImg,
  },
  {
    title: "Mashya",
    img: mashyaImg,
  },
  {
    title: "Mashya",
    img: mashyaImg,
  },
  {
    title: "Mashya",
    img: mashyaImg,
  },
];

export const carouselDynamicStyles = {
  width: "60%",
  height: "100%",
  margin: "0 auto",
};

export const containerDynamicStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  rowGap: "30px",
};

export const containerRegDynamicStyles = {
  margin: "0 auto",
  paddingTop: "4%",
  width: "100%",
  display: "flex",
  height: "100%",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  rowGap: "30px",
};

if (window.matchMedia("(max-width: 768px)").matches) {
  containerRegDynamicStyles.alignItems = "flex-start";
  containerRegDynamicStyles.rowGap = "20px";
}
