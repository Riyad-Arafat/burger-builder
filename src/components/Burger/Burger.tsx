import React from 'react';
import {BurgerIngredient} from './BurgerIngredient/BurgerIngredient';
import {Ingtedints} from './Types/Types';
import './Burger.css';

export const Burger = () => {

    return(
        <div className='Burger'>
            <BurgerIngredient type={Ingtedints.BreadTop}/>
            <BurgerIngredient type={Ingtedints.Meat}/>
            <BurgerIngredient type={Ingtedints.BreadBottom}/>
        </div>
    
    )
}