import React, {CSSProperties, Fragment} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core';

import {Ingredients} from 'types/commonInterface';
import { CehckoutForm } from './CheckoutForm/CheckoutForm';



const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        checkout: {
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            height: "100vh",

        },
    })
)

export const CheckoutContainer = () => {
    const classes = useStyles();

    return(

            <div className={classes.checkout}>
                <CehckoutForm/>
                <div><h1>Order Now</h1></div>
                

               
            </div>
  
        
    )
}