import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILED,
  RESET_ORDER,
	SET_ORDER
} from "../actions/order";

const initialState = {
  info: {
    name: "",
    order: {
      number: null,
    },
    success: false,
  },
  isLoading: false,
  hasError: false,
	isModalOpen: false,
	data: null, 
	type: ''
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return { ...state, isLoading: true };
    case CREATE_ORDER_SUCCESS:
      return { ...state, isLoading: false, info: action.payload };
    case CREATE_ORDER_FAILED:
      return { ...state, isLoading: false, hasError: true };
    case SET_ORDER:
      return {
        ...state,
        isModalOpen: true,
        data: action.payload,
        type: action.content,
      };
    case RESET_ORDER:
      return { ...state, isModalOpen: false, data: null, type: "" };
    default:
      return state;
  }
};
