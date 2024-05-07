import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardData } from '../../types/types';
import { RootState } from '../store';

export interface DishesState {
    value: CardData[];
}

const initialState: DishesState = {
  value: [],
};

const dishesSlice = createSlice({
  name: "dish",
  initialState,
  reducers: {
    addDish: (state, action: PayloadAction<CardData>) => {
      state.value.push(action.payload);
    },
    deleteDish: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter(
        (dish) => dish.title !== action.payload
      );
    },
  },
});

export const { addDish } = dishesSlice.actions;
export const { deleteDish } = dishesSlice.actions;

export const dishesSelector = (state: RootState) => state.dishes.value;

export default dishesSlice.reducer;
