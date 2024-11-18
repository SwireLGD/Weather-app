export interface IWeather {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number; 
}

export interface IWeatherState {
    weather: IWeather | null;
}

export interface ICity {
    city: string | null;
}