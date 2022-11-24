import {
  BURGER_INGREDIENTS_REQUEST,
  BURGER_INGREDIENTS_SUCCESS,
  BURGER_INGREDIENTS_FAILED,
  TBurgerIngredientsAction,
} from "../actions/ingredients";
import { TIngredient } from "../types/data";

export type TIngredientsInitialState = {
  ingredients: Array<TIngredient>;
  isLoading: boolean;
  hasError: boolean;
};

const initialState: TIngredientsInitialState = {
  ingredients: [],
  isLoading: false,
  hasError: false,
};

export const ingredientsReduсer = (
  state = initialState,
  action: TBurgerIngredientsAction
): TIngredientsInitialState => {
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
