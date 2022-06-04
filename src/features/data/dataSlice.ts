import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TopRatedMovie } from './models/TopRatedMovie';
import dataService from '../../services/dataService';

interface DataState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;

  topRatedMovies: TopRatedMovie[] | null;
}

const initialState: DataState = {
  isLoading: false,
  isSuccess: false,
  isError: false,

  topRatedMovies: null,
};

export const dataLoading = createAsyncThunk(
  'data/load',
  async (_, thunkApi) => {
    try {
      return await dataService.dataLoading();
    } catch (error) {
      return thunkApi.rejectWithValue('Error al cargar películas');
    }
  }
);

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder

      // LOAD
      .addCase(dataLoading.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(dataLoading.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.topRatedMovies = action.payload;
      })
      .addCase(dataLoading.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.topRatedMovies = null;
      });
  },
});

export const { reset } = dataSlice.actions;

export default dataSlice.reducer;
