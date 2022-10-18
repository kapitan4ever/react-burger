import {
  WS_AUTH_CONNECTION_SUCCESS,
  WS_AUTH_CONNECTION_ERROR,
  WS_AUTH_CONNECTION_CLOSED,
  WS_AUTH_GET_ORDERS,
} from "../actions/action-types";
import { TWsAuthActions } from "../actions/wsAuthActions";
import { TFeed } from "../types/data";

export type TWsAuthInitialState = {
  wsConnected: boolean;
  orders: TFeed[];
  total: number;
  totalToday: number;
	userOrders: {};
};

const initialState: TWsAuthInitialState = {
  wsConnected: false,
  orders: [],
  total: 0,
  totalToday: 0,
	userOrders: {}
};

export const wsAuthReducer = (
  state = initialState,
  action: TWsAuthActions
): TWsAuthInitialState => {
  switch (action.type) {
    // case WS_AUTH_CONNECTION_SUCCESS:
    //   return {
    //     ...state,
    //     wsConnected: true,
    //   };

    // case WS_AUTH_CONNECTION_ERROR:
    //   return {
    //     ...state,
    //     wsConnected: false,
    //   };

    // case WS_AUTH_CONNECTION_CLOSED:
    //   return {
    //     ...state,
    //     wsConnected: false,
    //   };

    // case WS_AUTH_GET_ORDERS:
    //   return {
    //     ...state,
    //     orders: action.payload.orders,
    //     total: action.payload.total,
    //     totalToday: action.payload.totalToday,
		// 		userOrders: { ...action.payload, orders: action.payload.orders },
    //   };

		case WS_AUTH_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
      };
    case WS_AUTH_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false,
      };
    case WS_AUTH_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false,
      };
    case WS_AUTH_GET_ORDERS:
      return {
        ...state,
        userOrders: { ...action.payload, orders: action.payload.orders },
      };
    default:
      return state;
  }
};

