export const UIActionTypes = {
  UI_START_LOADING: 'UI_START_LOADING',
  UI_STOP_LOADING: 'UI_STOP_LOADING',
};

export const uiStartLoading = () => {
  return {
    type: UIActionTypes.UI_START_LOADING,
  };
};

export const uiStopLoading = () => {
  return {
    type: UIActionTypes.UI_STOP_LOADING,
  };
};
