import React, { useEffect, useState } from 'react';
import {Button, MuiThemeProvider} from '@material-ui/core';
import { createTheme, ThemeMode } from 'theme/theme';

import {GuestRoute} from "./guards/GuestRoute";
import {AppRoutes} from './routes/AppRoutes';
import {NavBar} from "./containers/NavBar/NavBar";
import {AuthContainer} from './containers/Auth/Auth.Container';

import './App.css';

const App = () => {

  const themeMode = localStorage.getItem('themeMode');
  const [isDark, setDark] = useState(themeMode === 'dark');

  const changeThemeMode = () => {
    const mode = isDark ? 'light' : 'dark';
    setDark(!isDark);
    localStorage.setItem('themeMode', mode);
  };

  useEffect(()=>{
    const themeMode = localStorage.getItem('themeMode');
    if (themeMode) {
      setDark(themeMode === 'dark');
    }
  },[])

  const mode = isDark ? ThemeMode.DARK : ThemeMode.LIGHT;
  const theme = React.useMemo(() => createTheme(mode), [mode]);


  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <NavBar/>
        <Button color='primary' variant="contained" size="small"
        onClick={changeThemeMode}
        style={{position: 'fixed',right: 0, top: '100px'}}>
          {isDark ? "light Mode" : "Dark Mode"}
        </Button>
        <GuestRoute path='/login' component={AuthContainer}/>
        <AppRoutes/> 
      </div>
    </MuiThemeProvider>
    
  );
}

export default App;
