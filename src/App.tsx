import React, { useEffect, useState, Fragment } from 'react';
import {Button, MuiThemeProvider} from '@material-ui/core';
import { createTheme, ThemeMode } from 'theme/theme';

import {GuestRoute} from "./guards/GuestRoute";
import {AppRoutes} from './routes/AppRoutes';
import {NavBar} from "./containers/NavBar/NavBar";
import {AuthContainer} from './containers/Auth/Auth.Container';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/store';
import {setAuth} from 'store/modules/auth/authActions'

import {WbSunny, Brightness3} from '@material-ui/icons';

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

  const auth = useSelector((state: RootState) => state.auth.authenticated)
  const dispatch = useDispatch();


  // Check Authentication when Local Storge Changes & Reload The page
  const checkAuthentication = (() =>{
    const token = localStorage.getItem("tkn");
    if(!token){
      dispatch(setAuth(false));
      window.location.reload(false);
    }else{
      dispatch(setAuth(true));
    }
  })

  useEffect(()=>{
    const token = localStorage.getItem("tkn");
    if(token){
      dispatch(setAuth(true));
    }
    window.onstorage = () => {
      checkAuthentication()  
    };
  },[])

  return (
    <MuiThemeProvider theme={theme}>
      <Fragment>
        <NavBar/>
        <Button color='primary'  size="small"
          onClick={changeThemeMode}
          style={{position: 'fixed',right: 0, top: '100px'}}>
            {isDark ? <WbSunny/> : <Brightness3/>}
        </Button>
        <div className='content'>
          <GuestRoute path='/login' component={AuthContainer}/>
          <AppRoutes/> 
        </div>
        
      </Fragment>
    </MuiThemeProvider>
    
  );
}

export default App;
