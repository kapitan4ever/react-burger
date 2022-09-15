import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./orderInfo.module.css";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { formatDate } from "../../utils/utils";
import { ThumbnailImage } from "../Orders/OrdersCard/ThumbnailImage/ThumbnailImage";
import { OrderInfoDetails } from "./OrderInfoDetails/OrderInfoDetails";

export default function OrderInfo() {
  const { id } = useParams();
  const orders = useSelector((store) => store.orders.orders);
  const order = orders?.find((order) => order._id === id);
  const ingredients = useSelector((store) => store.ingredients.ingredients);

  const history = useHistory();
  const location = useLocation();

  const orderIngredientsData = useMemo(() => {
    return order?.ingredients.map((id) => {
      return ingredients?.find((item) => {
        return id === item._id;
      });
    });
  }, [order?.ingredients, ingredients]);

  const orderTotalPrice = useMemo(() => {
    return orderIngredientsData?.reduce((sum, item) => {
      if (item?.type === "bun") {
        return (sum += item.price * 2);
      }
      return (sum += item ? item.price : 0);
    }, 0);
  }, [orderIngredientsData]);

  return (
    <div className={styles.popup}>
      <p
        className={`${styles.order__number} text text_type_digits-default mb-10`}
      >
        #{order.number}
      </p>
      <div className={styles.card__info}>
        <h2 className="text text_type_main-medium">{order.name}</h2>
        {!!order.status && (
          <p className={`${styles.card__status} text text_type_main-default`}>
            {order.status === "done"
              ? "Выполнен"
              : order.status === "pending"
              ? "Готовится"
              : order.status === "created"
              ? "Создан"
              : "Выполнен"}
          </p>
        )}
      </div>

      <div>
        <p className="text text_type_main-medium mt-15 mb-4">Состав:</p>
				<div className={styles.card__components}>
        <ul className={styles.card__list}>
					<OrderInfoDetails details={orderIngredientsData} key={id}/>
          
        </ul>
				</div>
      </div>

      <div className={`${styles.card__price} text text_type_digits-default mt-10 mb-10`}>
        <p className="text text_type_main-default text_color_inactive">
          {formatDate(order.createdAt)}
        </p>
        <div className={styles.card__price}>
          <p
            className={`${styles.card__total} text text_type_digits-default mr-2`}
          >
            {orderTotalPrice}
          </p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
}
