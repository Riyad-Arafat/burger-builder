

export enum AuthActionTypes {
    AUTHENTICATE = "AUTHENTICATE",
}


export interface StateAuthAction<T = any>  {
    type: AuthActionTypes,
    payload: Partial<T>;
}

