/* eslint-disable no-console */
import { uiStartLoading, uiStopLoading } from '../ui';

export const CounterActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

/**
 * Used to simulate retrieving data from an external source api
 * @returns {Promise}
 */
const mockAPI = () => new Promise((resolve) => setTimeout(resolve, 3000));

/**
 * @returns {Promise}
 */
export const incrementCounter = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(uiStartLoading());

      await mockAPI();

      dispatch({
        type: CounterActionTypes.INCREMENT,
        value: getState().counter.value + 1,
      });
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(uiStopLoading());
    }
  };
};

/**
 * @returns {Promise}
 */
export const decrementCounter = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(uiStartLoading());

      await mockAPI();

      dispatch({
        type: CounterActionTypes.DECREMENT,
        value: getState().counter.value - 1,
      });
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(uiStopLoading());
    }
  };
};
