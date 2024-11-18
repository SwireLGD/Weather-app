import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { IWeather } from '../../types';
import axios from 'axios';

export const fetchWeather = createAsyncThunk<IWeather, string>(
  'Weather/fetchWeather',
  async (city, { rejectWithValue }) => {
    try {
      const response = await axiosApi.get<IWeather>(
        `?q=${city}&appid=9f6861a874957b96fdf0059a500e7d34&units=metric`,
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
