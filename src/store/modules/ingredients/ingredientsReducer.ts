import { createReducer} from 'tools/Redux';
import { Ingredients } from 'types/commonInterface';

import {IngredintsReducerState } from './ingredentsTypes';


export const INGREDIENTS_PRICE:Ingredients = {
    Cheese : 2,
    Meat : 3.5,
    Salad : 2.65,
    Bacon : 5.2,
}

export const initialAuthState:IngredintsReducerState = {
    ingredients:{
        Cheese: 0,
        Meat: 0,
        Salad: 0,
        Bacon:0,
    },
    totalPrice: 0,
};


export const ingredientsReducer = createReducer<IngredintsReducerState>(initialAuthState);