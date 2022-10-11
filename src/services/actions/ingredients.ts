import { getIngredientsData } from "../../components/Api/api";
import { TIngredient } from "../types/data";
import { AppDispatch, AppThunk } from "../types";

export const BURGER_INGREDIENTS_REQUEST: "CREATE_ORDER_REQUEST" =
  "CREATE_ORDER_REQUEST"; //ожидание ответа
export const BURGER_INGREDIENTS_SUCCESS: "CREATE_ORDER_SUCCESS" =
  "CREATE_ORDER_SUCCESS"; //данные получены успешно
export const BURGER_INGREDIENTS_FAILED: "CREATE_ORDER_FAILED" =
  "CREATE_ORDER_FAILED"; //ошибка

export interface TBurgerIngredientsRequest {
  readonly type: typeof BURGER_INGREDIENTS_REQUEST;
}

export interface TBurgerIngredientsSuccess {
  readonly type: typeof BURGER_INGREDIENTS_SUCCESS;
  ingredients: Array<TIngredient>;
}

export interface TBurgerIngredientsFailed {
  readonly type: typeof BURGER_INGREDIENTS_FAILED;
}

export type TBurgerIngredientsAction =
  | TBurgerIngredientsRequest
  | TBurgerIngredientsSuccess
  | TBurgerIngredientsFailed;

export const getIngredients: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: BURGER_INGREDIENTS_REQUEST,
    });
    getIngredientsData()
      .then((res) => {
        dispatch({
          type: BURGER_INGREDIENTS_SUCCESS,
          ingredients: res.data,
        });
      })
      .catch(() => {
        dispatch({
          type: BURGER_INGREDIENTS_FAILED,
        });
      });
  };
};
