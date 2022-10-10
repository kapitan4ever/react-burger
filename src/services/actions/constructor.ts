import { nanoid } from "nanoid";
import { TIngredient } from "../types/data";

export const CONSTRUCTOR_ADD: "CONSTRUCTOR_ADD" = "CONSTRUCTOR_ADD";
export const CONSTRUCTOR_DELETE: "CONSTRUCTOR_DELETE" = "CONSTRUCTOR_DELETE";
export const CONSTRUCTOR_REPLACE: "CONSTRUCTOR_REPLACE" = "CONSTRUCTOR_REPLACE";
export const CONSTRUCTOR_RESET: "CONSTRUCTOR_RESET" = "CONSTRUCTOR_RESET";

export const addToConstructor = (ingredient: TIngredient) => {
  return {
    type: CONSTRUCTOR_ADD,
    payload: {
      ...ingredient,
			id: nanoid(),
    },
  };
};
