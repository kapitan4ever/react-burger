import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./register.module.css";
import {
  Button,
  Input,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

export function Register() {
  const [value, setValue] = useState({
    email: "",
    name: "",
    password: "",
  });
  const onInputChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

	const handleSubmit = (e) => {
		e.preventDefault();
	}
  
  return (
    <div className={styles.wrapper}>
      <h2 className={`text text_type_main-medium mb-6`}>Регистрация</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={`${styles.form__input} mb-6`}>
          <Input
            type={"text"}
            placeholder={"Имя"}
            onChange={onInputChange}
            value={value.name}
            name={"name"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
        <div className={`${styles.form__input} mb-6`}>
          <Input
            type={"email"}
            placeholder={"E-mail"}
            onChange={onInputChange}
            value={value.email}
            name={"email"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
        <div className={`${styles.form__input} mb-6`}>
          <PasswordInput
            onChange={onInputChange}
            value={value.password}
            name={"password"}
          />
        </div>
        <Button type="primary" size="medium">
          Зарегистрироваться
        </Button>
      </form>
      <div className="mt-20">
        <p className="text text_type_main-default text_color_inactive">
          Уже зарегистрированы?{" "}
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
