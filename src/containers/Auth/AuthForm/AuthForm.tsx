import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useStyles } from ".././Auth.Style";

export const AuthForm = () => {
  const classes = useStyles();


  const onSubmit = () => {
    const token = localStorage.getItem("tkn");
    if(!token){
      localStorage.setItem("tkn" , "True")
      // setAuth(true)
      setTimeout(() => {
        window.location.reload(false);
      }, 2000)
        
    }
  }

  return(
      <div className={classes.form}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={onSubmit}
        >
          Sign In
        </Button>
      </div>
  )
};