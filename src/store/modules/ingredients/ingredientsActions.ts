import {IngredintsActionTypes} from './actionType';
import { Ingredients } from 'types/commonInterface';
import { useSelector } from 'react-redux';




export const setIngredient = ( key: string, value: number) =>{
  
  return (
    
    {
      type: IngredintsActionTypes.ADD_INGREDIENT,
      payload: {[key]: value}
    }
  )
};