import { LOADER_ACTION_TYPES } from 'store/consts';

const INITIAL_STATE = {
  loader: false,
};

const loaderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADER_ACTION_TYPES.SET_LOADER:
      return { loader: true };
    case LOADER_ACTION_TYPES.CLEAR_LOADER:
      return { loader: false };
    default:
      return state;
  }
};

export default loaderReducer;
