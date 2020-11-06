import {ActionTypes, StateAction} from 'store/actionTypes';

export const updateState = <T>(state: T, payload: Partial<T>) => {
    return(
      {
        ...state,
        ...payload,
      }
    )
};


export const createReducer = <T = any>(
    initialState: T,
    actions = ActionTypes,
  ) => (state: T = initialState, { type, payload }: StateAction<T>) => {
    if (type in actions) {
      console.log("[PAY]",payload)
      console.log("[STATE]",state)

      return updateState(state, payload);
    }
    return state;
};
