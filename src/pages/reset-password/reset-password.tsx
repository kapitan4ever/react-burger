import { FC, ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "../../services/hooks";
import { TLocation } from "../../services/types/data";
import { Link, Redirect, useLocation } from "react-router-dom";
import styles from "./reset-password.module.css";
import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { useForm } from "../../hooks/useForm";
import { resetPassword } from "../../services/actions/auth";
import { getCookie } from "../../services/utils";

export const ResetPassword: FC = () => {
	const dispatch = useDispatch();
	const location = useLocation<TLocation>();
	const {values, handleChange} = useForm({});
	const {code, password} = values;
	const cookie = getCookie('token');
	const {forgotPasswordSuccess} = useSelector(state => state.auth);

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
		dispatch(resetPassword(password, code));
  };


	if (cookie) {
    return <Redirect to={location.state?.from || "/"} />;
  }
	if (!forgotPasswordSuccess) {
		return <Redirect to={{ pathname: "/forgot-password" }} />;
	}

  return (
    <div className={styles.wrapper}>
      <h2 className={`text text_type_main-medium mb-6`}>
        Восстановление пароля
      </h2>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={`${styles.form__input} mb-6`}>
          <PasswordInput
            onChange={handleChange}
            value={password}
            name={"password"}
          />
        </div>
        <div className={`${styles.form__input} mb-6`}>
          <Input
            type={"text"}
            placeholder={"Введите код из письма"}
            onChange={handleChange}
            value={code}
            name={"code"}
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
