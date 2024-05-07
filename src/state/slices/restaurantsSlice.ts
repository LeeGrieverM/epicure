import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { CardData } from '../../types/cardTypes';
import {
  restaurantsData,
} from "../../data/constants";
import { RootState } from '../store';

export interface RestaurantsState {
    value: CardData[];
}

const initialState: RestaurantsState = {
  value: restaurantsData,
};

export const fetchRestaurants = createAsyncThunk(
  'restaurants/fetchRestaurants',
  async () => {
      const response = await axios.get('/api/v1/restaurants');
      return response.data;
  }
);

const restaurantsSlice = createSlice({
  name: "restaurant",
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
//   extraReducers: (builder) => {
//     builder
//         .addCase(fetchRestaurants.fulfilled, (state, action) => {
//             state.value = action.payload;
//         });
// },
});

export const restaurantsSelector = (state: RootState) => state.restaurants.value;

export const { addRestaurant } = restaurantsSlice.actions;
export const { deleteRestaurant } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
