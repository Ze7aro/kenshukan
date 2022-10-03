import React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Routing from "./pages/routing/Routing";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
