import { Container } from "@mui/material";
import AppToolbar from "./components/AppToolbar/AppToolbar";

const App = () => {
  return (
    <>
      <header>
        <AppToolbar />
      </header>
      <main>
        <Container maxWidth="xl">
        </Container>
      </main>
    </>
  );
};

export default App;