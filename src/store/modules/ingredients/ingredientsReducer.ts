import {IngredintsActionTypes, StateIngredientsAction} from './actionType';

import {DisabledInfo, Ingredients } from '../../../types/commonInterface';


const INGREDIENTS_PRICE:Ingredients = {
    Cheese : 2,
    Meat : 3.5,
    Salad : 2.65,
    Bacon : 5.2,
}

export const initialAuthState:Ingredients = {
    Cheese: 0 ,
    Meat: 0,
    Salad: 0,
    Bacon:0 ,
};


export const updateState = <T>(state: T, payload: Partial<T>) => {

    return(
    
        {
            ...state,
            ...payload,
        }
    )
};



export const createReducer = <T = any>(
    initialState: T,
    actions = IngredintsActionTypes
  ) => (state: T = initialState, { type, payload }: StateIngredientsAction<T>) => {
    if (type in actions) {
        return updateState(state, payload);
    }
    return state;
};


export const ingredientsReducer = createReducer<any>(initialAuthState);