import { LOADER_ACTION_TYPES } from '../consts';

const setLoader = () => {
  return {
    type: LOADER_ACTION_TYPES.SET_LOADER,
  };
};

const clearLoader = () => {
  return {
    type: LOADER_ACTION_TYPES.CLEAR_LOADER,
  };
};

export {
  setLoader,
  clearLoader,
};
