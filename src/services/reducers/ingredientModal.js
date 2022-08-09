import {
	INGREDIENT_MODAL_OPEN,
	INGREDIENT_MODAL_CLOSE
} from '../actions/ingredientModal';

const ingredientInitialState = {
	openModal: null
};

export const ingredientModalReducer = (state = ingredientInitialState, action) => {
	switch (action.type) {
		case INGREDIENT_MODAL_OPEN: {
			return {
				...state,
				openModal: action.ingredient,
			}
		}
		case INGREDIENT_MODAL_CLOSE: {
			return {
				...state,
				openModal: null,
			}
		}
		default: {
			return state;
		}
	}
};