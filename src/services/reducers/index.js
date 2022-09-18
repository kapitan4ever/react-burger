import { combineReducers } from "redux";
import { ingredientsReduсer } from "./ingredients";
import { constructorReducer } from "./constructor";
import { messageModalReducer } from "./messageModal";
import { orderDetailsReducer } from "./orderDetails";
import { constructorIngredientsReducer } from "./constructorIngredientsReducer";
import { authReducer } from "./auth";
import { wsReducer } from "./wsReducer";

export const rootReducer = combineReducers({
  ingredients: ingredientsReduсer,
  burgerConstructor: constructorReducer,
  messageModal: messageModalReducer,
  orderDetails: orderDetailsReducer,
  constructorIngredients: constructorIngredientsReducer,
	auth: authReducer,
	ordersList: wsReducer,
});
