import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { OrdersCard } from '../../components/Orders/OrdersCard/OrdersCard';
import styles from './orders.module.css';


export default function OrdersPage() {
	const location = useLocation();
	const orders = useSelector((store) => store.wsAuth.orders);
	return (
		<div className={styles.container}>
			{orders &&
				(orders?.map((order) => {
					return (
						<Link
							to={{ pathname: `/profile/orders/${order._id}`, state: { background: location } }}
							className={`${styles.link}`} key={order._id}
						>
							<OrdersCard order={order} status={true} />
						</Link>
					)
				}))
			}
		</div >
	)
}