import { combineReducers } from "redux";
import { ingredientsReduсer } from "./ingredients";
import { constructorReducer } from "./constructor";
import { messageModalReducer } from "./messageModal";
import { orderDetailsReducer } from "./orderDetails";
import { constructorIngredientsReducer } from "./constructorIngredientsReducer";
import { authReducer } from "./auth";
import { wsReducer } from "./wsReducer";
import { wsAuthReducer } from "./wsAuthReducer";

export const rootReducer = combineReducers({
  ingredients: ingredientsReduсer,
  burgerConstructor: constructorReducer,
  messageModal: messageModalReducer,
  order: orderDetailsReducer,
  constructorIngredients: constructorIngredientsReducer,
  auth: authReducer,
  wsAuthFeed: wsAuthReducer,
  ordersList: wsReducer,
});
