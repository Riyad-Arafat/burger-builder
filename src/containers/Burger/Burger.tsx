import React, {useEffect, useState, useCallback} from 'react';
import {BurgerIngredient} from './BurgerIngredient/BurgerIngredient';
import {IngredienType} from '../../types/commomEnum';
import '../../assets/Burger/Burger.css';
import { Ingredients } from '../../types/commonInterface';

interface BurgerProps {
    ingredients:Ingredients,
    totalPrice: number
}

export const Burger = ({ingredients, totalPrice}: BurgerProps) => {
    const [addedIngredints, setAddedIngredints] = useState< JSX.Element[] | JSX.Element>([]);

    const addIngredients = useCallback(() => {
        let newIngred = (Object.keys(ingredients)
        .map(iKey =>{
            return [...Array(ingredients[iKey])].map((_,i) => {
                return <BurgerIngredient type={iKey} key={i+iKey}/>
            })
        }).reduce((arr, el) => {
            return arr.concat(el);
        },[]));
        setAddedIngredints(newIngred);
        if(newIngred.length === 0){
            setAddedIngredints(<p>Plz Add Ingredints</p>)
        }
    },[ingredients])

    useEffect(()=>{
        addIngredients();
    },[addIngredients, totalPrice])

    return(
        <div className="Burger-Container">
            <div className='Burger'>
                <br/>
                <span><b>{totalPrice.toFixed(2)}</b>$</span>
                <BurgerIngredient type={IngredienType.BreadTop}/>
                {addedIngredints}
                <BurgerIngredient type={IngredienType.BreadBottom}/>
            </div>
        </div>
        
    
    )
}