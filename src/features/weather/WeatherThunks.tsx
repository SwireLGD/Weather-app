import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import { IWeather } from "../../types";

export const fetchWeather = createAsyncThunk<IWeather, string>(
    'Weather/fetchWeather',
    async (city: string) => {
        const response = await axiosApi.get<IWeather>(`?q=${city}&appid=9f6861a874957b96fdf0059a500e7d34&units=metric`);
        return response.data;
    }
);