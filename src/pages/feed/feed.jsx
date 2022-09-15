import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from "./feed.module.css";
import Orders from "../../components/Orders/Orders";
import { StatsOrders } from "../../components/StatsOrders/StatsOrders";
import { setSocketConnection, setSocketDisconnect } from '../../services/actions/action-types';

export function FeedPage() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setSocketConnection());
		return () => {
			dispatch(setSocketDisconnect());
		}
	}, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <h2 className={`${styles.text} text text_type_main-large pt-10 pb-5`}>
        Лента заказов
      </h2>
      <div className={styles.feedOrders}>
        <Orders />
        <StatsOrders />
      </div>
    </div>
  );
}
