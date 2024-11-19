import {
  Box,
  Container,
  Paper,
  ThemeProvider,
  Typography,
} from '@mui/material';
import AppToolbar from './components/AppToolbar/AppToolbar';
import WeatherInfo from './features/weather/Weather.tsx';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { theme, ThemeSwitch } from './theme.ts';

const App = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  const handleSwitch = () => setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeProvider theme={theme(mode)}>
      <Paper elevation={0} sx={{ height: '100vh' }} square>
        <header>
          <Box display='flex' alignItems='center'>
          <ThemeSwitch checked={mode === 'dark'} onChange={handleSwitch} />
          </Box>
          <AppToolbar />
        </header>
        <main>
          <Container maxWidth='xl'>
            <Routes>
              <Route path='/' element={<WeatherInfo />} />
              <Route path="*" element={<Typography variant="h2">Not Found</Typography>} />
            </Routes>
          </Container>
        </main>
      </Paper>
    </ThemeProvider>
  );
};

export default App;