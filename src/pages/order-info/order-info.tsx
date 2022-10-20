import { useEffect, useMemo } from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "../../services/hooks";
import { useParams, useRouteMatch } from "react-router-dom";
import { getCookie } from "../../services/utils";
import { formatDate } from "../../utils/utils";
import styles from "./order-info.module.css";
import {
  WS_CONNECTION_START,
  WS_CONNECTION_CLOSE,
  WS_AUTH_CONNECTION_START,
  WS_AUTH_CONNECTION_CLOSE,
} from "../../services/actions/action-types";
import { OrderInfoDetails } from "../../components/OrderInfo/OrderInfoDetails/OrderInfoDetails";
import { TIngredient } from "../../services/types/data";

export function OrderInfoPage(): JSX.Element {
  const { ingredients } = useSelector((store) => store.ingredients);
  const orders = useSelector((store) => store.ordersList.orders);
  const userOrders = useSelector((store) => store.wsAuthFeed.orders);

  let { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const { path } = useRouteMatch();
  const isProfile = "/profile/orders/:id";
  const isFeed = "/feed/:id";

  useEffect(() => {
    if (path === isFeed) {
      dispatch({ type: WS_CONNECTION_START, payload: "/all" });
      return () => {
        dispatch({ type: WS_CONNECTION_CLOSE });
      };
    }
    if (path === isProfile) {
      const accessToken = getCookie("accessToken");
      dispatch({
        type: WS_AUTH_CONNECTION_START,
        payload: `?token=${accessToken}`,
      });
      return () => {
        dispatch({ type: WS_AUTH_CONNECTION_CLOSE });
      };
    }
  }, []);

  let order =
    orders?.find((order) => order._id === id) ||
    userOrders?.find((order) => order._id === id);

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
    <>
      {order && (
        <div className={styles.popup}>
          <p
            className={`${styles.order__number} text text_type_digits-default mb-10`}
          >
            #{order.number}
          </p>
          <div className={styles.card__info}>
            <h2 className="text text_type_main-medium">{order.name}</h2>
            {!!order.status && (
              <p
                className={`${styles.card__status} text text_type_main-default`}
              >
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
                <OrderInfoDetails
                  details={orderIngredientsData as TIngredient[]}
                  key={id}
                />
              </ul>
            </div>
          </div>

          <div
            className={`${styles.card__price} text text_type_digits-default mt-10 mb-10`}
          >
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
      )}
    </>
  );
}
