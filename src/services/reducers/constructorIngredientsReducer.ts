import {
  ADD_BURGER_FILLING,
  ADD_BURGER_BUN,
  DELETE_BURGER_FILLING,
  REPLACE_BURGER_FILLING,
  ERASE_CONSTRUCTOR,
} from "../actions/constructBurger";
import { TBurgerConstructorActions } from "../actions/constructBurger";
import { TIngredient } from "../types/data";

export type TInitialState = {
	bun: TIngredient;
	filling: TIngredient[];
	orderId: any;
	bunRequestSuccess: boolean;
}

const initialState: TInitialState = {
  bun: {
		calories: 0,
		carbohydrates: 0,
		fat: 0,
		image: '',
		image_large: '',
		image_mobile: '',
		name: '',
		price: 0,
		proteins: 0,
		type: "bun",
		__v: 0,
		_id: '',
		id: '',
		count: 0,
	},
  filling: [],
  orderId: [],
	bunRequestSuccess: false,
};

export const constructorIngredientsReducer = (state = initialState, action: TBurgerConstructorActions): TInitialState => {
  switch (action.type) {
    case ADD_BURGER_FILLING:
      return {
        ...state,
        filling: [...state.filling, action.payload],
        orderId: [...state.orderId, action.payload._id],
      };
    case ADD_BURGER_BUN:
      return {
        ...state,
        bun: action.payload,
        orderId: [...state.orderId, action.payload._id],
				bunRequestSuccess: true,
      };
    case DELETE_BURGER_FILLING:
      return {
        ...state,
        filling: [...state.filling].filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case REPLACE_BURGER_FILLING:
      const dragFilling = [...state.filling];
      dragFilling.splice(
        action.payload.dragIndex,
        0,
        dragFilling.splice(action.payload.hoverIndex, 1)[0]
      );

      return {
        ...state,
        filling: dragFilling,
      };
    case ERASE_CONSTRUCTOR:
      return {
        ...state,
        filling: [],
        bun: initialState.bun,
				bunRequestSuccess: false,
      };
    default:
      return state;
  }
};
