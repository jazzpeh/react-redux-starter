import { UIActionTypes } from '../actions/ui';

const initialState = {
  isLoading: false,
};

/**
 * @param {Object} state
 * @param {Object} action
 * @param {UIActionTypes} action.type
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UIActionTypes.UI_START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case UIActionTypes.UI_STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
