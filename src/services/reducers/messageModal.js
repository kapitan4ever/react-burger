import {
  CLOSE_LOADING_MODAL,
  CLOSE_ERROR_MODAL,
} from "../actions/messageModal";

const defaultState = {
  errorPopup: false,
  loadingPopup: false,
};

export const messageModalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CLOSE_ERROR_MODAL:
      return {
        errorPopup: false,
        loadingPopup: false,
      };
    case CLOSE_LOADING_MODAL:
      return {
        errorPopup: false,
        loadingPopup: false,
      };
    default:
      return state;
  }
};

export const closeErrorModal = () => ({
  type: CLOSE_ERROR_MODAL,
});
export const closeLoadingModal = () => ({
  type: CLOSE_LOADING_MODAL,
});
