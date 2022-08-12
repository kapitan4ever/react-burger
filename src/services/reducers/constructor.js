import {
  CONSTRUCTOR_ADD,
  CONSTRUCTOR_DELETE,
  CONSTRUCTOR_RESET,
  CONSTRUCTOR_REPLACE,
} from "../actions/constructor";

const initialState = {
  bun: [],
  items: [],
};

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTRUCTOR_ADD: {
      if (action.data.type === "bun") {
        return { ...state, bun: action.data };
      }
      return {
        ...state,
        items: [...state.items, action.data],
      };
    }
    case CONSTRUCTOR_DELETE: {
      return {
        ...state,
        items: [...state.items].filter((item) => {
          return item.id !== action.id;
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
        bun: [],
      };
    }
    default: {
      return state;
    }
  }
};
