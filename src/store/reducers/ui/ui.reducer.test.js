import reducer from './ui.reducer';
import { UIActionTypes } from '../../actions/ui';

describe('ui reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ isLoading: false });
  });

  it('should handle `UI_START_LOADING`', () => {
    const action = {
      type: UIActionTypes.UI_START_LOADING,
    };
    expect(reducer(undefined, action)).toEqual({ isLoading: true });
  });

  it('should handle `UI_STOP_LOADING`', () => {
    const action = {
      type: UIActionTypes.UI_STOP_LOADING,
    };
    expect(reducer(undefined, action)).toEqual({ isLoading: false });
  });
});
