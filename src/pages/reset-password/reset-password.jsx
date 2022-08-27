import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./reset-password.module.css";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

export function ResetPassword() {
	const [value, setValue] = useState({
    password: "",
		code: ""
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
          <PasswordInput
            onChange={onInputChange}
            placeholder={"Введите новый пароль"}
            value={value.password}
            name={"password"}
          />
        </div>
        <div className={`${styles.form__input} mb-6`}>
          <Input
            type={"text"}
            placeholder={"Введите код из письма"}
            onChange={onInputChange}
            value={value.code}
            name={"code"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
        <Button type="primary" size="medium">
          Сохранить
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
