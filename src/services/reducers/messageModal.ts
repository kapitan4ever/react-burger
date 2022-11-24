import {
  CLOSE_LOADING_MODAL,
  CLOSE_ERROR_MODAL,
} from "../actions/messageModal";
import { TCloseModalAction } from "../actions/messageModal";

export type TMessageModalInitialState = {
  errorPopup: boolean;
  loadingPopup: boolean;
};

const initialState: TMessageModalInitialState = {
  errorPopup: false,
  loadingPopup: false,
};

export const messageModalReducer = (
  state = initialState,
  action: TCloseModalAction
): TMessageModalInitialState => {
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
