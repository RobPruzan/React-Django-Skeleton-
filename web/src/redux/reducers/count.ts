export interface CountState {
  count: number;
}

export const DEFAULT_COUNT_STATE: CountState = {
  count: 0,
};

export enum CountActions {
  INCREMENT = 'INCREMENT',
}

interface IncrementAction {
  type: CountActions.INCREMENT;
}

export const CountReducer = (
  state: CountState = DEFAULT_COUNT_STATE,
  action: IncrementAction
) => {
  switch (action.type) {
    case CountActions.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};
