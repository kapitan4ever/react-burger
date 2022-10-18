import { nanoid } from "nanoid";
import { TIngredient } from "../types/data";

export const ADD_BURGER_FILLING: "ADD_BURGER_FILLING" = "ADD_BURGER_FILLING";
export const ADD_BURGER_BUN: "ADD_BURGER_BUN" = "ADD_BURGER_BUN";
export const DELETE_BURGER_FILLING: "DELETE_BURGER_FILLING" =
  "DELETE_BURGER_FILLING";
export const REPLACE_BURGER_FILLING: "REPLACE_BURGER_STUFFING" =
  "REPLACE_BURGER_STUFFING";
export const ERASE_CONSTRUCTOR: "ERASE_CONSTRUCTOR" = "ERASE_CONSTRUCTOR";

export interface IAddBurgerFilling {
  readonly type: typeof ADD_BURGER_FILLING;
  id: string;
	payload: TIngredient;
}
export interface IAddBurgerBun {
  readonly type: typeof ADD_BURGER_BUN;
  payload: TIngredient;
	// orderId: string[];
	// bun: TIngredient;
}
export interface IDeleteBurgerFilling {
  readonly type: typeof DELETE_BURGER_FILLING;
  payload: TIngredient;
}
export interface IReplaceBurgerFilling {
  readonly type: typeof REPLACE_BURGER_FILLING;
  payload: {
		dragIndex: number;
		hoverIndex: number;
	};
}

interface IConstructorReset {
	readonly type: typeof ERASE_CONSTRUCTOR;

}

export type TBurgerConstructorActions = IAddBurgerFilling | IAddBurgerBun | IDeleteBurgerFilling | IReplaceBurgerFilling | IConstructorReset;

export const addBurgerFillingAction = (payload: Array<string>) => ({
  type: ADD_BURGER_FILLING,
  id: nanoid(),
  payload,
});
export const addBurgerBunAction = (payload: Array<string>) => ({
  type: ADD_BURGER_BUN,
  payload,
});
export const deleteBurgerFilling = (payload: any) => ({
  type: DELETE_BURGER_FILLING,
  payload,
});

export const replaceBurgerFilling = (payload: any) => ({
  type: REPLACE_BURGER_FILLING,
  payload,
});

export const eraseConstructorAction = () => ({
  type: ERASE_CONSTRUCTOR,
});
