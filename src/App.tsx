import { Container } from "@mui/material";
import Header from "components/Header";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "routes";

function App() {
  return (
    <Container maxWidth="xl">
      <BrowserRouter>
        <Header />
        <MainRoutes />
      </BrowserRouter>
    </Container>
  );
}

export default App;
