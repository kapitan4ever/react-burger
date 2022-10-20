import styles from "./ingredient-details.module.css";
import { FC } from "react";
import { useSelector } from "../../services/hooks";
import { useParams } from "react-router-dom";

export const IngredientDetailsPage: FC = () => {
  const ingredients = useSelector((store) => store.ingredients.ingredients);
  const { id } = useParams<{ id: string }>();
  const ingredient = ingredients.find(({ _id }) => _id === id);

  if (!ingredient) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <h1 className="mt-10 mr-10 ml-10 text text_type_main-large">
        Детали ингредиета
      </h1>
      <img src={ingredient.image_large} alt={ingredient.name} />
      <h3 className={`${styles.name} text text_type_main-medium mt-4 mb-8`}>
        {ingredient.name}
      </h3>
      <ul className={`${styles.details} mb-15`}>
        <li>
          <p
            className={`${styles.detail} text text_type_main-default text_color_inactive`}
          >
            Каллории,ккал
          </p>
          <p
            className={`${styles.detail} text text_type_digits-default text_color_inactive`}
          >
            {ingredient.calories}
          </p>
        </li>
        <li>
          <p
            className={`${styles.detail} text text_type_main-default text_color_inactive`}
          >
            Белки, г
          </p>
          <p
            className={`${styles.detail} text text_type_digits-default text_color_inactive`}
          >
            {ingredient.proteins}
          </p>
        </li>
        <li>
          <p
            className={`${styles.detail} text text_type_main-default text_color_inactive`}
          >
            Жиры, г
          </p>
          <p
            className={`${styles.detail} text text_type_digits-default text_color_inactive`}
          >
            {ingredient.fat}
          </p>
        </li>
        <li>
          <p
            className={`${styles.detail} text text_type_main-default text_color_inactive`}
          >
            Углеводы, г
          </p>
          <p
            className={`${styles.detail} text text_type_digits-default text_color_inactive`}
          >
            {ingredient.carbohydrates}
          </p>
        </li>
      </ul>
    </div>
  );
};
