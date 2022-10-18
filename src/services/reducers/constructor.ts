import {
  CONSTRUCTOR_ADD,
  CONSTRUCTOR_DELETE,
  CONSTRUCTOR_RESET,
  CONSTRUCTOR_REPLACE,
} from "../actions/constructor";
import { TIngredient } from "../types/data";
import { TConstructorActions } from "../actions/constructor";

export type TInitialState = {
  bun: TIngredient;
  items: TIngredient[];
  itemsId: string[];
	bunRequestSuccess: boolean;
};

const initialState = {
  bun: {
    calories: 0,
    carbohydrates: 0,
    fat: 0,
    image: "",
    image_large: "",
    image_mobile: "",
    name: "",
    price: 0,
    proteins: 0,
    type: "bun",
    __v: 0,
    _id: "",
    id: "",
    count: 0,
  },
  items: [],
  itemsId: [],
	bunRequestSuccess: false
};

export const constructorReducer = (
  state = initialState,
  action: TConstructorActions
): TInitialState => {
  switch (action.type) {
    case CONSTRUCTOR_ADD: {
      if (action.data.type === "bun") {
        return {
          ...state,
          bun: action.data,
          itemsId: [...state.itemsId, action.data._id],
					bunRequestSuccess: true
        };
      }
      return {
        ...state,
        items: [...state.items, action.data],
        itemsId: [...state.itemsId, action.data._id],
      };
    }
    case CONSTRUCTOR_DELETE: {
      return {
        ...state,
        items: [...state.items].filter((item) => {
          return (item as TIngredient).id !== action.id;
        }),
      };
    }
    case CONSTRUCTOR_REPLACE: {
      const dndConstructor = [...state.items];
      dndConstructor.splice(
        action.data.dndIndex,
        0,
        dndConstructor.splice(action.data.nextIndex, 1)[0]
      );
      return {
        ...state,
        items: dndConstructor,
      };
    }
    case CONSTRUCTOR_RESET: {
      return {
        ...state,
        items: [],
        bun: initialState.bun,
				bunRequestSuccess: false
      };
    }
    default: {
      return state;
    }
  }
};
