import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_MESSAGE,
  WS_CONNECTION_CLOSE,
	WS_CLEAR_STORE
} from '../services/actions/action-types';

export const WS_ORDERS_ALL = 'wss://norma.nomoreparties.space/orders/all';
export const WS_ORDERS = 'wss://norma.nomoreparties.space/orders';

export const WS_ACTIONS = {
  wsInit: WS_CONNECTION_START,
  wsClose: WS_CONNECTION_CLOSE,
	wsClearStore: WS_CLEAR_STORE,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE
};

export const MAX_ITEMS = 6;
export const ITEM_DISPLAY = 48;