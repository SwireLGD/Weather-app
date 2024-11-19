import { createSlice } from '@reduxjs/toolkit';
import { IWeatherState } from '../../types';
import { fetchWeather } from './WeatherThunks';

const initialState: IWeatherState = {
  weather: null,
  isLoading: false,
};

const WeatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.weather = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchWeather.pending, (state) => {
        state.weather = null;
        state.isLoading = true;
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.weather = null;
        state.isLoading = false;
      });
  },
});

export default WeatherSlice.reducer;
