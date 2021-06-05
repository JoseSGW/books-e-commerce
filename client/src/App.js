import React, { useEffect } from 'react';
import { AppRouter } from "./routers/AppRouter"
import './App.css';
import GlobalStyle, { styles } from "./globalStyles"
import { ThemeProvider } from "styled-components";
import { setUser } from './actions/userLoggedIn';
import { useDispatch } from 'react-redux';
import { CookiesProvider } from 'react-cookie';



function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('user');
    if (userLoggedIn) {
      dispatch(setUser(JSON.parse(userLoggedIn)))
    }
  }, [])


  return (
    <CookiesProvider>
      <ThemeProvider theme={{ styles }}>
        <GlobalStyle />
        <AppRouter />
      </ThemeProvider>
    </CookiesProvider>
  );
}

export default App;
