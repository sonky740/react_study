import { createStore } from 'redux';

export const COUNTER_CONSTANTS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  TOGGLE: 'toggle',
}

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === COUNTER_CONSTANTS.INCREMENT) {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }

  if (action.type === COUNTER_CONSTANTS.DECREMENT) {
    return {
      ...state,
      counter: state.counter - action.value,
    };
  }

  if (action.type === COUNTER_CONSTANTS.TOGGLE) {
    return {
      ...state,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
