import { Middleware, MiddlewareAPI } from "redux";
import { TSocketMiddlewareActions } from "../types/data"

export const socketMiddleware = (wsUrl: string, wsActions: TSocketMiddlewareActions): Middleware => {
  return (store: MiddlewareAPI) => {
    let socket: WebSocket | null = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsInit, wsClose, onOpen, onMessage, onClose, onError } =
        wsActions;

      if (type === wsInit) {
        socket = new WebSocket(`${wsUrl}${payload}`);
      }

      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = (event) => {
          const { success, ...data } = JSON.parse(event.data);
          dispatch({ type: onMessage, payload: data });
        };

        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
        };

        if (type === wsClose) {
          socket.close(1000);
        }
      }

      next(action);
    };
  };
};
