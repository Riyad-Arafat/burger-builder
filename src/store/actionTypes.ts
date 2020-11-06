export enum ActionTypes {
    AUTHENTICATE = "AUTHENTICATE",
    ADD_INGREDIENT = "ADD_INGREDIENT",
    REMOVE_INGREDIENT = "REMOVE_INGREDIENT",
    UPDATE_TOTALPRICE = "UPDATE_TOTALPRICE",
}



export interface StateAction<T = any>  {
    type: ActionTypes,
    payload: Partial<T>;
}
