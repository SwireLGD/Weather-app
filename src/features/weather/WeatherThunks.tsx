import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { IWeather } from '../../types';
import axios from 'axios';

export const fetchWeather = createAsyncThunk<IWeather, {city: string; units: string}>(
  'Weather/fetchWeather',
  async ({city, units}, { rejectWithValue }) => {
    try {
      const response = await axiosApi.get<IWeather>(
        `?q=${city}&appid=9f6861a874957b96fdf0059a500e7d34&units=${units}`,
      );
      return response.data;
    } catch (e) {
      if (axios.isAxiosError(e) && e.response?.status === 404) {
        alert('city not found');
      }
      return rejectWithValue('Something went wrong');
    }
  },
);