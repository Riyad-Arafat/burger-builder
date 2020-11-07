import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {Link} from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import { RootState } from 'store/store';
import { setAuth } from 'store/modules/auth/authActions';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      background: theme.palette.background.paper,
      color: theme.palette.text.hint,
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export const NavBar = React.memo(() => {
  const auth = useSelector((state: RootState) => state.auth.authenticated)
  const classes = useStyles();
  const dispatch = useDispatch()

  const logOut = () => {
    const token = localStorage.getItem("tkn");
    if(token){
      localStorage.removeItem("tkn")
      dispatch(setAuth(false));
    }
  }

  return (
    <AppBar position="relative" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link to="/">Burger Builder Tool</Link>
        </Typography>
        {auth ?
          (<>
          <Button color="secondary"><Link to="/checkout">CheckOut</Link></Button>
          <Button onClick={logOut} color="secondary">logOut</Button>
          </>)
          :
          <Button color="secondary"><Link to="/login" >Login</Link></Button>
        }
      </Toolbar>
    </AppBar>

  );
});
