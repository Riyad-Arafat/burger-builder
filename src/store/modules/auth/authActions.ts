import {AuthActionTypes} from './actionTypes';
import { AuthState } from './authTypes';


// export const setAuth = (state:boolean) => {
//     console.log("setAuth",state)
//     return ({
//         type: ActionTypes.AUTHENTICATE,
//         auth: state
//     })
// }

export const createAction = <K, V = any>(
    key: keyof K,
    value: V,
    type: AuthActionTypes
  ) => {
    return(
    {
      key,
      payload: { [key]: value },
      type,
    })
};

export const setAuth = (payload: boolean) =>
  createAction<AuthState, boolean>(
    "authenticated",
    payload,
    AuthActionTypes.AUTHENTICATE
);