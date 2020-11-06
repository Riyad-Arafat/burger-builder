import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useStyles } from ".././Auth.Style";
import { setAuth } from 'store/modules/auth/authActions';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/store';

export const AuthForm = () => {
  const classes = useStyles();
  const auth = useSelector((state: RootState) => state.auth.authenticated);
  const dispatch = useDispatch();



  const onSubmit = () => {
    const token = localStorage.getItem("tkn");
    if(!token){
      localStorage.setItem("tkn" , "True");
      dispatch(setAuth(true));
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