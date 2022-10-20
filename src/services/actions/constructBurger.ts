//import { nanoid } from "nanoid";
import { TIngredient } from "../types/data";

export const ADD_BURGER_FILLING: "ADD_BURGER_FILLING" = "ADD_BURGER_FILLING";
export const ADD_BURGER_BUN: "ADD_BURGER_BUN" = "ADD_BURGER_BUN";
export const DELETE_BURGER_FILLING: "DELETE_BURGER_FILLING" =
  "DELETE_BURGER_FILLING";
export const REPLACE_BURGER_FILLING: "REPLACE_BURGER_STUFFING" =
  "REPLACE_BURGER_STUFFING";
export const ERASE_CONSTRUCTOR: "ERASE_CONSTRUCTOR" = "ERASE_CONSTRUCTOR";

export interface IAddBurgerBun {
  readonly type: typeof ADD_BURGER_BUN;
  payload: TIngredient;
	orderId?: string[];
	bun?: TIngredient;
}
export interface IAddBurgerFilling {
  readonly type: typeof ADD_BURGER_FILLING;
  payload: TIngredient;
}

export interface IDeleteBurgerFilling {
  readonly type: typeof DELETE_BURGER_FILLING;
  payload: TIngredient;

}

type TDrag = {
  dragIndex: number;
  hoverIndex: number;
};
export interface IReplaceBurgerFilling {
  readonly type: typeof REPLACE_BURGER_FILLING;
  payload: TDrag;
}

export interface IConstructorReset {
  readonly type: typeof ERASE_CONSTRUCTOR;
	payload?: TIngredient[];
}

export type TBurgerConstructorActions =
  | IAddBurgerFilling
  | IAddBurgerBun
  | IDeleteBurgerFilling
  | IReplaceBurgerFilling
  | IConstructorReset;

export const addBurgerFillingAction = (
  payload: TIngredient
): IAddBurgerFilling => ({
  type: ADD_BURGER_FILLING,
  payload,
});
export const addBurgerBunAction = (payload: TIngredient): IAddBurgerBun => ({
  type: ADD_BURGER_BUN,
  payload,
});
export const deleteBurgerFilling = ( payload: TIngredient ): IDeleteBurgerFilling => ({
  type: DELETE_BURGER_FILLING,
  payload,
});

export const replaceBurgerFilling = ( payload: TDrag ): IReplaceBurgerFilling => ({
  type: REPLACE_BURGER_FILLING,
  payload,
});

export const eraseConstructorAction = (): IConstructorReset => ({
  type: ERASE_CONSTRUCTOR,
});
