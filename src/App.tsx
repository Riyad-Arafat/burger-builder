import React, {useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import {theme} from './theme/theme'

import {GuestRoute} from "./guards/GuestRoute";
import {AppRoutes} from './routes/AppRoutes';
import {NavBar} from "./containers/NavBar/NavBar";

import './App.css';

function App() {

  useEffect(()=> {
    const token = localStorage.getItem("tkn");
    if(!token){
      localStorage.setItem("tkn" , "True")
    }
  },[])
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <NavBar/>
          <GuestRoute path='/login' render={() => <h1>Login Page</h1>}/>
          <AppRoutes/>
        </BrowserRouter>
      </div>
    </ThemeProvider>
    
  );
}

export default App;
