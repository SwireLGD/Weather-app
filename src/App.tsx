import { Container } from "@mui/material";
import AppToolbar from "./components/AppToolbar/AppToolbar";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <header>
        <AppToolbar />
      </header>
      <main>
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element />
          </Routes>
        </Container>
      </main>
    </>
  );
};

export default App;