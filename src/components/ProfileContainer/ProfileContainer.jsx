import { NavLink, Switch, Route } from "react-router-dom";
import { ProfilePage, OrdersPage } from "../../pages";
import styles from "./profileContainer.module.css";

export default function ProfileContainer() {
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
          to="/orders"
          exact
          className={`${styles.link} text text_type_main-medium text_color_inactive`}
          activeClassName={`${styles.activeLink} text text_type_main-medium`}
        >
          История заказов
        </NavLink>
        <NavLink
          to="/logOut"
          exact
          className={`${styles.link} text text_type_main-medium text_color_inactive`}
          activeClassName={`${styles.activeLink} text text_type_main-medium`}
        >
          Выход
        </NavLink>
        <span className={`text text_type_main-small text_color_inactive mt-20`}>
          В этом разделе вы можете изменить свои персональные данные
        </span>
      </nav>
      <Switch>
				<Route path="profile/orders" exact><OrdersPage /></Route>
        <Route path="/profile" exact><ProfilePage /></Route>
      </Switch>
    </div>
  );
}
