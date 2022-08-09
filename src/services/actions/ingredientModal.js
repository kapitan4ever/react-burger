export const INGREDIENT_MODAL_OPEN = 'INGREDIENT_MODAL_OPEN';
export const INGREDIENT_MODAL_CLOSE = 'INGREDIENT_MODAL_CLOSE';

export const modalIngredientOpen = (ingredient) => {
	return ({
		type: INGREDIENT_MODAL_OPEN,
		ingredient: ingredient
	})
}

export const modalIngredientClose = () => {
	return ({
		type: INGREDIENT_MODAL_CLOSE,
	})
}