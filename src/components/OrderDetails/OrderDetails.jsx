import styles from "./OrderDetails.module.css";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const OrderDetails = () => {
  const orderNumber = useSelector((store) => store.order.number);
  return (
    <div className={styles.popup}>
      <p
        className={`${styles.typography} ${styles.totalSum} mt-30 mb-8 text text_type_digits-large`}
      >
        {orderNumber}
      </p>
      <h2 className={`${styles.typography} text text_type_main-medium`}>
        идентификатор заказа
      </h2>
      <div className={`${styles.status} mt-15 mb-15`}></div>
      <p className={`${styles.typography} text text_type_main-default`}>
        Ваш заказ начали готовить
      </p>
      <p
        className={`${styles.typography} text text_type_main-default text_color_inactive mt-2 mb-30`}
      >
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};

export default OrderDetails;

OrderDetails.propTypes = {
  orderId: PropTypes.string.isRequired,
};
