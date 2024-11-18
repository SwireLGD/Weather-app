import { Box, Container, createTheme, Paper, Switch, ThemeProvider, Typography } from "@mui/material";
import AppToolbar from "./components/AppToolbar/AppToolbar";
import WeatherInfo from "./features/weather/Weather.tsx";
import CityInput from "./features/components/CityInput.tsx";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [mode, setMode] = useState(true);

  const theme = createTheme({
    components: {
        MuiTextField: {
            defaultProps: {
                variant: 'outlined',
                fullWidth: true,
            }
        }
    },
    palette: {
        mode: mode ? 'dark' : 'light',
    },
  });
  
  const handleSwitch = () => {
    if (mode) {
      setMode(false);
    } else {
      setMode(true)
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0} sx={{height: '100vh'}} square>
        <header>
          <Box display="flex" alignItems="center">
            <Switch
              checked={mode}
              onChange={handleSwitch}
            />
            <Typography sx={{ ml: 1 }}>
              {mode ? "Dark Mode" : "Light Mode"}
            </Typography>
          </Box>
          <AppToolbar />
        </header>
        <main>
          <div className='container-fluid mt-3'>
            <CityInput />
          </div>
          <Container maxWidth="xl">
            <Routes>
              <Route path='/' element={<WeatherInfo />} />
            </Routes>
          </Container>
        </main>
      </Paper>
    </ThemeProvider>
  );
};

export default App;