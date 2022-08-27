import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./profile.module.css";
import {
  Input,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

export function ProfilePage() {
  const [value, setValue] = useState({
    email: "",
    name: "",
    password: "",
  });
  const onInputChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
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
          to="/profile/order"
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
        >
          Выход
        </NavLink>
				<span className={`text text_type_main-small text_color_inactive mt-20`}>
        В этом разделе вы можете</span>
				<span className={`text text_type_main-small text_color_inactive`}>
				изменить свои персональные данные
      </span>
      </nav>

      <div className={styles.wrapper}>
        <form className={styles.form}>
          <div className={`${styles.form__input} mb-6`}>
            <Input
              type={"text"}
              placeholder={"Имя"}
              onChange={onInputChange}
              icon={"EditIcon"}
              value={value.name}
              name={"name"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
          <div className={`${styles.form__input} mb-6`}>
            <EmailInput
              type={"email"}
              placeholder={"Логин"}
              onChange={onInputChange}
              icon={"EditIcon"}
              value={value.email}
              name={"email"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
          <div className={`${styles.form__input} mb-6`}>
            <PasswordInput
              type={"password"}
              placeholder={"Пароль"}
              onChange={onInputChange}
              value={value.password}
              name={"password"}
              icon={"EditIcon"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
        </form>
      </div>
      
    </div>
  );
}
