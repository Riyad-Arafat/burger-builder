import React, { useState, useEffect, useCallback} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {Link} from 'react-router-dom';
import { useSelector} from 'react-redux';
import { RootState } from 'store/store';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      background: theme.palette.background.paper,
      color: theme.palette.text.primary,
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export const NavBar = React.memo(() => {
  const auth = useSelector((state: RootState) => state.auth.authenticated)
  const classes = useStyles();


  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Burger Builder Tool
        </Typography>
        <Button color="inherit">
          <Link to="/">Create Burger</Link>
        </Button>

        {auth ?
          <Button color="inherit"><Link to="/checkout" >CheckOut</Link></Button>:
          <Button color="inherit"><Link to="/login" >Login</Link></Button>
        }
      </Toolbar>
    </AppBar>

  );
});
