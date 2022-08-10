import {
	BURGER_INGREDIENTS_REQUEST,
	BURGER_INGREDIENTS_SUCCESS,
	BURGER_INGREDIENTS_FAILED
} from '../actions/ingredients';

const initialState = {
	ingredients: [],
	isLoading: false,
	hasError: false
}

export const ingredientsReduсer = (state = initialState, action) => {
  switch (action.type) {
		//запрос
    case BURGER_INGREDIENTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    }
		//успех
    case BURGER_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredients: action.ingredients,
        isLoading: false,
        hasError: false,
      };
    }
		//провал
    case BURGER_INGREDIENTS_FAILED: {
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    }
    default: {
      return state;
    }
  }
};