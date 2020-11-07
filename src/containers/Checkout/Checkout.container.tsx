import React, {CSSProperties, Fragment} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core';

import {Ingredients} from 'types/commonInterface';
import { CehckoutForm } from './CheckoutForm/Form';



const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        root: {
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            height: "100vh",
            marginBlockStart: '-21px',

        },
    })
)

export const CheckoutContainer = () => {
    const classes = useStyles();

    return(
        <Fragment>
            <div className={classes.root}>
                <h1>Order Now</h1>
                <CehckoutForm/>
            </div>
        </Fragment>
        
    )
}