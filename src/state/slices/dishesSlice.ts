import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IDish } from '../../types/types';
import { RootState } from '../store';

export interface DishesState {
    value: IDish[];
}

const initialState: DishesState = {
  value: [],
};

axios.defaults.baseURL = "http://localhost:3000/v1";

export const fetchDishes = createAsyncThunk(
  "dishes/fetchDishes",
  async (): Promise<IDish[]> => {
    const response = await axios.get<IDish[]>("/dishes");
    return response.data;
  }
);

const dishesSlice = createSlice({
  name: "dish",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchDishes.fulfilled,
        (state, action: PayloadAction<IDish[]>) => {
          state.value = action.payload;
        }
      )
  },
});

export const dishesSelector = (state: RootState) => state.dishes.value;

export default dishesSlice.reducer;
