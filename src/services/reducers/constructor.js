import {
  CONSTRUCTOR_ADD,
  CONSTRUCTOR_DELETE,
  CONSTRUCTOR_RESET,
	CONSTRUCTOR_REPLACE,
} from "../actions/constructor";
// Исходное состояние
const initialState = {
  bun: [],
  ingredients: [],
};
// Редьюсер
export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTRUCTOR_ADD: {
      if (action.payload.type === "bun") {
        return { ...state, bun: action.payload };
      }
			return {
				...state,
				ingredients: [...state.ingredients, action.payload],
			}; 
    }
    case CONSTRUCTOR_DELETE: {
      return {
        ...state,
        ingredients: [...state.ingredients].filter(
					(ingredient) => {
						return ingredient.id !== action.id;
					}
				),
      };
    }
    case CONSTRUCTOR_REPLACE: {
			const dndConstructor = [...state.ingredients];
			dndConstructor.splice(
				action.payload.dndIndex,
				0,
				dndConstructor.splice(action.payload.nextIndex, 1)[0]
			);
      return {
        ...state,
        ingredients: dndConstructor,
      };
    }
    case CONSTRUCTOR_RESET: {
      return {
        ...state,
        ingredients: [],
				bun: [],
      };
    }
		// Реакция на прочие типы экшенов
    default: {
      return state;
    }
  }
};
