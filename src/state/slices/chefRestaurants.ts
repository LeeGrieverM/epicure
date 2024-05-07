import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardData } from '../../types/cardTypes';
import {
  chefRestaurantsData,
} from "../../data/constants";
import { RootState } from '../store';

export interface ChefRestaurantState {
    value: CardData[];
}

const initialState: ChefRestaurantState = {
  value: chefRestaurantsData,
};

const chefRestaurantSlice = createSlice({
  name: "chefRestaurant",
  initialState,
  reducers: {
    addRestaurant: (state, action: PayloadAction<CardData>) => {
      state.value.push(action.payload);
    },
    deleteRestaurant: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter(
        (restaurant) => restaurant.title !== action.payload
      );
    },
  },
});

export const { addRestaurant } = chefRestaurantSlice.actions;
export const { deleteRestaurant } = chefRestaurantSlice.actions;

export const chefRestaurantsSelector = (state: RootState) => state.chefRestaurants.value;

export default chefRestaurantSlice.reducer;
