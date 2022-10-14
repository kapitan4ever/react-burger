import { nanoid } from "nanoid";
import { TIngredient } from "../types/data";

export const CONSTRUCTOR_ADD: "CONSTRUCTOR_ADD" = "CONSTRUCTOR_ADD";
export const CONSTRUCTOR_DELETE: "CONSTRUCTOR_DELETE" = "CONSTRUCTOR_DELETE";
export const CONSTRUCTOR_REPLACE: "CONSTRUCTOR_REPLACE" = "CONSTRUCTOR_REPLACE";
export const CONSTRUCTOR_RESET: "CONSTRUCTOR_RESET" = "CONSTRUCTOR_RESET";

interface IConstructorAdd {
	readonly type: typeof CONSTRUCTOR_ADD;
	data: TIngredient;
	itemsId: string[];
}
interface IConstructorDelete {
	readonly type: typeof CONSTRUCTOR_DELETE;
	data: TIngredient;
	id: string;
}
interface IConstructorReplace {
	readonly type: typeof CONSTRUCTOR_REPLACE;
	data: {
		dndIndex: number;
		nextIndex: number;
	};
}
interface IConstructorReset {
	readonly type: typeof CONSTRUCTOR_RESET;
	data: TIngredient[];
}

export type TConstructorActions =
| IConstructorAdd
| IConstructorDelete
| IConstructorReplace
| IConstructorReset;

export const addToConstructor = (ingredient: TIngredient) => {
  return {
    type: CONSTRUCTOR_ADD,
    data: {
      ...ingredient,
			id: nanoid(),
    },
  };
};
