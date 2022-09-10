import styles from "./register.module.css";
import {
  Button,
  Input,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useLocation, Redirect } from "react-router-dom";
import {
  registerUser,
  setRegisterFormValue,
} from "../../services/actions/auth";
import { useDispatch, useSelector } from "react-redux";

export function Register() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { isLogin } = useSelector((state) => state.auth);
  const { email, password, name } = useSelector((state) => state.auth.form);

  const onInputChange = (e) => {
    dispatch(setRegisterFormValue(e.target.name, e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(email, password, name));
  };

  if (isLogin) {
    return <Redirect to={location.state?.from || "/"} />;
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
            value={name}
            name={"name"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
        <div className={`${styles.form__input} mb-6`}>
          <EmailInput
            type={"email"}
            placeholder={"E-mail"}
            onChange={onInputChange}
            value={email}
            name={"email"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
        <div className={`${styles.form__input} mb-6`}>
          <PasswordInput
            onChange={onInputChange}
            value={password}
            name={"password"}
          />
        </div>
        <Button
          type="primary"
          size="medium"
          disabled={!(name && email && password)}
        >
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
