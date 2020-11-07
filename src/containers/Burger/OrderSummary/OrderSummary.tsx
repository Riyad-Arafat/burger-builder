import React, {Fragment} from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@material-ui/core";

import {Ingredients} from 'types/commonInterface';

interface ModalProps{
    label: string,
    ingredients: Ingredients,
    totalPrice: number
    
}

export const OrderSummary = React.memo(
    ({label, ingredients, totalPrice}:ModalProps) =>{

    const Ingredients = Object.keys(ingredients)
    .map(iKey => { 
        return(
            <TableRow>
                <TableCell>{iKey}</TableCell>
                <TableCell><b>{ingredients[iKey]}</b></TableCell>
            </TableRow>
        )
        
    })
    return(
    <Fragment>
        <div style={{width:"450px"}}>
            <h3>{label}</h3>
            <TableContainer>
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell>Ingredient</TableCell>
                        <TableCell>Amount</TableCell>
                        
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {Ingredients}
                    </TableBody>
                </Table>
            </TableContainer>
            <TableRow>
                <TableCell>Total Price:</TableCell>
                <TableCell><b>{totalPrice.toFixed(2)}$</b></TableCell>
            </TableRow>
            <br/>
        </div>
        
    </Fragment>
    )   

});