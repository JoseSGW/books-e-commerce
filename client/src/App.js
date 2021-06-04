import React, { useEffect } from 'react';
import { AppRouter } from "./routers/AppRouter"
import './App.css';
import GlobalStyle, { styles } from "./globalStyles"
import { ThemeProvider } from "styled-components";
import { setUser } from './actions/userLoggedIn';
import { useDispatch } from 'react-redux';



function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('user');
    if (userLoggedIn) {
      dispatch(setUser(JSON.parse(userLoggedIn)))
    }
  }, [])


  return (

    <ThemeProvider theme={{ styles }}>
      <GlobalStyle />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
