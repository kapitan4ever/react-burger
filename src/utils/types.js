import PropTypes from "prop-types";

const ingredientTypes = {
  calories: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
	// totalSum: PropTypes.string.isRequired,
  // id: PropTypes.string.isRequired,
  // statusInfo: PropTypes.string.isRequired,
	// waitMessage: PropTypes.string.isRequired,
};

export const itemTypes = PropTypes.shape(ingredientTypes).isRequired;
export const arrayOfIngredientsTypes = PropTypes.arrayOf(itemTypes).isRequired;
