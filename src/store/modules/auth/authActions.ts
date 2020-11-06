import { AuthActionTypes } from 'store/actionTypes';
import { AuthState } from './authTypes';


export const setAuth = (payload: boolean) =>{
  return (
    {
      type: AuthActionTypes.AUTHENTICATE,
      payload: {["authenticated"]: payload}
    }
  )
}