import { createMuiTheme, ThemeOptions } from '@material-ui/core';

export enum ThemeMode {
  DARK = 'dark',
  LIGHT = 'light',
}

const darkTheme: ThemeOptions = {
  palette: {
    primary:{
      main:'#DDD333',
    },
    secondary:{
      main: '#DDD',
    },
    text:{
      primary: "#DDD333",
      secondary: "#DDD",
      hint: "#DDD" 
    },
    type: "dark"
  },
  overrides: {
    MuiButtonGroup:{
      root:{
        borderRadius:"15px",
      },
    },
    MuiButton: {
      root: {
        borderRadius:"15px",
      },
    },
  },
};

const lightTheme: ThemeOptions = {
  palette: {
    primary:{
      main: '#071907ad',
    },
    secondary:{
      main: '#DDD',
    },
    text:{
      primary: "#071907ad",
      secondary: "#071907ad",
      hint:"#DDD"

    },
    background: {
      paper: '#3a403b',
    },
    type:"light"
  },
  overrides: {
    MuiButtonGroup:{
      root:{
        borderRadius:"15px",
      },
    },
    MuiButton: {
      root: {
        borderRadius:"15px",
      },
    },
  },
};

export const createTheme = (mode: ThemeMode) => {
  const currentTheme = mode === ThemeMode.DARK ? darkTheme : lightTheme;
  return createMuiTheme(currentTheme);
};