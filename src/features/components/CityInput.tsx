import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { fetchWeather } from '../weather/WeatherThunks';
import { TextField, Box, Button, Typography, styled, Switch } from '@mui/material';

const CityInput: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [units, setUnits] = useState<'metric' | 'imperial'>('metric');
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSwitch = () =>
    setUnits((prevMode) => (prevMode === 'metric' ? 'imperial' : 'metric'));

  const handleSearch = () => {
    if (city) {
      dispatch(fetchWeather({ city, units }));
    } else {
      alert("You didn't write the name!");
    }
  };

  const UnitsSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: '#1890ff',
          ...theme.applyStyles('dark', {
            backgroundColor: '#177ddc',
          }),
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
      ...theme.applyStyles('dark', {
        backgroundColor: 'rgba(255,255,255,.35)',
      }),
    },
  }));

  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' p={2}>
      <TextField
        id='search'
        value={city}
        onChange={handleChange}
        placeholder='Enter the city name'
        variant='outlined'
        sx={{
          width: '75%',
          '& .MuiOutlinedInput-root': {
            borderRadius: 3,
          },
        }}
      />
      <Button onClick={handleSearch} variant='contained' sx={{ mt: 2 }}>
        Find
      </Button>
      <Box mt={2} display='flex' alignItems='center' justifyContent='center'>
        <Typography mr={1}>
          Show temperature in: {units === 'metric' ? 'Celsius' : 'Fahrenheit'}
        </Typography>
        <UnitsSwitch
          checked={units === 'imperial'}
          onChange={handleSwitch}
          inputProps={{ 'aria-label': 'unit switch' }}
        />
      </Box>
    </Box>
  );
};

export default CityInput;
