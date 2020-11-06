  
import { createStore, combineReducers } from "redux";
import { authReducer } from './modules/auth/authReducer';
import {ingredientsReducer} from './modules/ingredients/ingredientsReducer'
import { AuthState } from "./modules/auth/authTypes";
import { Ingredients } from "types/commonInterface";





export interface RootState {
  auth: AuthState;
  ingredients: Ingredients
}

export const store = createStore(
    combineReducers({
      auth: authReducer,
      ingredients: ingredientsReducer,
    })
  );