import reducer from './counter.reducer';
import { CounterActionTypes } from '../../actions/counter';

describe('counter reducer', () => {
  let value;

  beforeEach(() => {
    value = 0;
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ value });
  });

  it('should handle `INCREMENT`', () => {
    const action = {
      type: CounterActionTypes.INCREMENT,
      value,
    };
    expect(reducer(undefined, action)).toEqual({ value });
  });

  it('should handle `DECREMENT`', () => {
    const action = {
      type: CounterActionTypes.DECREMENT,
      value,
    };
    expect(reducer(undefined, action)).toEqual({ value });
  });
});
