import { Container } from "@mui/material";
import AppToolbar from "./components/AppToolbar/AppToolbar";
import WeatherInfo from "./features/weather/Weather.tsx";
import CityInput from "./features/components/CityInput.tsx";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <header>
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
    </>
  );
};

export default App;