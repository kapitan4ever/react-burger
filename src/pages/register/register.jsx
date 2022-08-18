import React from "react";
import styles from "./register.module.css";
import {
  Button,
	Input,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

export function Register() {
	const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
	const inputRef = React.useRef(null);

  return (
    <div className={styles.wrapper}>
      <h2 className={`text text_type_main-medium mb-6`}>Регистрация</h2>
      <form className={styles.form}>
        <div className={`${styles.form__input} mb-6`}>
          <Input
            type={"text"}
            placeholder={"Имя"}
            onChange={(e) => setName(e.target.value)}
            value={name}
            name={"name"}
            error={false}
            ref={inputRef}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
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
        <Button type="primary" size="medium">
          Зарегистрироваться
        </Button>
      </form>
      <div className="mt-20">
        <p className="text text_type_main-default text_color_inactive">
          Уже зарегистрированы? <a href="/login" className={`${styles.text_color_active} text text_type_main-default mt-20`}>Войти</a>
        </p>
      </div>
    </div>
  );
}
