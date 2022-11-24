import {
  WS_CONNECTION_START,
  WS_CONNECTION_CLOSE,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_ORDERS,
} from "./action-types";
import { TFeedResponse } from "../types/data";

interface IWsConnectionStart {
  readonly type: typeof WS_CONNECTION_START;
}
interface IWsConnectionClose {
  readonly type: typeof WS_CONNECTION_CLOSE;
}
interface IWsConnectionSuccess {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}
interface IWsConnectionError {
  readonly type: typeof WS_CONNECTION_ERROR;
}
interface IWsConnectionClosed {
  readonly type: typeof WS_CONNECTION_CLOSED;
}
interface IWsGetMessage {
  readonly type: typeof WS_GET_ORDERS;
  payload: TFeedResponse;
}

export type TWsActions =
  | IWsConnectionStart
  | IWsConnectionClose
  | IWsConnectionSuccess
  | IWsConnectionError
  | IWsConnectionClosed
  | IWsGetMessage;

// export const wsActions: TWsActions = {
//   wsInit: WS_CONNECTION_START,
//   wsClose: WS_CONNECTION_CLOSE,
//   onOpen: WS_CONNECTION_SUCCESS,
//   onClose: WS_CONNECTION_CLOSED,
//   onError: WS_CONNECTION_ERROR,
//   onMessage: WS_GET_ORDERS,
// };