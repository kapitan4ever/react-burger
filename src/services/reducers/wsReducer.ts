import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_ORDERS,
} from "../actions/action-types";
import { TWsActions } from "../actions/wsActions";
import { TFeed } from "../types/data";

type TWsInitialState = {
	wsConnected: boolean;
  orders: TFeed[],
  total: number;
	totalToday: number;
	userOrders: TFeed[],
}

const initialState: TWsInitialState = {
  wsConnected: false,
  orders: [],
  total: 0,
	totalToday: 0,
	userOrders: [],
};

export const wsReducer = (state = initialState, action: TWsActions): TWsInitialState => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
      };
    case WS_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false,
      };
    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false,
      };
    case WS_GET_ORDERS:
      return {
        ...state,
        orders: action.payload.orders,
				total: action.payload.total,
				totalToday: action.payload.totalToday,
      };

    default:
      return state;
  }
};



