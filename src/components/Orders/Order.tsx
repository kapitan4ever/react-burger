//import { useSelector } from "react-redux";
import { FC } from "react";
import { useSelector } from "../../services/hooks";
import { useLocation, Link } from "react-router-dom";
import styles from "./orders.module.css";
import { OrdersCard } from "./OrdersCard/OrdersCard";
import { TLocation } from "../../services/types/data";

export const Order: FC = () => {
  const location = useLocation();
	const orders = useSelector(store => store.ordersList.orders);
  //const { orders } = useSelector(store => store.ordersList);
	console.log(orders);
  return (
    <div className={styles.wrapper}>
      {orders &&
        orders?.map((order, index) => {
          return (
					<Link
						to={{ pathname: `/feed/${order._id}`, state: { background: location } }}
						className={`${styles.link}`} key={order._id}
					>
						<OrdersCard order={order} status={false} key={index} />
					</Link>
					)
        })}
    </div>
  );
}
