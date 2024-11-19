import { Box, Card, CardContent, Typography } from '@mui/material';
import { useAppSelector } from '../../app/hooks';
// import CityInput from '../components/CityInput';

const WeatherInfo = () => {
  const weather = useAppSelector((state) => state.Weather.weather);

  return (
    <>
      {/* <CityInput /> */}
      <Box display='flex' justifyContent='center' alignItems='center' p={2}>
        <Card sx={{ maxWidth: '80%', width: '100%' }}>
          <CardContent>
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
      </Box>
    </>

  );
};

export default WeatherInfo;
