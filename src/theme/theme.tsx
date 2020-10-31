import { createMuiTheme, ThemeOptions } from '@material-ui/core';

export enum ThemeMode {
  DARK = 'dark',
  LIGHT = 'light',
}

const darkTheme: ThemeOptions = {
  palette: {
    primary:{
      main:'#DDD',
    },
    text:{
      primary: "#DDD"
    },
    background: {
      paper: '#272D33',
      default: '#272D33'
    },
  },
};

const lightTheme: ThemeOptions = {
  palette: {
    primary:{
      main:'#071907ad',
    },
    background: {
      paper: '#071907ad',
    },
  },
};

export const createTheme = (mode: ThemeMode) => {
  const currentTheme = mode === ThemeMode.DARK ? darkTheme : lightTheme;
  return createMuiTheme(currentTheme);
};