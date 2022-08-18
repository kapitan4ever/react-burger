import React from "react";
import styles from "./login.module.css";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

export function LoginPage() {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
	const inputRef = React.useRef(null);
  return (
    <div className={styles.wrapper}>
      <h2 className={`text text_type_main-medium mb-6`}>Вход</h2>
      <form className={styles.form}>
        <div className={`${styles.form__input} mb-6`}>
				<Input
            type={"email"}
            placeholder={"E-mail"}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name={"email"}
            error={false}
            ref={inputRef}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
        <div className={`${styles.form__input} mb-6`}>
          <PasswordInput
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name={"password"}
          />
        </div>
        <Button type="primary" size="medium" >
          Войти
        </Button>
      </form>
			<div className="mt-20">
			<p className="text text_type_main-default text_color_inactive mb-4">
        Вы — новый пользователь? <a href="/register" className={`${styles.text_color_active} text text_type_main-default`}>Зарегистрироваться</a>
      </p>
      <p className="text text_type_main-default text_color_inactive">
        Забыли пароль? <a href="/forgot-password" className={`${styles.text_color_active} text text_type_main-default`}>Восстановить пароль</a>
      </p>
			</div>
    </div>
  );
}
