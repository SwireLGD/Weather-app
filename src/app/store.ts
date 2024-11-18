import { configureStore } from '@reduxjs/toolkit';
import WeatherReducer from '../features/weather/WeatherSlice'

export const store = configureStore({
  reducer: {
    Weather: WeatherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;