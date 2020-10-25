import React from 'react';
import {BurgerIngredient} from './BurgerIngredient/BurgerIngredient';
import {Ingredient} from './Types/Types';
import './Burger.css';


export const Burger = (props: any) => {
    const {ingredients} = props;
    let transFormedIngtedints:JSX.Element[] | JSX.Element = Object.keys(ingredients)
    .map(iKey =>{
        return [...Array(ingredients[iKey])].map((_,i) => {
            return <BurgerIngredient type={iKey} key={i+iKey}/>
        })
    }).reduce((arr, el) => {
        return arr.concat(el);
    },[]);

    if(transFormedIngtedints.length === 0){
        transFormedIngtedints = <p>Please Add ingredients</p>
    }
    return(
        <div className='Burger'>
            <BurgerIngredient type={Ingredient.BreadTop}/>
            {transFormedIngtedints}
            <BurgerIngredient type={Ingredient.BreadBottom}/>
        </div>
    
    )
}