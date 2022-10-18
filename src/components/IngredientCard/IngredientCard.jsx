import styles from "./IngredientCard.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useDrag } from "react-dnd";
import { Link, useLocation } from "react-router-dom";

const IngredientCard = (props) => {
	const bun = useSelector((state) => state.constructorIngredients.bun);
  const filling = useSelector((state) => state.constructorIngredients.filling);
  const location = useLocation();
  const { image, name, price } = props.ingredient;

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
      <li
        className={`${styles.item} mt-6 ml-4`}
        ref={ref}
        style={{ opacity }}
      >
        {counter() > 0 && <Counter count={counter()} size="small" />}
        <Link
          to={{
            pathname: `/ingredients/${props.ingredient._id}`,
            state: { background: location },
          }}
        >
          <img className="ml-4 mr-4 mb-1" src={image} alt={name} />
					</Link>
        <div className={styles.price}>
          <p className="text text_type_digits-default mr-2">{price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className={`${styles.title} text text_type_main-default mt-1`}>
          {name}
        </p>
      </li>
  );
};

// IngredientCard.propTypes = {
//   ingredient: itemTypes,
// };

export default IngredientCard;
