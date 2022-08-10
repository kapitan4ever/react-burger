import { combineReducers } from 'redux';
import { orderReducer } from './order';
import { ingredientsReduсer } from './ingredients';
import { constructorReducer } from './constructor';
import { ingredientModalReducer } from './ingredientModal';
import { messageModalReducer } from './messageModal';
import { orderDetailsReducer } from './orderDetails';
import { constructorIngredientsReducer } from "./constructorIngredientsReducer";

export const rootReducer = combineReducers({
	order: orderReducer,//объект созданного заказа
	ingredients: ingredientsReduсer,//список всех полученных ингредиентов
	burgerConstructor: constructorReducer,//список всех ингредиентов в текущем конструкторе бургера
	ingredientModal: ingredientModalReducer,//объект текущего просматриваемого ингредиента
	messageModal: messageModalReducer,
	orderDetails: orderDetailsReducer,
	constructorIngredients: constructorIngredientsReducer,
});


