export enum IngreActionTypes {  
    ADD_INGREDIENT = "ADD_INGREDIENT",
    REMOVE_INGREDIENT = "REMOVE_INGREDIENT",
    UPDATE_TOTALPRICE = "UPDATE_TOTALPRICE",
}

export enum AuthActionTypes {
    AUTHENTICATE = "AUTHENTICATE",
}

export interface StateAction<T = any>  {
    type: AuthActionTypes | IngreActionTypes ,
    payload: Partial<T>;
}
