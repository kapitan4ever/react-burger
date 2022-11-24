import {
  WS_AUTH_CONNECTION_START,
  WS_AUTH_CONNECTION_CLOSE,
  WS_AUTH_CONNECTION_SUCCESS,
  WS_AUTH_CONNECTION_CLOSED,
  WS_AUTH_CONNECTION_ERROR,
  WS_AUTH_GET_ORDERS,
} from "./action-types";
import { TFeedResponse } from "../types/data";

interface IWsAuthConnectionStart {
  readonly type: typeof WS_AUTH_CONNECTION_START;
}
interface IWsAuthConnectionClose {
  readonly type: typeof WS_AUTH_CONNECTION_CLOSE;
}
interface IWsAuthConnectionSuccess {
  readonly type: typeof WS_AUTH_CONNECTION_SUCCESS;
}
interface IWsAuthConnectionError {
  readonly type: typeof WS_AUTH_CONNECTION_ERROR;
}
interface IWsAuthConnectionClosed {
  readonly type: typeof WS_AUTH_CONNECTION_CLOSED;
}
interface IWsAuthGetMessage {
  readonly type: typeof WS_AUTH_GET_ORDERS;
  payload: TFeedResponse;
}

export type TWsAuthActions =
  | IWsAuthConnectionStart
  | IWsAuthConnectionClose
  | IWsAuthConnectionSuccess
  | IWsAuthConnectionError
  | IWsAuthConnectionClosed
  | IWsAuthGetMessage;

// export const wsActionsAuth = {
//   wsInit: WS_AUTH_CONNECTION_START,
//   wsClose: WS_AUTH_CONNECTION_CLOSE,
//   onOpen: WS_AUTH_CONNECTION_SUCCESS,
//   onClose: WS_AUTH_CONNECTION_CLOSED,
//   onError: WS_AUTH_CONNECTION_ERROR,
//   onMessage: WS_AUTH_GET_ORDERS,
// };