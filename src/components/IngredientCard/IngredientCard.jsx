import styles from "./IngredientCard.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { itemTypes } from "../../utils/types";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { useState, useMemo } from "react";
import Modal from "../Modal/Modal";

import { useDispatch, useSelector } from "react-redux";
import {modalIngredientOpen} from '../../services/actions/ingredientModal'

const IngredientCard = (props) => {
	const dispatch = useDispatch();

//   const { bun, ingridients } = useSelector(store => store.burgerConstructor);
	
// 	const counter = useMemo(
// 		() => (count = 0) => {
// 				count = (bun._id === ingridient._id && bun) ? 2 : 
// 				ingridients.filter(ingridient => ingridient._id === ingridient._id).length
// 				return count
// 		}, [bun, ingridients]
// )

  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      <li
        className={`${styles.item} mt-6 ml-4`}
        onClick={() => setIsOpened(true)}
      >
        <Counter count={props.ingredient._v} size="small" />
				{/* {counter() > 0 && <Counter count={counter()} size="default" />} */}
        <img
          className="ml-4 mr-4 mb-1"
          src={props.ingredient.image}
          alt={props.ingredient.name}
        />
        <div className={styles.price}>
          <p className="text text_type_digits-default mr-2">
            {props.ingredient.price}
          </p>
          <CurrencyIcon type="primary" />
        </div>
        <p className={`${styles.title} text text_type_main-default mt-1`}>
          {props.ingredient.name}
        </p>
      </li>
      <Modal isOpened={isOpened} onClose={() => setIsOpened(false)}>
        <IngredientDetails
          title="Детали ингредиента"
          img={props.ingredient.image_large}
          name={props.ingredient.name}
          calories={props.ingredient.calories}
          prot={props.ingredient.proteins}
          fat={props.ingredient.fat}
          carb={props.ingredient.carbohydrates}
        />
      </Modal>
    </>
  );
};

IngredientCard.propTypes = {
  ingredient: itemTypes,
};

export default IngredientCard;
