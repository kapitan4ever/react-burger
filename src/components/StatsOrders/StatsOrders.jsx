import { useSelector } from "react-redux";
import { nanoid } from 'nanoid';
import styles from './statsOrders.module.css';

export const StatsOrders = () => {
	const { orders, total, totalToday } = useSelector(store => store.orders);

	const orderDone = orders?.filter(order => order.status === 'done').slice(0,20);
	const orderPending = orders?.filter(order => order.status !== 'done').slice(0,20);

	const ItemId = nanoid();

	return (
		<div className={styles.wrapper}>
			<div className={`${styles.stats__orderBoard} pb-15`}>
				<div className={styles.stats__column}>
					<p className='text text_type_main-medium pb-6'>Готовы:</p>
					<ul className={styles.stats__orderList}>
						{orderDone?.map((order, index) => {
							return (
								<li className={`${styles.stats__item} ${styles.stats__done} text text_type_digits-default`} key={ItemId + index}>{order.number}</li>)
						})}
					</ul>
				</div>
				<div className={styles.stats__column}>
					<p className='text text_type_main-medium pb-6'>В работе:</p>
					<ul className={styles.stats__orderList}>
						{orderPending?.map((order, index) => {
							return (
								<li className={`${styles.stats__item} text text_type_digits-default`} key={ItemId + index}>{order.number}</li>)
						})}
					</ul>
				</div>
			</div>
			<div className={`${styles.stats__completed} pb-15`}>
				<p className='text text_type_main-medium'>Выполнено за все время:</p>
				<h2 className={`${styles.stats__totalItems} text text_type_digits-large`}>{total}</h2>
			</div>
			<div className={styles.stats__completed}>
				<p className='text text_type_main-medium'>Выполнено за сегодня:</p>
				<h2 className={`${styles.stats__totalItems} text text_type_digits-large`}>{totalToday}</h2>
			</div>
		</div >)
}