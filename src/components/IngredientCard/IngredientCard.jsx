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
import { useDrag } from "react-dnd";

const IngredientCard = (props) => {
  const bun = useSelector((state) => state.constructorIngredients.bun);
  const filling = useSelector((state) => state.constructorIngredients.filling);
  const dispatch = useDispatch();
  const [isOpened, setIsOpened] = useState(false);

  const [{ opacity }, ref] = useDrag({
    type: "ingredients",
    item: props.ingredient,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  const counter = useMemo(
    () =>
      (count = 0) => {
        for (let { _id } of filling) if (_id === props.ingredient._id) count++;
        if (bun && bun._id === props.ingredient._id) return 2;
        return count;
      },
    [bun, filling, props.ingredient._id]
  );

  return (
    <>
      <li
        className={`${styles.item} mt-6 ml-4`}
        onClick={() => setIsOpened(true)}
        ref={ref}
        style={{ opacity }}
      >
        {counter() > 0 && <Counter count={counter()} size="small" />}
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
