import { StateAction} from 'store/actionTypes';

export const updateState = <T>(state: T, payload: Partial<T>) => {
    return(
      {
        ...state,
        payload,
      }
    )
};


export const createReducer = <T = any>(
    initialState: T,
    actions: any,
  ) => (state: T = initialState, { type, payload }: StateAction<T>) => {
    if (type in actions) {
      return updateState(state, payload);
    }
    return state;
};
