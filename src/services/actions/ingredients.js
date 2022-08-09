import { getIngredientsData } from '../../components/Api/api';

export const BURGER_INGREDIENTS_REQUEST = 'CREATE_ORDER_REQUEST';//ожидание ответа
export const BURGER_INGREDIENTS_SUCCESS = 'CREATE_ORDER_SUCCESS';//данные получены успешно
export const BURGER_INGREDIENTS_FAILED = 'CREATE_ORDER_FAILED';//ошибка

export function getIngredients() {
	return function(dispatch) {
		dispatch({
			type: BURGER_INGREDIENTS_REQUEST
		})
		getIngredientsData()
		.then((res) => {
			dispatch({
				type: BURGER_INGREDIENTS_SUCCESS,
				ingredients: res.data
			});
		})
		.catch(() => {
			dispatch({
				type: BURGER_INGREDIENTS_FAILED
			})
		})
	}
}
