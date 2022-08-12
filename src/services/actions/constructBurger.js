import { nanoid } from "nanoid";

export const ADD_BURGER_FILLING = "ADD_BURGER_FILLING";
export const ADD_BURGER_BUN = "ADD_BURGER_BUN";
export const DELETE_BURGER_FILLING = "DELETE_BURGER_FILLING";
export const REPLACE_BURGER_FILLING = "REPLCAE_BURGER_STUFFING";
export const ERASE_CONSTRUCTOR = "ERASE_CONSTRUCTOR";

export const addBurgerFillingAction = (payload) => ({
  type: ADD_BURGER_FILLING,
	id: nanoid(),
  payload,
});
export const addBurgerBunAction = (payload) => ({
  type: ADD_BURGER_BUN,
  payload,
});
export const deleteBurgerFilling = (payload) => ({
  type: DELETE_BURGER_FILLING,
  payload,
});

export const replaceBurgerFilling = (payload) => ({
  type: REPLACE_BURGER_FILLING,
  payload,
});

export const eraseConstructorAction = () => ({
  type: ERASE_CONSTRUCTOR,
});