  
import { createStore, combineReducers } from "redux";
import { authReducer } from './modules/auth/authReducer';
import {ingredientsReducer} from './modules/ingredients/ingredientsReducer'
import { AuthState } from "./modules/auth/authTypes";
import { IngredintsReducerState } from "./modules/ingredients/ingredentsTypes";





export interface RootState {
  auth: AuthState;
  ingr: IngredintsReducerState;
}

export const store = createStore(
    combineReducers({
      auth: authReducer,
      ingr: ingredientsReducer,
    })
  );