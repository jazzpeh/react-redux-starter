/* eslint-disable no-console */
import { uiStartLoading, uiStopLoading } from './ui';

const CounterActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

/**
 * Used to simulate retrieving data from an external source api
 * @returns {Promise}
 */
const mockAPI = () => new Promise((resolve) => setTimeout(resolve, 5000));

/**
 * @returns {Promise}
 */
const incrementCounter = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(uiStartLoading);

      await mockAPI();

      dispatch({
        type: CounterActionTypes.INCREMENT,
        counter: getState().counter.value + 1,
      });
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(uiStopLoading);
    }
  };
};

/**
 * @returns {Promise}
 */
const decrementCounter = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(uiStartLoading);

      await mockAPI();

      dispatch({
        type: CounterActionTypes.INCREMENT,
        counter: getState().counter.value - 1,
      });
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(uiStopLoading);
    }
  };
};

export { CounterActionTypes, incrementCounter, decrementCounter };
