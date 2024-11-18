import { createSlice } from '@reduxjs/toolkit';
import { IWeatherState } from '../../types';
import { fetchWeather } from './WeatherThunks';

const initialState: IWeatherState = {
  weather: null,
};

const WeatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.weather = action.payload;
      })
      .addCase(fetchWeather.pending, (state) => {
        state.weather = null;
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.weather = null;
      });
  },
});

export default WeatherSlice.reducer;
