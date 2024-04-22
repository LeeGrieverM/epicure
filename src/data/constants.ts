// header icons 
import searchIcon from "../assets/icons/searchIcon.svg";
import personIcon from "../assets/icons/personIcon.svg";
import shoppingBagIcon from "../assets/icons/shoppingBagIcon.svg";

// text buttons 
import epicureIcon from '../assets/icons/epicureLogo.svg';
import restaurantsIcon from '../assets/icons/restaurantsIcon.svg';
import chefsIcon from '../assets/icons/chefsIcon.svg';

// food options 
import spicyIcon from '../assets/icons/spicyIcon.svg';
import vegetarianIcon from '../assets/icons/vegetarianIcon.svg';
import veganIcon from '../assets/icons/veganIcon.svg';

// restaurants images
import claroImg from '../assets/images/claro.png';
import LuminaImg from '../assets/images/Lumina.png';
import TigerLillyImg from '../assets/images/tiger-lily.png';

import { CardData } from "../types/cardTypes";
import RestaurantCardExpantion from "../components/ExpansionCards/RestaurantCardExpansion/RestaurantCardExpantion";
import DishCardExpansion from "../components/ExpansionCards/DishCardExpansion/DishCardExpansion";

// dishes images
import PadKiMaoImg from '../assets/images/padKiMao.png';
import GarbanzoFritoImg from '../assets/images/garbanzoFrito.png';
import smokedPizzaImg from '../assets/images/smokedPizza.png';

export const paths = {
    root: "/",
    restaurants: "/restaurants",
    internalPage: "/restaurant/:restaurantId"
};

export const text = {
    searchBarTitle: "Epicure works with the top chef restaurants in Tel Aviv",
    searchBarPlaceHolder: "Search for restaurant, cuisine, chef",
    popularRestaurantsTitle: 'POPULAR RESTAURANTS IN EPICURE: ',
    signatureDishTitle: 'SIGNATURE DISH OF: ',
};

export const iconButtonsData = [
  { icon: searchIcon, alt: "search-icon", className: "search-button" },
  { icon: personIcon, alt: "person-icon", className: "person-button" },
  { icon: shoppingBagIcon, alt: "shopping-bag-icon", className: "shopping-bag-button" }
];

const breakPoints = {
  xs: 300,
  s: 500,
  m: 768, 
  l: 1000,
  xl: 1400
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
  { img: chefsIcon, className: "text-button" }
];

export const iconsMeaningData = [
  { icon: spicyIcon, alt: "spicy", className: "Spicy" },
  { icon: vegetarianIcon, alt: "vegetarian", className: "Vegetarian" },
  { icon: veganIcon, alt: "vegan", className: "Vegan" }
];

const ingredients = 
  {
  padKiMao: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
  GarbanzoFrito: "Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
  SmokedPizza: `Basil dough, cashew "butter", demi-glace, bison & radish`
  }
;

const prices = 
  {
  padKiMao: 88,
  GarbanzoFrito: 98,
  SmokedPizza: 65
  }
;

export const dishesData: CardData[] = [
  {
    title: "Pad Ki Mao",
    img: PadKiMaoImg,
    expansionComponent: DishCardExpansion({ icon: spicyIcon, ingredients: ingredients.padKiMao, price: prices.padKiMao }), // Call the component with props
  },
  {
    title: "Garbanzo Frito",
    img: GarbanzoFritoImg,
    expansionComponent: DishCardExpansion({ icon: spicyIcon, ingredients: ingredients.GarbanzoFrito, price: prices.GarbanzoFrito }), // Call the component with props
  },
  {
    title: "Smoked Pizza",
    img: smokedPizzaImg,
    expansionComponent: DishCardExpansion({ icon: veganIcon, ingredients: ingredients.SmokedPizza, price: prices.SmokedPizza }), // Call the component with props
  },
  {
    title: "Smoked Pizza",
    img: smokedPizzaImg,
    expansionComponent: DishCardExpansion({ icon: veganIcon, ingredients: ingredients.SmokedPizza, price: prices.SmokedPizza }), // Call the component with props
  },
  {
    title: "Smoked Pizza",
    img: smokedPizzaImg,
    expansionComponent: DishCardExpansion({ icon: veganIcon, ingredients: ingredients.SmokedPizza, price: prices.SmokedPizza }), // Call the component with props
  },
];

export const restaurantsData: CardData[] = [
  {
    title: "Claro",
    img: claroImg,
    expansionComponent: RestaurantCardExpantion({ chef: 'Ran Shmueli', stars: 4}), // Call the component with props
  },
  {
    title: "Lumina",
    img: LuminaImg,
    expansionComponent: RestaurantCardExpantion({ chef: 'Meir Adoni', stars: 3}), // Call the component with props
  },
  {
    title: "Tiger Lilly",
    img: TigerLillyImg,
    expansionComponent: RestaurantCardExpantion({ chef: 'Yanir Green', stars: 4}), // Call the component with props
  },
  {
    title: "Tiger Lilly",
    img: TigerLillyImg,
    expansionComponent: RestaurantCardExpantion({ chef: 'Yanir Green', stars: 4}), // Call the component with props
  },
  {
    title: "Tiger Lilly",
    img: TigerLillyImg,
    expansionComponent: RestaurantCardExpantion({ chef: 'Yanir Green', stars: 4}), // Call the component with props
  },
  {
    title: "Tiger Lilly",
    img: TigerLillyImg,
    expansionComponent: RestaurantCardExpantion({ chef: 'Yanir Green', stars: 4}), // Call the component with props
  },
];

// export const dishesData: CardData[] = [
//   {title: "Pad Ki Mao", img: PadKiMaoImg, expantionComponent: (<DishCardExpansion/>)},
//   {title: "Garbanzo Frito", img: GarbanzoFritoImg, icon: spicyIcon, ingredients: ingredients.GarbanzoFrito, price: prices.GarbanzoFrito},
//   {title: "Smoked Pizza", img: smokedPizzaImg, icon: veganIcon, ingredients: ingredients.SmokedPizza, price: prices.SmokedPizza},
//   {title: "1", img: PadKiMaoImg, icon: spicyIcon, ingredients: ingredients.padKiMao, price: prices.padKiMao},
//   {title: "2", img: PadKiMaoImg, icon: spicyIcon, ingredients: ingredients.padKiMao, price: prices.padKiMao},
//   {title: "3", img: PadKiMaoImg, icon: spicyIcon, ingredients: ingredients.padKiMao, price: prices.padKiMao},
// ];

// export const dishesData: CardData[] = [
//   { type: 'dish', title: "Pad Ki Mao", img: PadKiMaoImg, icon: spicyIcon, ingredients: ingredients.padKiMao, price: prices.padKiMao},
//   { type: 'dish', title: "Garbanzo Frito", img: GarbanzoFritoImg, icon: spicyIcon, ingredients: ingredients.GarbanzoFrito, price: prices.GarbanzoFrito},
//   { type: 'dish', title: "Smoked Pizza", img: smokedPizzaImg, icon: veganIcon, ingredients: ingredients.SmokedPizza, price: prices.SmokedPizza},
//   { type: 'dish', title: "1", img: PadKiMaoImg, icon: spicyIcon, ingredients: ingredients.padKiMao, price: prices.padKiMao},
//   { type: 'dish', title: "2", img: PadKiMaoImg, icon: spicyIcon, ingredients: ingredients.padKiMao, price: prices.padKiMao},
//   { type: 'dish', title: "3", img: PadKiMaoImg, icon: spicyIcon, ingredients: ingredients.padKiMao, price: prices.padKiMao},
// ];


