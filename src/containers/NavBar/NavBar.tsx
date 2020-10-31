import React, { useState, useEffect, useCallback} from 'react';
// import { useSelector } from 'react-redux'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {Link} from 'react-router-dom';
// import { RootState } from 'store/store.types';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      background: theme.palette.background.paper
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export const NavBar = React.memo(() => {
  // const auth = useSelector((state: RootState) => console.log(state.auth))
  const [isAuth, setIsAuth] = useState(false);
  const classes = useStyles();

  const checkAuthentication = useCallback(() =>{
    const token = localStorage.getItem("tkn");
    if(token){
      setIsAuth(true)
    }
  },[setIsAuth])

  useEffect(()=>{
    checkAuthentication();
  },[checkAuthentication])

  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Burger Builder Tool
        </Typography>
        <Button color="inherit">
          <Link to="/">Create Burger</Link>
        </Button>

        {isAuth ?
          <Button color="inherit"><Link to="/checkout" >CheckOut</Link></Button>:
          <Button color="inherit"><Link to="/login" >Login</Link></Button>
        }
      </Toolbar>
    </AppBar>

  );
});
