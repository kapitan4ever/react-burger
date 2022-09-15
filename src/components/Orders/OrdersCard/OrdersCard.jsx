import { useSelector } from "react-redux";
import { useMemo } from "react";
import styles from "./ordersCard.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { formatDate } from "../../../utils/utils";
import { ThumbnailImage } from "./ThumbnailImage/ThumbnailImage";
import { MAX_ITEMS, ITEM_DISPLAY } from "../../../utils/constants"

export function OrdersCard({ order, status }) {
  const ingredients = useSelector((store) => store.ingredients.ingredients);
  const { createdAt, number, name } = order;

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

  const orderLength = orderIngredientsData.length;
  const orderItems =
    orderLength > 6 ? orderIngredientsData.slice(0, 6) : orderIngredientsData;

  return (
    <div className={`${styles.card} mr-2`}>
      <div className={styles.card__orderID}>
        <p className="text text_type_digits-default">#{number}</p>
        <p className="text text_type_main-default text_color_inactive">
          {formatDate(createdAt)}
        </p>
      </div>
      <div className={styles.card__info}>
        <p className="text text_type_main-medium">{name}</p>
        {!!order.status && (
          <p className={`${styles.card__status} text text_type_main-default`}>
            {status === "done"
              ? "Выполнен"
              : status === "pending"
              ? "Готовится"
              : status === "created"
              ? "Создан"
              : "Выполнен"}
          </p>
        )}
      </div>

      <div className={styles.card__components}>
        <ul className={styles.card__list}>
          {orderIngredientsData &&
            orderItems.map((item, index) => {
              return (
                <li className={styles.card__list_items} key={index} style={{ left: index * ITEM_DISPLAY, zIndex: MAX_ITEMS - index }}>
                  {item && (
                    <ThumbnailImage image={item.image} alt={item.name} />
                  )}
                </li>
              );
            })}
        </ul>
        {orderIngredientsData && orderLength > MAX_ITEMS && (
          <p
            className={`text text_type_main-default ${styles.card__cover}`}
            style={{ left: (MAX_ITEMS - 1) * ITEM_DISPLAY }}
          >{`+${orderLength - MAX_ITEMS}`}</p>
        )}
        <div className={`${styles.card__price} text text_type_digits-default`}>
          <p className={`${styles.card__total} text text_type_digits-default mr-2`}>
            {orderTotalPrice}
          </p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
}
