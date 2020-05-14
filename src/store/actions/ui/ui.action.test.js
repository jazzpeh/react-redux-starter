import { UIActionTypes, uiStartLoading, uiStopLoading } from '.';

describe('ui action creators', () => {
  describe('uiStartLoading', () => {
    it('should return an action with type `UI_START_LOADING`', () => {
      const expectedAction = {
        type: UIActionTypes.UI_START_LOADING,
      };
      expect(uiStartLoading()).toEqual(expectedAction);
    });
  });

  describe('uiStopLoading', () => {
    it('should return an action with type `UI_STOP_LOADING` and -1 to counter', () => {
      const expectedAction = {
        type: UIActionTypes.UI_STOP_LOADING,
      };
      expect(uiStopLoading()).toEqual(expectedAction);
    });
  });
});
