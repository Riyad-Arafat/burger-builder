import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {Link} from 'react-router-dom';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export const NavBar = React.memo(() => {
    const [isauth, setIsauth] = useState(false) 

    const classes = useStyles();

    useEffect(()=>{
        const token = localStorage.getItem("tkn");
        if(token){
            setIsauth(true)
        }
    },[])
  return (
        <AppBar position="sticky" className={classes.root}>
            <Toolbar>
            <Typography variant="h6" className={classes.title}>
                Burger Builder Tool
            </Typography>
            <Button color="inherit">
                <Link to="/">Create Burger</Link>
            </Button>
            <Button color="inherit">
            {isauth ?
                <Link to="/checkout" >CheckOut</Link>:
                <Link to="/login" >Login</Link>
            }
            </Button>
            </Toolbar>
        </AppBar>

    );
});
