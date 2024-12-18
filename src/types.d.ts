export interface IWeather {
  weather: {
    icon: string;
    description: string;
  }[];

  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
  };
}

export interface IWeatherState {
  weather: IWeather | null;
  isLoading: boolean;
}
