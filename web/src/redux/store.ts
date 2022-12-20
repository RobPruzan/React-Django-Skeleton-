import {
  createStore,
  combineReducers,
  applyMiddleware,
} from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { CountReducer, CountState } from './reducers/count';
export interface RootState {
  countState: CountState;
  // counter: CounterState;
}

export const store = createStore(
  combineReducers({
    countState: CountReducer,
    // counterState: CounterReducer
  }),
  composeWithDevTools(applyMiddleware())
);
