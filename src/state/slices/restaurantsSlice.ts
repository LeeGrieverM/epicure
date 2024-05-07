import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IRestaurant } from '../../types/types';
import { RootState } from '../store';

export interface RestaurantsState {
    value: IRestaurant[];
}

const initialState: RestaurantsState = {
  value: [],
};

axios.defaults.baseURL = "http://localhost:3000/v1";

export const fetchRestaurants = createAsyncThunk(
  "restaurants/fetchRestaurants",
  async (): Promise<IRestaurant[]> => {
    const response = await axios.get<IRestaurant[]>("/restaurants");
    console.log("API data:", response.data);
    return response.data;
  }
);

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchRestaurants.fulfilled,
        (state, action: PayloadAction<IRestaurant[]>) => {
          console.log("Updating state with:", action.payload);
          state.value = action.payload;
        }
      )
  },
});

export const restaurantsSelector = (state: RootState) =>
  state.restaurants.value.map((restaurant) => ({
    id: restaurant.id,
    name: restaurant.name,
    image: restaurant.image,
    chef: restaurant.chef,
    stars: restaurant.stars,
    dishes: restaurant.dishes,
  }));

export default restaurantsSlice.reducer;
