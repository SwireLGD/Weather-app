import { Box, Card, CardContent, CircularProgress, Typography } from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import CityInput from '../components/CityInput';

const WeatherInfo = () => {
  const { weather, isLoading } = useAppSelector((state) => state.Weather);

  return (
    <>
      <CityInput />
      <Box display='flex' justifyContent='center' alignItems='center' p={2}>
        {isLoading ? (
          <CircularProgress />
        ) : weather ? (
          <Card sx={{ maxWidth: '80%', width: '100%' }}>
            <CardContent>
              <Box display='flex' justifyContent='start' alignItems='center' mb={2}>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                <Typography variant='h5'> {weather.weather[0].description} </Typography>
              </Box>
              <Typography variant='h5' component='div'>
                Temperature: {weather?.main.temp}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Max Temperature: {weather?.main.temp_max}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Min Temperature: {weather?.main.temp_min}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Feels like: {weather?.main.feels_like}
              </Typography>
            </CardContent>
          </Card>
        ) : (
          <Typography variant='body1' color='text.secondary'>
            No weather data available.
          </Typography>
        )}
      </Box>
    </>
  );
};

export default WeatherInfo;
