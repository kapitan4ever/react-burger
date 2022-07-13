import styles from "./IngredientDetails.module.css";
import PropTypes from "prop-types";

const IngredientDetails = ({ title, img, name, calories, prot, fat, carb }) => {
  return (
    <div className={styles.popup}>
      <h2 className="mt-10 mr-10 ml-10 text text_type_main-large">{title}</h2>
      <img src={img} alt={name} />
      <h3 className={`${styles.name} text text_type_main-medium mt-4 mb-8`}>
        {name}
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
            {calories}
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
            {prot}
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
            {fat}
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
            {carb}
          </p>
        </li>
      </ul>
    </div>
  );
};

IngredientDetails.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  prot: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carb: PropTypes.number.isRequired,
};

export default IngredientDetails;
