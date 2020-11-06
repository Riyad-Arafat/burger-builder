import { AuthState } from "./authTypes";
import { createReducer } from "tools/Redux";


export const initialAuthState: AuthState = {
    authenticated: false,
};

export const authReducer = createReducer<AuthState>(initialAuthState);
