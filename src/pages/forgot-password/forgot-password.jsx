import { useState } from "react";
import styles from "./forgot-password.module.css";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Redirect, useLocation } from "react-router-dom";
import { forgotPassword } from "../../services/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../../services/utils";

export function ForgotPassword() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const cookie = getCookie("token");
  const { forgotPasswordSuccess } = useSelector((state) => state.auth);
  const onInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
  };

  if (cookie) {
    return <Redirect to={location.state?.from || "/"} />;
  }
  return (
    <div className={styles.wrapper}>
      <h2 className={`text text_type_main-medium mb-6`}>
        Восстановление пароля
      </h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={`${styles.form__input} mb-6`}>
          <Input
            type={"email"}
            placeholder={"Укажите e-mail"}
            onChange={onInputChange}
            value={email}
            name={"email"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
        <Button type="primary" size="medium">
          {!!forgotPasswordSuccess ? <Redirect to="/reset-password" /> : ""}
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
