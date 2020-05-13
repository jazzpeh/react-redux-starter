const UIActionTypes = {
  UI_START_LOADING: 'UI_START_LOADING',
  UI_STOP_LOADING: 'UI_STOP_LOADING',
};

const uiStartLoading = () => {
  return {
    type: UIActionTypes.UI_START_LOADING,
  };
};

const uiStopLoading = () => {
  return {
    type: UIActionTypes.UI_STOP_LOADING,
  };
};

export { UIActionTypes, uiStartLoading, uiStopLoading };
