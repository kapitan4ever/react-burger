import { nanoid } from "nanoid";
import { TIngredient } from "../types/data";

export const ADD_BURGER_FILLING: "ADD_BURGER_FILLING" = "ADD_BURGER_FILLING";
export const ADD_BURGER_BUN: "ADD_BURGER_BUN" = "ADD_BURGER_BUN";
export const DELETE_BURGER_FILLING: "DELETE_BURGER_FILLING" =
  "DELETE_BURGER_FILLING";
export const REPLACE_BURGER_FILLING: "REPLCAE_BURGER_STUFFING" =
  "REPLCAE_BURGER_STUFFING";
export const ERASE_CONSTRUCTOR: "ERASE_CONSTRUCTOR" = "ERASE_CONSTRUCTOR";

export interface IAddBurgerFilling {
  readonly type: typeof ADD_BURGER_FILLING;
  payload: TIngredient;
  id: string;
}
export interface IAddBurgerBun {
  readonly type: typeof ADD_BURGER_BUN;
  payload: TIngredient;
}
export interface IDeleteBurgerFilling {
  readonly type: typeof DELETE_BURGER_FILLING;
  payload: TIngredient;
	id: string;
}
export interface IReplaceBurgerFilling {
  readonly type: typeof REPLACE_BURGER_FILLING;
  payload: TIngredient;
}

export type TBurgerConstructorActions = IAddBurgerFilling | IAddBurgerBun | IDeleteBurgerFilling;

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
