import {
	WS_CONNECTION_SUCCESS,
	WS_CONNECTION_ERROR,
	WS_CLEAR_STORE,
	WS_GET_MESSAGE,
	WS_CONNECTION_CLOSED
} from '../actions/action-types';

const initialState = {
  wsConnected: false,
  orders: [],
	error: null,
	total: 0,
	totalToday: 0,
};

export const wsReducer = (state = initialState, action) => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
				error: null
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false,
				error: action.payload
      };

    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false,
				error: null
      };

    case WS_GET_MESSAGE:
      return {
        ...state,
        orders: action.payload.orders,
				total: action.payload.total,
				totalToday: action.payload.totalToday,
      };
    case WS_CLEAR_STORE:
      return {
        ...state,
        orders: initialState.orders
      };

    default:
      return state;
  }
};