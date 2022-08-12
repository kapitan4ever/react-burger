import { GET_ORDER_DETAILS } from "../actions/orderDetails";

const defaultState = {
  name: "",
  order: {
    number: null,
  },
  success: false,
};
export const orderDetailsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_ORDER_DETAILS:
      return {
        ...state,
        name: action.payload.name,
        order: action.payload.order,
        success: action.payload.success,
      };
    default:
      return state;
  }
};

export const orderDetailsAction = (payload) => ({
  type: GET_ORDER_DETAILS,
  payload,
});
