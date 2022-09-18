import React, { useCallback, useState, useRef, useEffect } from 'react';
import { NavLink, Switch, Route, useLocation } from "react-router-dom";
import { ProfilePage, OrdersPage, Orders, OrderInfoPage } from "../../pages";
import styles from "./profileContainer.module.css";
import { useDispatch } from 'react-redux';
import {signOut} from '../../services/actions/auth';
import { useSelector } from 'react-redux';
import { getCookie } from "../../services/utils";
import {WS_AUTH_CONNECTION_START, WS_AUTH_CONNECTION_CLOSE} from '../../services/actions/action-types';

export default function ProfileContainer() {
	const dispatch = useDispatch();
	const location = useLocation();
	const background = location.state?.background;
	
	const { orders } = useSelector(store => store.ordersList.userOrders);

	useEffect(() => {
    const accessToken = getCookie('accessToken');
		
    dispatch({ type: WS_AUTH_CONNECTION_START, payload: `?token=${accessToken}` });
    return () => {
      dispatch({ type: WS_AUTH_CONNECTION_CLOSE });
    }
  }, [])

	function handleSingOut() {
		dispatch(signOut());
	};
 
  return (
    <div className={`${styles.content} mt-30`}>
      <nav className={`${styles.menu} mr-15`}>
        <NavLink
          to="/profile"
          exact
          className={`${styles.link} text text_type_main-medium text_color_inactive`}
          activeClassName={`${styles.activeLink} text text_type_main-medium`}
        >
          Профиль
        </NavLink>
        <NavLink
          to="/profile/orders"
          exact
          className={`${styles.link} text text_type_main-medium text_color_inactive`}
          activeClassName={`${styles.activeLink} text text_type_main-medium`}
        >
          История заказов
        </NavLink>
        <NavLink
          to="/login"
          exact
          className={`${styles.link} text text_type_main-medium text_color_inactive`}
          activeClassName={`${styles.activeLink} text text_type_main-medium`}
					onClick={handleSingOut}
        >
          Выход
        </NavLink>
        <span className={`text text_type_main-small text_color_inactive mt-20`}>
          В этом разделе вы можете изменить свои персональные данные
        </span>
      </nav>
      <Switch location={background || location}>
			<Route path="/profile/orders" >
			{orders?.map(order => (
				<OrdersPage order={order} key={order._id}/>
				))}
			</Route>
    	  <Route path="/profile" exact><ProfilePage /></Route>
      </Switch>
    </div>
  );
}
