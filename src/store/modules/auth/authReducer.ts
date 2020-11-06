import { AuthState } from "./authTypes";
import {AuthActionTypes, StateAuthAction} from './actionTypes'


export const initialAuthState: AuthState = {
    authenticated: false,
};


export const updateState = <T>(state: T, payload: Partial<T>) => {
  console.log("[UPDATE]", payload);
  return {
    ...payload,
  }
};



export const createReducer = <T = any>(
    initialState: T,
    actions = AuthActionTypes
  ) => (state: T = initialState, { type, payload }: StateAuthAction<T>) => {
    if (type in actions) {
      return updateState(state, payload);
    }

    return state;
};


export const authReducer = createReducer<AuthState>(initialAuthState);
