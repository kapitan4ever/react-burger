import React from "react";
import styles from "./forgot-password.module.css";
import {
  Button,
	Input,
} from "@ya.praktikum/react-developer-burger-ui-components";

export function ForgotPassword() {
	const [email, setEmail] = React.useState();
	const inputRef = React.useRef(null);

  return (
    <div className={styles.wrapper}>
      <h2 className={`text text_type_main-medium mb-6`}>Восстановление пароля</h2>
      <form className={styles.form}>
        <div className={`${styles.form__input} mb-6`}>
					<Input
            type={"email"}
            placeholder={"Укажите e-mail"}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name={"email"}
            error={false}
            ref={inputRef}
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
          Вспомнили пароль? <a href="/login" className={`${styles.text_color_active} text text_type_main-default mt-20`}>Войти</a>
        </p>
      </div>
    </div>
  );
}
