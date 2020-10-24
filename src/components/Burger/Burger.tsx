import React from 'react';
import {BurgerIngredient} from './BurgerIngredient/BurgerIngredient';
import {Ingredient} from './Types/Types';
import './Burger.css';


export const Burger = (props: any) => {
    const {ingredients} = props
    const transFormedIngtedints = Object.keys(ingredients)
    .map(iKey =>{
        return [...Array(ingredients[iKey])].map((_,i) => {
            console.log(iKey)
            return <BurgerIngredient type={iKey} key={i}/>
        })
    })

    return(
        <div className='Burger'>
            <BurgerIngredient type={Ingredient.BreadTop}/>
            {transFormedIngtedints}
            <BurgerIngredient type={Ingredient.BreadBottom}/>
        </div>
    
    )
}