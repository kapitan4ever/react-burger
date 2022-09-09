import styles from "./login.module.css";
import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useLocation, Redirect } from "react-router-dom";
import { signIn, setLoginFormValue } from "../../services/actions/auth";
import { useDispatch, useSelector } from "react-redux";

export function LoginPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { email, password } = useSelector((state) => state.auth.form);
  const { isLogin } = useSelector((state) => state.auth);

  const onInputChange = (e) => {
    dispatch(setLoginFormValue(e.target.name, e.target.value));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(email, password));
  };

  if (isLogin) {
    return <Redirect to={location.state?.from || "/"} />;
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={`text text_type_main-medium mb-6`}>Вход</h2>
      <form className={styles.form} onSubmit={onFormSubmit}>
        <div className={`${styles.form__input} mb-6`}>
          <EmailInput value={email} onChange={onInputChange} name={"email"} />
        </div>
        <div className={`${styles.form__input} mb-6`}>
          <PasswordInput
            value={password}
            onChange={onInputChange}
            name={"password"}
          />
        </div>
        <Button type="primary" size="medium" disabled={!(email && password)}>
          Войти
        </Button>
      </form>
      <div className="mt-20">
        <p className="text text_type_main-default text_color_inactive mb-4">
          Вы — новый пользователь?{" "}
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