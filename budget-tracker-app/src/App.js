import React from "react";
import "./App.css";
import AppContainer from "./components/AppContainer";

import { createTheme, ThemeProvider } from "@mui/material";
import { MainContextProvider } from "./context/context-main";

const theme = createTheme({
  typography: {
    fontFamily: ["Dosis", "sans-serif"].join(","),
  },
});

//////////////////////=====APP=====////////////////////
function App() {
  return (
    <MainContextProvider>
      <ThemeProvider theme={theme}>
        <div className="main">
          <AppContainer></AppContainer>
        </div>
      </ThemeProvider>
    </MainContextProvider>
  );
}

export default App;
