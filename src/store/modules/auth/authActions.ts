import { ActionTypes } from 'store/actionTypes';
import { AuthState } from './authTypes';

export const createAction = <K, V = any>(
    key: keyof K,
    value: V,
    type: ActionTypes
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
    ActionTypes.AUTHENTICATE
);