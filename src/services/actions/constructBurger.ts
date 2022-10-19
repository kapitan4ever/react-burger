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
	orderId: string[];
	bun: TIngredient;
}
export interface IDeleteBurgerFilling {
  readonly type: typeof DELETE_BURGER_FILLING;
  payload: TIngredient;
	id: string;
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

export const addBurgerFillingAction = (payload: TIngredient): IAddBurgerFilling => ({
  type: ADD_BURGER_FILLING,
  id: nanoid(),
  payload,
});
export const addBurgerBunAction = (payload: TIngredient, orderId: string[], bun: TIngredient): IAddBurgerBun => ({
  type: ADD_BURGER_BUN,
  payload,
	orderId,
	bun
});
export const deleteBurgerFilling = (payload: any, id: string): IDeleteBurgerFilling => ({
  type: DELETE_BURGER_FILLING,
  payload,
	id
});

export const replaceBurgerFilling = (payload: any): IReplaceBurgerFilling => ({
  type: REPLACE_BURGER_FILLING,
  payload,
});

export const eraseConstructorAction = (): IConstructorReset => ({
  type: ERASE_CONSTRUCTOR,
});
