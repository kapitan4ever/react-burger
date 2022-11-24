import { FC } from "react";
import { useSelector } from "../../services/hooks";
import { Link, useLocation } from "react-router-dom";
import { OrdersCard } from "../../components/Orders/OrdersCard/OrdersCard";
import styles from "./orders.module.css";
import { TLocation } from "../../services/types/data";

export const OrderHistory: FC = () => {
  const orders = useSelector((store) => store.wsAuthFeed.orders);
  const location = useLocation<TLocation>();

  return (
    <div className={styles.container}>
      {orders &&
        orders?.map((order) => {
          return (
            <Link
              to={{
                pathname: `/profile/orders/${order._id}`,
                state: { background: location },
              }}
              className={`${styles.link}`}
              key={order._id}
            >
              <OrdersCard order={order} status={order.status} />
            </Link>
          );
        })}
    </div>
  );
}
