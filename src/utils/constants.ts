import {
  WS_CONNECTION_START,
  WS_CONNECTION_CLOSE,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_ORDERS,
  WS_AUTH_CONNECTION_START,
  WS_AUTH_CONNECTION_CLOSE,
  WS_AUTH_CONNECTION_SUCCESS,
  WS_AUTH_CONNECTION_CLOSED,
  WS_AUTH_CONNECTION_ERROR,
  WS_AUTH_GET_ORDERS,
} from "../services/actions/action-types";
import { TSocketMiddlewareActions } from "../services/types/data";

//export const wsUrl = 'wss://norma.nomoreparties.space/orders/all';
export const wsUrl = "wss://norma.nomoreparties.space/orders";

export const wsActions: TSocketMiddlewareActions = {
  wsInit: WS_CONNECTION_START,
  wsClose: WS_CONNECTION_CLOSE,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_ORDERS,
};

export const wsActionsAuth: TSocketMiddlewareActions = {
  wsInit: WS_AUTH_CONNECTION_START,
  wsClose: WS_AUTH_CONNECTION_CLOSE,
  onOpen: WS_AUTH_CONNECTION_SUCCESS,
  onClose: WS_AUTH_CONNECTION_CLOSED,
  onError: WS_AUTH_CONNECTION_ERROR,
  onMessage: WS_AUTH_GET_ORDERS,
};

export const MAX_ITEMS: number = 6;
export const ITEM_DISPLAY: number = 48;
