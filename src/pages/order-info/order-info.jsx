import React, { useEffect, useCallback, useMemo } from 'react';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useRouteMatch } from 'react-router-dom';
import { getCookie } from '../../services/utils';
import { formatDate } from '../../utils/utils';
import styles from './order-info.module.css';
import {
  WS_CONNECTION_START,
  WS_CONNECTION_CLOSE,
  WS_AUTH_CONNECTION_START,
  WS_AUTH_CONNECTION_CLOSE
} from '../../services/actions/action-types';
import { setSocketAuthConnection, setSocketAuthDisconnect } from '../../services/actions/action-types';

export function OrderInfoPage() {
	const { ingredients } = useSelector(store => store.ingredients);
  const orders = useSelector((store) => store.orders.orders);
  const { userOrders } = useSelector(store => store.orders);

	const { id } = useParams();
  const dispatch = useDispatch();

  const { path } = useRouteMatch();
	const isProfile = '/profile/orders/:id';
	const isFeed = '/feed/:id';

	// useEffect(() => {
	// 	dispatch(setSocketAuthConnection());
	// 	return () => {
	// 		dispatch(setSocketAuthDisconnect());
	// 	}
	// }, [dispatch]);

	useEffect(() => {
    if (path === isFeed) {
      dispatch({ type: WS_CONNECTION_START, payload: '/all' });
      return () => {
        dispatch({ type: WS_CONNECTION_CLOSE });
      }
    };
    if (path === isProfile) {
      const accessToken = getCookie('accessToken');
      dispatch({ type: WS_AUTH_CONNECTION_START, payload: `?token=${accessToken}` });
      return () => {
        dispatch({ type: WS_AUTH_CONNECTION_CLOSE })
      }
    }
  }, [])

	const order = orders?.find((order) => order._id === id) || userOrders.orders?.find(({ _id }) => id === _id);

  const orderIngredients = [];
  for(let i = 0; i < ingredients.length; i++) {
    for(let g = 0; g < order?.ingredients.length; g++) {
      if(ingredients[i]._id === order.ingredients[g]) {
        orderIngredients.push(ingredients[i])
      }
    }
  }

  const countIngredients = useCallback(ingredient => {
    return orderIngredients.filter(item => item._id === ingredient._id).length;
  }, [orderIngredients]);

  const filderedOrderIngredients = useMemo(() => orderIngredients.filter((item, pos) => pos === orderIngredients.indexOf(item)), [orderIngredients]);
  const orderPrice = useMemo(() => orderIngredients.reduce((acc, item) => item.type === 'bun' ? acc + item.price * 2 : acc + item.price, 0), [orderIngredients]);

console.log(orderIngredients);
	return (
		order && (<div className={styles.card}>
      <p className={`text text_type_digits-default ${styles.order_number}`}>#{order.number}</p>
      <h2 className="text text_type_main-medium pt-10 pb-3">{order.name}</h2>
      <p className={`text text_type_main-default ${styles.order_status}`}>
        {order.status === 'done' ? 'Выполнен' : 'Готовится'}
      </p>
      <p className="text text_type_main-medium pt-15 pb-6">Состав:</p>
      <div className={styles.ingredients}>
      {filderedOrderIngredients.map((item, pos) =>
       ( <div className={`${styles.ingredient} pb-4`} key={pos}>
          <div className={styles.image_container} >
            <div className={styles.image_container2}><img className={styles.image} src={item.image_mobile} alt={item.name}/></div>
          </div>
          <h2 className={`text text_type_main-default pl-4 pr-4 ${styles.ingredient_title}`}>{item.name}</h2>
          <div className={styles.ingredient_price}>
            <p className='text text_type_digits-default pr-2'>
              {item.type === 'bun' ? `${countIngredients(item) * 2} x ${item.price}` : `${countIngredients(item)} x ${item.price}`}
            </p>
            <CurrencyIcon type="primary" />
          </div>
        </div>))}
      </div>
      <div className={`${styles.total_price} pt-10`}>
        <p className="text text_type_main-default text_color_inactive">{formatDate(order.createdAt)}</p>
        <div className={styles.price}>
          <p className='text text_type_digits-default pr-2'>{orderPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>)
	)
}