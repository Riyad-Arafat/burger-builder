import React, {Fragment} from 'react';
import {Ingredients} from '../../types/commonInterface';
interface ModalProps{
    label: string,
    ingredients: Ingredients,
    
}

export const OrderSummary = ({label, ingredients}:ModalProps) =>{
    const Ingredients = Object.keys(ingredients)
    .map(iKey => { 
        return <li style={{width: "auto"}}>
            <b>{iKey}</b>: <span>{ingredients[iKey]}</span>
        
        </li>
    })
    return(
    <Fragment>
        <h3>{label}</h3>
        <div>
            <ul style={{width: "fit-content"}}>{Ingredients}</ul>
        </div>
    </Fragment>
    )   

}