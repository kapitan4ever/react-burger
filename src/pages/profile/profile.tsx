import React, {
  FC,
  useState,
  useEffect,
  ChangeEvent,
  FormEvent,
} from "react";
import {
  NavLink,
  Switch,
  Route,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import { OrderHistory, OrderInfoPage } from "../../pages";
import styles from "./profile.module.css";
import { useDispatch, useSelector } from "../../services/hooks";
import { getUser, signOut, updateUser } from "../../services/actions/auth";
import { getCookie } from "../../services/utils";
import {
  WS_AUTH_CONNECTION_START,
  WS_AUTH_CONNECTION_CLOSE,
} from "../../services/actions/action-types";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { TLocation } from "../../services/types/data";

export const Profile: FC = () => {
  const dispatch = useDispatch();
  const location = useLocation<TLocation>();
  const background = location.state?.background;
  const { email, name } = useSelector(store => store.auth.user);
  const matchOrderDetails = !!useRouteMatch({ path: "/profile/orders/:id" });

  useEffect(() => {
    const cookie = getCookie("token");
    dispatch(getUser());
    dispatch({ type: WS_AUTH_CONNECTION_START, payload: `?token=${cookie}` });
    return () => {
      dispatch({ type: WS_AUTH_CONNECTION_CLOSE });
    };
  }, [dispatch]);

  const [form, setForm] = useState({
    email: email,
    name: name,
    password: "",
  });
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateUser(form.email, form.name, form.password));
  };

  const onResetForm = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setForm({
      email: email,
      name: name,
      password: "",
    });
  };

  function handleSingOut() {
    dispatch(signOut());
  }

  return (
    <div className={`${styles.content} mt-30`}>
      {!matchOrderDetails && (
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
          <span
            className={`text text_type_main-small text_color_inactive mt-20`}
          >
            В этом разделе вы можете изменить свои персональные данные
          </span>
        </nav>
      )}
      <Switch location={background || location}>
        <Route path="/profile/orders" exact>
          <OrderHistory />
        </Route>
        <Route path="/profile/orders/:id" exact>
          <OrderInfoPage />
        </Route>
        <Route path="/profile">
          <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={onSubmit}>
              <div className={`${styles.form__input} mb-6`}>
                <Input
                  type={"text"}
                  placeholder={"Имя"}
                  onChange={onInputChange}
                  icon={"EditIcon"}
                  value={form.name}
                  name={"name"}
                  error={false}
                  errorText={"Ошибка"}
                  size={"default"}
                />
              </div>
              <div className={`${styles.form__input} mb-6`}>
                <Input
                  type={"email"}
                  placeholder={"Логин"}
                  onChange={onInputChange}
                  icon={"EditIcon"}
                  value={form.email}
                  name={"email"}
                  error={false}
                  errorText={"Ошибка"}
                  size={"default"}
                />
              </div>
              <div className={`${styles.form__input} mb-6`}>
                <Input
                  type={"password"}
                  placeholder={"Пароль"}
                  onChange={onInputChange}
                  value={form.password}
                  name={"password"}
                  icon={"EditIcon"}
                  error={false}
                  errorText={"Ошибка"}
                  size={"default"}
                />
              </div>
              <Button
                type="secondary"
                size="medium"
                onClick={() => onResetForm}
              >
                Oтмена
              </Button>
              <Button disabled={!form.password} type="primary" size="medium">
                Сохранить
              </Button>
            </form>
          </div>
        </Route>
      </Switch>
    </div>
  );
};
