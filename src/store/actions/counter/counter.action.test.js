import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { CounterActionTypes, incrementCounter, decrementCounter } from '.';
import { UIActionTypes } from '../ui';

const mockStore = configureMockStore([thunk]);

describe('counter action creators', () => {
  describe('incrementCounter', () => {
    it('should return an action with type `INCREMENT` and +1 to counter', () => {
      const counter = { value: 0 };
      const store = mockStore({ counter });
      const expectedActions = [
        { type: UIActionTypes.UI_START_LOADING },
        {
          type: CounterActionTypes.INCREMENT,
          value: counter.value + 1,
        },
        { type: UIActionTypes.UI_STOP_LOADING },
      ];
      return store.dispatch(incrementCounter()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('decrementCounter', () => {
    it('should return an action with type `DECREMENT` and -1 to counter', () => {
      const counter = { value: 5 };
      const store = mockStore({ counter });
      const expectedActions = [
        { type: UIActionTypes.UI_START_LOADING },
        {
          type: CounterActionTypes.DECREMENT,
          value: counter.value - 1,
        },
        { type: UIActionTypes.UI_STOP_LOADING },
      ];
      return store.dispatch(decrementCounter()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
