import React, { useCallback, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import styles from "./login.module.css";
import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

//import { useAuth } from '../../services/actions/auth';
import { Link } from "react-router-dom";

export default function LoginPage() {
	let history = useHistory();
  //let auth = useAuth();

  const [value, setValue] = useState({ email: "", password: "" });

  const onInputChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

	// let login = useCallback(
  //   e => {
  //     e.preventDefault();
  //     auth.signIn(() => {
  //       history.replace({ pathname: '/' });
  //     });
  //   },
  //   [auth, history]
  // );

	// if (auth.user) {
  //   return (<Redirect to={{ pathname: '/' }} />);
  // }

  return (
    <div className={styles.wrapper}>
      <h2 className={`text text_type_main-medium mb-6`}>Вход</h2>
      <form className={styles.form}>
        <div className={`${styles.form__input} mb-6`}>
          <EmailInput
            value={value.email}
            onChange={onInputChange}
            name="email"
          />
        </div>
        <div className={`${styles.form__input} mb-6`}>
          <PasswordInput
            value={value.password}
            onChange={onInputChange}
            name="password"
          />
        </div>
        <Button type="primary" size="medium">
          Войти
        </Button>
      </form>
      <div className="mt-20">
        <p className="text text_type_main-default text_color_inactive mb-4">
          Вы — новый пользователь?{" "}
          <Link
            to="/register"
            className={`${styles.text_color_active} text text_type_main-default`}
          >
            Зарегистрироваться
          </Link>
        </p>
        <p className="text text_type_main-default text_color_inactive">
          Забыли пароль?{" "}
          <Link
            to="/forgot-password"
            className={`${styles.text_color_active} text text_type_main-default`}
          >
            Восстановить пароль
          </Link>
        </p>
      </div>
    </div>
  );
}
