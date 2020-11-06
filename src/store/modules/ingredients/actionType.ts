export enum IngredintsActionTypes {
    ADD_INGREDIENT = "ADD_INGREDIENT",
    REMOVE_INGREDIENT = "REMOVE_INGREDIENT",
}



export interface StateIngredientsAction<T = any>  {
    type: IngredintsActionTypes,
    payload: Partial<T>;
}