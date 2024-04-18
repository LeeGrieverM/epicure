
import searchIcon from "../assets/icons/searchIcon.svg";
import personIcon from "../assets/icons/personIcon.svg";
import shoppingBagIcon from "../assets/icons/shoppingBagIcon.svg";

import spicyIcon from '../assets/icons/spicyIcon.svg';
import vegetarianIcon from '../assets/icons/vegetarianIcon.svg';
import veganIcon from '../assets/icons/veganIcon.svg';

export const paths = {
    root: "/",
    restaurants: "/restaurants",
    internalPage: "/restaurant/:restaurantId"
};

export const text = {
    searchBarTitle: "Epicure works with the top chef restaurants in Tel Aviv",
    searchBarPlaceHolder: "Search for restaurant, cuisine, chef",
};



export const iconButtonsData = [
  { icon: searchIcon, alt: "search-icon", className: "search-button" },
  { icon: personIcon, alt: "person-icon", className: "person-button" },
  { icon: shoppingBagIcon, alt: "shopping-bag-icon", className: "shopping-bag-button" }
];

export const textButtonsData = [
  { text: "EPICURE", className: "epicure-button" },
  { text: "Restaurants", className: "text-button" },
  { text: "Chefs", className: "text-button" }
];

export const iconsMeaningData = [
  { icon: spicyIcon, alt: "spicy", className: "Spicy" },
  { icon: vegetarianIcon, alt: "vegetarian", className: "Vegetarian" },
  { icon: veganIcon, alt: "vegan", className: "Vegan" }
];