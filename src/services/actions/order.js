//импорт данных из апи
import { postOrder } from '../../components/Api/api';

export const CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST';//ожидание ответа
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';//данные получены успешно
export const CREATE_ORDER_FAILED = 'CREATE_ORDER_FAILED';//ошибка
export const RESET_ORDER = 'RESET_ORDER';//сброс данных
export const SET_ORDER = 'SET_ORDER';

export function resetOrderModal() {
	return {
		type: RESET_ORDER,
	};
}

//action creator
export function getOrderDetails(orderId) {
	return function (dispatch) {
		dispatch({
			type: CREATE_ORDER_REQUEST
		});
		postOrder(orderId)
			.then((res) => {
				dispatch({ type: CREATE_ORDER_SUCCESS, payload: res });
				dispatch({ type: SET_ORDER, payload: res, content: 'order' });
			})
			.catch(() => {
				dispatch({ type: CREATE_ORDER_FAILED });
			})
	};
}
