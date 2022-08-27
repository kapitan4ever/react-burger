import { useState } from "react";
import styles from "./forgot-password.module.css";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

export function ForgotPassword() {
  const [value, setValue] = useState({
    email: "",
  });
  const onInputChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  return (
    <div className={styles.wrapper}>
      <h2 className={`text text_type_main-medium mb-6`}>
        Восстановление пароля
      </h2>
      <form className={styles.form}>
        <div className={`${styles.form__input} mb-6`}>
          <Input
            type={"email"}
            placeholder={"Укажите e-mail"}
            onChange={onInputChange}
            value={value.email}
            name={"email"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
        <Button type="primary" size="medium">
          Восстановить
        </Button>
      </form>
      <div className="mt-20">
        <p className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?{" "}
          <Link
            to="/login"
            className={`${styles.text_color_active} text text_type_main-default mt-20`}
          >
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
}
