import {
  ADD_BURGER_FILLING,
  ADD_BURGER_BUN,
  DELETE_BURGER_FILLING,
  REPLACE_BURGER_FILLING,
  ERASE_CONSTRUCTOR,
} from "../actions/constructBurger";

const defaultState = {
  bun: {},
  filling: [],
};

export const constructorIngredientsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_BURGER_FILLING:
      return { ...state, filling: [...state.filling, action.payload] };
    case ADD_BURGER_BUN:
      return { ...state, bun: action.payload };
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
        bun: {},
      };
    default:
      return state;
  }
};

export const addBurgerFillingAction = (payload) => ({
  type: ADD_BURGER_FILLING,
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
