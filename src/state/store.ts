import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from './slices/restaurantsSlice';
import dishesReducer from './slices/dishesSlice';
import chefsReducer from './slices/chefRestaurants';


export const store = configureStore({
  reducer: {
    restaurants: restaurantReducer,
    dishes: dishesReducer,
    chefs: chefsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;