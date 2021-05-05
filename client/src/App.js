import React from 'react';
import { AppRouter } from "./routers/AppRouter"
import logo from './logo.svg';
import './App.css';
import GlobalStyle, { styles } from "./globalStyles"
import { ThemeProvider } from "styled-components";

function App() {
  return (
    
    <ThemeProvider theme={ { styles } }>
      <GlobalStyle />
      <AppRouter/>
    </ThemeProvider>
  );
}

export default App;
