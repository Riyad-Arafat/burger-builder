import React from 'react';
import {createStyles, makeStyles, Theme,
    TableCell,
    TableRow,
} from '@material-ui/core';
import { CehckoutForm } from './CheckoutForm/CheckoutForm';
import { RootState } from 'store/store';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        checkout: {
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            height:"91.4vh",
            padding: '77px 10px',
        },
    })
)

export const CheckoutContainer = () => {
    const classes = useStyles();
    const totalPrice = useSelector((state:RootState) => state.ingr.totalPrice)

    return(

        <div className={classes.checkout}>
            <div style={{display:"flex", width:"100%", justifyContent: "center"}}>
                <TableRow>
                    <TableCell>Total Price:</TableCell>
                    <TableCell><b>{totalPrice.toFixed(2)}$</b></TableCell>
                </TableRow>
            </div>
            <CehckoutForm/>
            <div><h1>Order Now</h1></div>

            
        </div>
    )
}