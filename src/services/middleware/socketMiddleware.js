import { getCookie } from "../utils";
export const socketMiddleware = (wsUrl, wsActions) => {
  return (store) => {
    let socket = null;

    return next => action => {
      const { dispatch } = store;
      const { type, payload } = action;
			const { wsInit, wsClose, wsClearStore, onOpen, onMessage, onClose, onError } = wsActions;
			const accessToken = getCookie('token')

      if (type === wsInit) {
					socket = new WebSocket(`${wsUrl}${payload}`);
				}

			// if (type === wsClose) {
			// 	dispatch({ type: wsClearStore });
			// 	socket.close(1000, 'CLOSE_NORMAL');
			// 	socket = null;
			// }

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
      }

      next(action);
    };
  };
};
