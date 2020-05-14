import { CounterActionTypes } from '../../actions/counter';

const initialState = {
  value: 0,
};

/**
 * @param {Object} state
 * @param {Object} action
 * @param {CounterActionTypes} action.type
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
    case CounterActionTypes.DECREMENT:
      return {
        ...state,
        value: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
