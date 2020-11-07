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
      main: "#DDD"
    },
    text:{
      primary: "#DDD333",
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
      main:'#071907ad',
      light:'#DDD'
    },
    text:{
      primary: "#071907ad",
    },
    background: {
      paper: '#071907ad',
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