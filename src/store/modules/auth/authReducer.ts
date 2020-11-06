import { AuthState } from "./authTypes";
import { createReducer } from "tools/Redux";
import { AuthActionTypes } from "store/actionTypes";


export const initialAuthState: AuthState = {
    authenticated: false,
};

export const authReducer = createReducer<AuthState>(initialAuthState, AuthActionTypes);
