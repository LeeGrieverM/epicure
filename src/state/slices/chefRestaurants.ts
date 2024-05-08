import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IChef } from '../../types/types';
import axios from 'axios';
import { RootState } from '../store';

export interface ChefsState {
    value: IChef[];
}

const initialState: ChefsState = {
  value: [],
};

axios.defaults.baseURL = "http://localhost:3000/v1";

export const fetchChefs = createAsyncThunk(
  "chefs/fetchChefs",
  async (): Promise<IChef[]> => {
    const response = await axios.get<IChef[]>("/chefs");
    return response.data;
  }
);

const chefsSlice = createSlice({
  name: "chef",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchChefs.fulfilled,
        (state, action: PayloadAction<IChef[]>) => {
          state.value = action.payload;
        }
      )
  },
});


export const chefsSelector = (state: RootState) => state.chefs.value;

export default chefsSlice.reducer;
