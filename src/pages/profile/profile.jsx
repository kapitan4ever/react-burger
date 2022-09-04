import React, { useState } from 'react';
import styles from "./profile.module.css";
import {
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { singOut, updateUser } from '../../services/actions/auth';

export default function ProfilePage() {
	const dispatch = useDispatch();
	//const {isLogin} = useSelector(state => state.auth);
	//const {name, email, password} = useSelector(state => state.auth.form);
	const { email, name } = useSelector(state => state.auth.user);
	const [form, setForm] = useState({
		email: email,
		name: name,
		password: '',
	});
	const onInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(updateUser(form.email, form.name, form.password));
	};

  return (
		
		<div className={`${styles.content}`}>
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={onSubmit}>
          <div className={`${styles.form__input} mb-6`}>
            <Input
              type={"text"}
              placeholder={"Имя"}
              onChange={onInputChange}
              icon={"EditIcon"}
              value={form.name}
              name={"name"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
          <div className={`${styles.form__input} mb-6`}>
            <Input
              type={"email"}
              placeholder={"Логин"}
              onChange={onInputChange}
              icon={"EditIcon"}
              value={form.email}
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
              value={form.password}
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
