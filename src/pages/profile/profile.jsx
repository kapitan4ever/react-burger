import { useState } from "react";
import styles from "./profile.module.css";
import {
  Input,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

export default function ProfilePage() {
  const [value, setValue] = useState({
    email: "",
    name: "",
    password: "",
  });
  const onInputChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  return (
		
		<div className={`${styles.content}`}>
      <div className={styles.wrapper}>
        <form className={styles.form}>
          <div className={`${styles.form__input} mb-6`}>
            <Input
              type={"text"}
              placeholder={"Имя"}
              onChange={onInputChange}
              icon={"EditIcon"}
              value={value.name}
              name={"name"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
          <div className={`${styles.form__input} mb-6`}>
            <EmailInput
              type={"email"}
              placeholder={"Логин"}
              onChange={onInputChange}
              icon={"EditIcon"}
              value={value.email}
              name={"email"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
          <div className={`${styles.form__input} mb-6`}>
            <PasswordInput
              type={"password"}
              placeholder={"Пароль"}
              onChange={onInputChange}
              value={value.password}
              name={"password"}
              icon={"EditIcon"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
